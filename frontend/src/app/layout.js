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

  // UNNYC is its own site now (github.com/sarapis/unnyc → unnyc.wegov.nyc), so this
  // is a plain EXTERNAL link. It used to point at /unnyc with a ten-item submenu of
  // `/unnyc#section` anchors; that campaign was restructured into separate routes
  // (/start, /crosswalk, /success, /campaign, /resources) when it moved out, so
  // every one of those anchors had stopped resolving — they landed on the hub with a
  // dead fragment. Linking the site directly is both correct and one hop shorter
  // than going through the /unnyc redirect.
  //
  // Injected here rather than in the CMS so it sits next to Databook (the other
  // product) regardless of how the CMS orders its own links. Move it into the
  // Payload Site doc if you'd rather edit it without a deploy.
  const unnycNavItem = {
    id: 'unnyc',
    label: 'UNNYC',
    url: 'https://unnyc.wegov.nyc',
    isExternal: true,
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
