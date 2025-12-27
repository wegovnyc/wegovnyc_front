import { fetchAPI } from '@/lib/api';
import SectionRenderer from '@/components/sections/SectionRenderer';


import { draftMode } from 'next/headers';

export const revalidate = 3600; // Revalidate every hour

async function getHomePage() {
  const { isEnabled } = await draftMode();
  try {
    // Explicitly populate nested components for dynamic zones
    const query = '/pages?filters[slug][$eq]=home&populate[content][on][sections.hero][populate]=*&populate[content][on][sections.feature-grid][populate][cards][populate]=*&populate[content][on][sections.cta][populate]=*&populate[content][on][sections.logo-cloud][populate][logos][populate]=*&populate[content][on][sections.project-network][populate][projects][populate]=image&populate[content][on][sections.news-feed][populate]=*&populate[content][on][sections.embed]=true';

    const response = await fetchAPI(query, { isDraftMode: isEnabled });
    return response.data[0];
  } catch (error) {
    console.error("Error fetching home page:", error);
    return { error: error.message };
  }
}

export default async function Home() {
  const page = await getHomePage();

  if (!page) {
    return <div>Loading... (or no Home page found)</div>;
  }

  if (page.error) {
    return (
      <div style={{ padding: '50px', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Error Loading Content</h1>
        <p>Could not fetch data from Strapi.</p>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '5px' }}>
          {page.error}
        </pre>
        <p>Check <code>NEXT_PUBLIC_STRAPI_URL</code> environment variable.</p>
      </div>
    );
  }

  return (
    <div>
      <SectionRenderer sections={page.content} />
    </div>
  );
}
