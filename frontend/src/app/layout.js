import { fetchAPI, getStrapiMedia } from '@/lib/api';
import "./base.css";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export async function generateMetadata() {
  try {
    const response = await fetchAPI('/global?populate=*');
    const global = response.data;

    if (!global) return {};

    return {
      title: global.siteName,
      description: global.defaultSeo?.metaDescription,
      icons: {
        icon: getStrapiMedia(global.favicon?.url),
      },
    };
  } catch (error) {
    console.error("Error fetching global metadata:", error);
    // Fallback metadata if the CMS is unreachable.
    return {
      title: 'WeGovNYC',
      description: 'Civic technology projects that help New Yorkers.',
    };
  }
}

export default async function RootLayout({ children }) {
  let global = {};
  try {
    // Populate navbar, footer, seo, favicon
    const response = await fetchAPI('/global?populate[defaultSeo][populate]=*&populate[favicon]=true&populate[footer][populate]=socialLinks&populate[navbar][populate]=*');
    global = response.data;
  } catch (error) {
    console.error("Error fetching global data:", error);
  }

  const { footer, navbar } = global || {};

  // Inject UNNYC nav item with dropdown submenu
  const unnycNavItem = {
    id: 'unnyc',
    label: 'UNNYC',
    url: '/unnyc',
    isExternal: false,
    children: [
      { id: 'unnyc-campaign', label: 'Campaign', url: '/unnyc#open-source', isExternal: false },
      { id: 'unnyc-timeline', label: 'Timeline', url: '/unnyc#movement', isExternal: false },
      { id: 'unnyc-concepts', label: 'Concepts', url: '/unnyc#concepts', isExternal: false },
      { id: 'unnyc-cases', label: 'Cases', url: '/unnyc#cases', isExternal: false },
      { id: 'unnyc-policy', label: 'Crosswalk', url: '/unnyc#policy', isExternal: false },
      { id: 'unnyc-movement', label: 'Movement', url: '/unnyc#going-open-source', isExternal: false },
      { id: 'unnyc-resources', label: 'Resources', url: '/unnyc#resources', isExternal: false },
      { id: 'unnyc-contacts', label: 'Contacts', url: '/unnyc#contacts', isExternal: false },
      { id: 'unnyc-news', label: 'News & Events', url: '/unnyc#news', isExternal: false },
      { id: 'unnyc-guide', label: 'Guide', url: '/unnyc/guide', isExternal: false },
    ],
  };

  const navbarWithUnnyc = navbar ? (() => {
    const links = [...(navbar.links || [])];
    // Insert UNNYC right after Databook
    const databookIdx = links.findIndex((l) => l.label === 'Databook');
    const insertIdx = databookIdx >= 0 ? databookIdx + 1 : 1;
    links.splice(insertIdx, 0, unnycNavItem);
    return { ...navbar, links };
  })() : navbar;

  // Both attributes are STATIC and server-rendered: this site has exactly one
  // theme and one brand.
  //   data-theme="wegov" — selects the theme in app/wegov.css. The runtime
  //     switcher that used to write this after hydration was retired
  //     2026-08-05; see docs/RETIRED-THEMES.md. Setting it here also removes
  //     the unthemed flash the old effect-based write caused on first paint.
  //   data-brand="wegov" — selects the @wegovnyc/design-tokens brand variant.
  return (
    <html lang="en" data-theme="wegov" data-brand="wegov">
      <body>
        <div className="site-wrapper">
          <header className="site-header">
            <Navbar data={navbarWithUnnyc} siteName={global?.siteName} />
          </header>
          <main>{children}</main>
          <Footer data={footer} siteName={global?.siteName} />
        </div>
      </body>
    </html>
  );
}
