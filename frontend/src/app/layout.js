import { fetchAPI, getStrapiMedia } from '@/lib/api';
import "./globals.css";
import "./nyc.css";
import "./amsterdam.css";
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

  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div className="site-wrapper">
            <header className="site-header">
              <Navbar data={navbar} siteName={global?.siteName}>
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
