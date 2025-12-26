'use strict';

module.exports = {
  register(/*{ strapi }*/) { },

  async bootstrap({ strapi }) {
    // 1. Seed Global with Footer and Navbar
    const global = await strapi.db.query('api::global.global').findOne({ populate: ['footer', 'footer.socialLinks', 'navbar', 'navbar.links', 'navbar.button'] });
    if (!global || !global.footer || !global.navbar) {

      const globalData = {
        siteName: 'WeGovNYC',
        defaultSeo: {
          metaTitle: 'Civic & Public Tech Projects in NYC',
          metaDescription: 'WeGovNYC is a collective of civic tech projects and people in NYC.'
        },
        navbar: {
          links: [
            { label: 'Databook', url: 'https://databook.nyc', isExternal: true },
            { label: 'News & Events', url: '#news', isExternal: false },
            { label: 'About', url: '/about', isExternal: false },
            { label: 'Get Involved', url: '/get-involved', isExternal: false }
          ],
          button: { label: 'Donate', url: 'https://opencollective.com/wegovnyc', isExternal: true, style: 'primary' }
        },
        footer: {
          newsletterTitle: 'Get Involved',
          newsletterText: 'Subscribe to our newsletter, join our Notion workspace, or chat with us on Slack.',
          socialLinks: [
            { label: 'Newsletter', url: 'https://wegovnyc.substack.com/', isExternal: true, style: 'secondary' },
            { label: 'Notion', url: 'https://www.notion.so/wegovnyc', isExternal: true, style: 'secondary' },
            { label: 'Slack', url: 'https://slack.wegov.nyc', isExternal: true, style: 'secondary' }
          ]
        }
      };

      if (!global) {
        await strapi.entityService.create('api::global.global', { data: globalData });
      } else {
        await strapi.entityService.update('api::global.global', global.id, { data: globalData });
      }
      strapi.log.info('Seeded Global data with Footer');
    }

    // Helper to upload images
    const fs = require('fs');
    const path = require('path');

    async function uploadImage(fileName, altText) {
      const filePath = path.join(__dirname, '../seed-images', fileName);
      // Ensure seed-images exists
      if (!fs.existsSync(filePath)) {
        strapi.log.warn(`[Seeding] Seed image not found: ${filePath}`);
        return null;
      }

      const baseName = path.basename(fileName);

      // Check if exists
      const [existing] = await strapi.entityService.findMany('plugin::upload.file', {
        filters: { name: baseName },
        limit: 1
      });
      if (existing) {
        strapi.log.info(`[Seeding] Found existing image: ${baseName}`);
        return existing;
      }

      const stats = fs.statSync(filePath);
      const fileExtension = path.extname(filePath);
      const mimeType = (fileExtension === '.jpg' || fileExtension === '.jpeg') ? 'image/jpeg' :
        (fileExtension === '.png') ? 'image/png' :
          (fileExtension === '.webp') ? 'image/webp' : 'application/octet-stream';

      try {
        const uploadedFiles = await strapi.plugin('upload').service('upload').upload({
          data: {
            fileInfo: {
              alternativeText: altText,
              caption: altText,
              name: baseName
            }
          },
          files: {
            originalFilename: baseName,
            filepath: filePath,
            mimetype: mimeType,
            size: stats.size,
          }
        });
        strapi.log.info(`[Seeding] Successfully uploaded image: ${baseName}`);
        return uploadedFiles[0];
      } catch (e) {
        strapi.log.error(`[Seeding] Failed to upload ${baseName}: ${e.message}`);
        return null;
      }
    }

    // Upload Section Images
    const images = {
      agencies: await uploadImage('agencies.jpg', 'Manhattan Municipal Building'),
      people: await uploadImage('people.webp', 'People of NYC Government'),
      notices: await uploadImage('notices.jpeg', 'City Record Notices'),
      schools: await uploadImage('schools.jpg', 'NYC Schools'),
      projects: await uploadImage('projects.jpeg', 'Capital Projects'),
      districts: await uploadImage('districts.png', 'Districts Map'),
      titles: await uploadImage('titles.jpeg', 'Civil Service Titles'),
      auctions: await uploadImage('auctions.png', 'City Auctions'),
      civicTech: await uploadImage('projects/civic-tech-guide.jpg', 'Civic Tech Guide'),
      reportedApp: await uploadImage('projects/reported-app.png', 'Reported App'),
      manyc: await uploadImage('projects/manyc-resources.png', 'MANYC Resources'),
      openDataStack: await uploadImage('projects/open-data-stack.png', 'The Open Data Stack')
    };

    // Seed Projects
    const projectsData = [
      {
        title: 'Civic Tech Guide',
        description: 'Crowdsourced, global collection of tech for good tools and projects',
        link: 'https://civictech.guide/',
        image: images.civicTech ? images.civicTech.id : null
      },
      {
        title: 'Reported App',
        description: 'Submit feedback about NYC taxis in 30 seconds directly to TLC & NYC 311',
        link: 'https://reportedly.weebly.com/',
        image: images.reportedApp ? images.reportedApp.id : null
      },
      {
        title: 'MANYC Resources',
        description: 'Volunteer-curated library of social service resources available to New Yorkers',
        link: 'https://resources.mutualaid.nyc/',
        image: images.manyc ? images.manyc.id : null
      },
      {
        title: 'The Open Data Stack',
        description: 'Open source data pipelines that make government data more useful',
        link: 'https://theopendatastack.com/',
        image: images.openDataStack ? images.openDataStack.id : null
      }
    ];

    const createdProjectIds = [];

    for (const project of projectsData) {
      const existingProject = await strapi.db.query('api::project.project').findOne({ where: { title: project.title } });
      if (existingProject) {
        await strapi.entityService.delete('api::project.project', existingProject.id);
        strapi.log.info(`[Seeding] Deleted existing project: ${project.title}`);
      }

      strapi.log.info(`[Seeding] Creating project ${project.title} with image ID: ${project.image}`);
      const createdProject = await strapi.entityService.create('api::project.project', {
        data: {
          ...project,
          publishedAt: new Date(), // Ensure published
        }
      });
      createdProjectIds.push(createdProject.id);
      strapi.log.info(`[Seeding] Created project: ${project.title}`);
    }

    // 2. Seed Home Page (Full WeGov Structure)
    // FORCE DELETE AND RECREATE to ensure full content structure
    const homePage = await strapi.db.query('api::page.page').findOne({ where: { slug: 'home' } });
    if (homePage) {
      await strapi.entityService.delete('api::page.page', homePage.id);
      strapi.log.info('Deleted existing Home Page to re-seed');
    }

    await strapi.entityService.create('api::page.page', {
      data: {
        title: 'Home',
        slug: 'home',
        publishedAt: new Date(),
        content: [
          {
            __component: 'sections.hero',
            title: "Let's Open Source New York City Government Together",
            subtitle: "We're a nonprofit project creating and coordinating civic tech project to deliver New York City the world's best and most open municipal government.",
            buttons: []
          },
          {
            __component: 'sections.feature-grid',
            title: 'Databook',
            description: 'A collection of datasets and tools for exploring NYC government.',
            cards: [
              {
                title: 'Agencies',
                description: 'Data-powered profiles of every NYC government agency',
                link: { label: 'Explore', url: '/agencies', isExternal: false },
                image: images.agencies ? images.agencies.id : null
              },
              {
                title: 'People',
                description: 'Profiles of everyone in NYC government',
                link: { label: 'Find', url: '/people', isExternal: false },
                image: images.people ? images.people.id : null
              },
              {
                title: 'Notices',
                description: 'News and events from all of NYC\'s government agencies',
                link: { label: 'Search', url: '/notices', isExternal: false },
                image: images.notices ? images.notices.id : null
              },
              {
                title: 'Schools',
                description: 'K-12 school, building and district profiles',
                link: { label: 'Explore', url: '/schools', isExternal: false },
                image: images.schools ? images.schools.id : null
              },
              {
                title: 'Projects',
                description: 'A page for every capital project funded by NYC',
                link: { label: 'View', url: '/capital-projects', isExternal: false },
                image: images.projects ? images.projects.id : null
              },
              {
                title: 'Districts',
                description: 'Neighborhood, city council and community district data',
                link: { label: 'Explore', url: '/districts', isExternal: false },
                image: images.districts ? images.districts.id : null
              },
              {
                title: 'Titles',
                description: 'The roles, positions and pay of NYC\'s civil servants',
                link: { label: 'View', url: '/titles', isExternal: false },
                image: images.titles ? images.titles.id : null
              },
              {
                title: 'Auctions',
                description: 'A consolidated list of items being sold by city agencies',
                link: { label: 'Browse', url: '/auctions', isExternal: false },
                image: images.auctions ? images.auctions.id : null
              }
            ]
          },

          {
            __component: 'sections.logo-cloud',
            title: 'As Seen In',
            logos: []
          },



          {
            __component: 'sections.project-network',
            title: 'Project Network',
            description: 'Explore our network of civic tech projects.',
            projects: createdProjectIds
          },
          {
            __component: 'sections.news-feed',
            title: 'News & Events',
            description: 'Latest updates from the community.'
          }
        ]
      }
    });

    strapi.log.info('Created Full Home Page data');

    // Seed About Page
    const aboutPage = await strapi.db.query('api::page.page').findOne({ where: { slug: 'about' } });
    if (aboutPage) {
      await strapi.entityService.delete('api::page.page', aboutPage.id);
      strapi.log.info('Deleted existing About Page to re-seed');
    }

    await strapi.entityService.create('api::page.page', {
      data: {
        title: 'About',
        slug: 'about',
        publishedAt: new Date(),
        content: [
          {
            __component: 'sections.hero',
            title: 'About WeGovNYC',
            subtitle: 'Making NYC the best run municipality in the world.'
          },
          {
            __component: 'sections.rich-text',
            content: `WeGovNYC is an organizing initiative bringing public interest and civic technologists together to make New York City the best run municipality in the world.

Through a combination of community building, product development and issue advocacy, WeGov advances a vision of an open source city that efficiently delivers projects and services to its residents, provides leadership to its region and actively contributes its knowledge to improve solutions for cities around the world.

Our initiative’s three main constituencies are:
- Public servants in a position to advocate for and advance free and open source solutions within city government.
- Concerned citizens who want to help advance an open source digital transformation of New York City.
- Policy makers who want to use technology to improve the lives of the New Yorkers they serve.

Check out our award-winning [Databook app](http://databook.wegov.nyc/) and please [get involved](https://www.notion.so/wegovnyc/Get-Involved-d31cee2e3ea04051b600e0a5b902daab)!`
          }
        ]
      }
    });
    strapi.log.info('Created About Page data');

    // 3. Set Public Permissions
    try {
      const publicRole = await strapi.db.query('plugin::users-permissions.role').findOne({ where: { type: 'public' } });

      if (publicRole) {
        const permissions = await strapi.db.query('plugin::users-permissions.permission').findMany({
          where: {
            role: publicRole.id,
            action: {
              $in: [
                'api::article.article.find',
                'api::article.article.findOne',
                'api::global.global.find',
                'api::page.page.find',
                'api::page.page.findOne',
                'api::project.project.find',
                'api::project.project.findOne'
              ]
            }
          }
        });

        const actionsToEnable = [
          'api::article.article.find',
          'api::article.article.findOne',
          'api::global.global.find',
          'api::page.page.find',
          'api::page.page.findOne',
          'api::project.project.find',
          'api::project.project.findOne'
        ];

        for (const action of actionsToEnable) {
          const exists = permissions.find(p => p.action === action);
          if (!exists) {
            await strapi.entityService.create('plugin::users-permissions.permission', {
              data: {
                action: action,
                role: publicRole.id
              }
            });
            strapi.log.info(`Enabled public permission: ${action}`);
          }
        }
      }
    } catch (error) {
      strapi.log.error('Failed to set permissions programmatically: ' + error.message);
    }
  },
};
