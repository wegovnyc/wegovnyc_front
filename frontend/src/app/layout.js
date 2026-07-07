import { fetchAPI, getStrapiMedia } from '@/lib/api';
import "./globals.css";
import "./nyc.css";
import "./amsterdam.css";
import "./wegov.css";
import { ThemeProvider } from '@/context/ThemeContext';
import ThemeToggle from '@/components/ThemeToggle';
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
    return {
      title: 'WeGov Marketing',
      description: 'Built with Strapi & Next.js',
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
      { id: 'unnyc-about', label: 'About', url: '/unnyc#about', isExternal: false },
      { id: 'unnyc-events', label: 'Events', url: '/unnyc#events', isExternal: false },
      { id: 'unnyc-policy', label: 'Policy', url: '/unnyc#policy', isExternal: false },
      { id: 'unnyc-resources', label: 'Resources', url: '/unnyc#resources', isExternal: false },
      { id: 'unnyc-directory', label: 'Directory', url: '/unnyc#directory', isExternal: false },
      { id: 'unnyc-map', label: 'Map', url: '/unnyc#map', isExternal: false },
      { id: 'unnyc-news', label: 'News', url: '/unnyc#news', isExternal: false },
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

  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div className="site-wrapper">
            <header className="site-header">
              <Navbar data={navbarWithUnnyc} siteName={global?.siteName}>
                <ThemeToggle />
              </Navbar>
            </header>
            <main>{children}</main>
            <Footer data={footer} siteName={global?.siteName} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
