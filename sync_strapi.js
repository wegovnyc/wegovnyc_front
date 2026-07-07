/**
 * Sync content from Strapi Cloud to Lightsail Strapi
 */

const STRAPI_CLOUD = 'https://dedicated-cherry-1494c7faee.strapiapp.com';
const LIGHTSAIL = 'https://strapi.wegov.nyc';
const LIGHTSAIL_TOKEN = process.env.LIGHTSAIL_TOKEN;

// Remove id fields from nested objects
function cleanData(obj) {
    if (Array.isArray(obj)) {
        return obj.map(cleanData);
    }
    if (obj && typeof obj === 'object') {
        const cleaned = {};
        for (const [key, value] of Object.entries(obj)) {
            // Skip id, documentId, createdAt, updatedAt, publishedAt
            if (['id', 'documentId', 'createdAt', 'updatedAt', 'publishedAt'].includes(key)) continue;
            cleaned[key] = cleanData(value);
        }
        return cleaned;
    }
    return obj;
}

async function fetchFromCloud(endpoint) {
    const res = await fetch(`${STRAPI_CLOUD}/api/${endpoint}`);
    const json = await res.json();
    return json.data;
}

async function getLightsailData(endpoint) {
    const res = await fetch(`${LIGHTSAIL}/api/${endpoint}`, {
        headers: { 'Authorization': `Bearer ${LIGHTSAIL_TOKEN}` }
    });
    const json = await res.json();
    return json.data;
}

async function deleteFromLightsail(endpoint, documentId) {
    await fetch(`${LIGHTSAIL}/api/${endpoint}/${documentId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${LIGHTSAIL_TOKEN}` }
    });
}

async function postToLightsail(endpoint, data) {
    const res = await fetch(`${LIGHTSAIL}/api/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LIGHTSAIL_TOKEN}`
        },
        body: JSON.stringify({ data })
    });
    return res.json();
}

async function syncPages() {
    console.log('\n=== Syncing Pages ===');

    const cloudPages = await fetchFromCloud('pages?populate=*');
    console.log(`Found ${cloudPages.length} pages in Cloud`);

    // Delete existing pages
    const existing = await getLightsailData('pages');
    if (existing) {
        for (const page of existing) {
            console.log(`Deleting: ${page.title}`);
            await deleteFromLightsail('pages', page.documentId);
        }
    }

    // Create new pages
    for (const page of cloudPages) {
        const cleaned = {
            title: page.title,
            slug: page.slug,
            content: cleanData(page.content),
            publishedAt: new Date().toISOString()
        };

        const result = await postToLightsail('pages', cleaned);
        console.log(result.error ? `✗ ${page.title}: ${result.error.message}` : `✓ ${page.title}`);
    }
}

async function syncProjects() {
    console.log('\n=== Syncing Projects ===');

    const cloudProjects = await fetchFromCloud('projects?populate=*');
    if (!cloudProjects) {
        console.log('No projects found');
        return;
    }
    console.log(`Found ${cloudProjects.length} projects in Cloud`);

    // Delete existing projects
    const existing = await getLightsailData('projects');
    if (existing) {
        for (const proj of existing) {
            console.log(`Deleting: ${proj.title}`);
            await deleteFromLightsail('projects', proj.documentId);
        }
    }

    // Create new projects (without images for now)
    for (const proj of cloudProjects) {
        const cleaned = {
            title: proj.title,
            description: proj.description,
            link: proj.link,
            publishedAt: new Date().toISOString()
        };

        const result = await postToLightsail('projects', cleaned);
        console.log(result.error ? `✗ ${proj.title}: ${result.error.message}` : `✓ ${proj.title}`);
    }
}

async function syncGlobal() {
    console.log('\n=== Syncing Global ===');

    const global = await fetchFromCloud('global?populate[navbar][populate]=*&populate[footer][populate]=*');
    if (!global) {
        console.log('No global found');
        return;
    }

    const cleaned = cleanData(global);
    cleaned.publishedAt = new Date().toISOString();

    const res = await fetch(`${LIGHTSAIL}/api/global`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LIGHTSAIL_TOKEN}`
        },
        body: JSON.stringify({ data: cleaned })
    });

    const result = await res.json();
    console.log(result.error ? `✗ ${result.error.message}` : '✓ Global updated');
}

async function main() {
    console.log('=== Strapi Cloud → Lightsail Sync ===');

    await syncPages();
    await syncProjects();
    await syncGlobal();

    console.log('\n=== Sync Complete ===');
}

main().catch(console.error);
