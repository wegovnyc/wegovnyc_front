import { fetchAPI } from '@/lib/api';
import SectionRenderer from '@/components/sections/SectionRenderer';


import { draftMode } from 'next/headers';

export const dynamic = 'force-dynamic';

async function getHomePage() {
  const { isEnabled } = await draftMode();
  try {
    // Explicitly populate nested components for dynamic zones
    const query = '/pages?filters[slug][$eq]=home&populate[content][on][sections.hero][populate]=*&populate[content][on][sections.feature-grid][populate][cards][populate]=*&populate[content][on][sections.cta][populate]=*&populate[content][on][sections.logo-cloud][populate][logos][populate]=*&populate[content][on][sections.project-network][populate][projects][populate]=image&populate[content][on][sections.news-feed][populate]=*';

    const response = await fetchAPI(query, { isDraftMode: isEnabled });
    return response.data[0];
  } catch (error) {
    console.error("Error fetching home page:", error);
    return null;
  }
}

export default async function Home() {
  const page = await getHomePage();

  if (!page) {
    return <div>Loading... (or no Home page found)</div>;
  }

  return (
    <div>
      <SectionRenderer sections={page.content} />
    </div>
  );
}
