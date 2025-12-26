import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
    icon: 'id-card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'elements.link', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    style: Schema.Attribute.Enumeration<['primary', 'secondary', 'text']> &
      Schema.Attribute.DefaultTo<'primary'>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
    icon: 'image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    description: 'Site Footer';
    displayName: 'Footer';
    icon: 'arrow-down';
  };
  attributes: {
    newsletterText: Schema.Attribute.Text;
    newsletterTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Get Involved'>;
    socialLinks: Schema.Attribute.Component<'elements.link', true>;
  };
}

export interface LayoutNavbar extends Struct.ComponentSchema {
  collectionName: 'components_layout_navbars';
  info: {
    description: 'Navigation bar links';
    displayName: 'Navbar';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.link', false>;
    links: Schema.Attribute.Component<'elements.link', true>;
  };
}

export interface SectionsCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_ctas';
  info: {
    description: 'Simple CTA section';
    displayName: 'Call to Action';
    icon: 'bullhorn';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'elements.link', true>;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsFeatureGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_feature_grids';
  info: {
    description: 'Grid of cards';
    displayName: 'Feature Grid';
    icon: 'th-large';
  };
  attributes: {
    cards: Schema.Attribute.Component<'elements.card', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    description: 'Hero section with title and links';
    displayName: 'Hero';
    icon: 'crown';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'elements.link', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsLogoCloud extends Struct.ComponentSchema {
  collectionName: 'components_sections_logo_clouds';
  info: {
    description: 'Section for displaying a grid of logos';
    displayName: 'Logo Cloud';
    icon: 'cloud';
  };
  attributes: {
    logos: Schema.Attribute.Component<'elements.logo', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsNewsFeed extends Struct.ComponentSchema {
  collectionName: 'components_sections_news_feeds';
  info: {
    description: 'Displays the RSS news feed';
    displayName: 'News Feed';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'News & Events'>;
  };
}

export interface SectionsProjectNetwork extends Struct.ComponentSchema {
  collectionName: 'components_sections_project_networks';
  info: {
    description: 'Displays the grid of WeGov projects';
    displayName: 'Project Network';
  };
  attributes: {
    description: Schema.Attribute.Text;
    projects: Schema.Attribute.Relation<'oneToMany', 'api::project.project'>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Project Network'>;
  };
}

export interface SectionsRichText extends Struct.ComponentSchema {
  collectionName: 'components_sections_rich_texts';
  info: {
    description: 'Rich text content block';
    displayName: 'Rich Text';
  };
  attributes: {
    content: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'search';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.card': ElementsCard;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'layout.footer': LayoutFooter;
      'layout.navbar': LayoutNavbar;
      'sections.cta': SectionsCta;
      'sections.feature-grid': SectionsFeatureGrid;
      'sections.hero': SectionsHero;
      'sections.logo-cloud': SectionsLogoCloud;
      'sections.news-feed': SectionsNewsFeed;
      'sections.project-network': SectionsProjectNetwork;
      'sections.rich-text': SectionsRichText;
      'shared.seo': SharedSeo;
    }
  }
}
