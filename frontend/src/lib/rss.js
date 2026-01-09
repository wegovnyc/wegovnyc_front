import Parser from 'rss-parser';
import https from 'https';

export async function getNewsFeed() {
    const parser = new Parser({
        requestOptions: {
            agent: new https.Agent({
                rejectUnauthorized: false
            })
        }
    });
    try {
        const feed = await parser.parseURL('https://wegov.nyc/news-events/feed/');
        const items = feed.items.slice(0, 3); // Get top 3 items

        // Enhance items with meta images
        const enhancedItems = await Promise.all(items.map(async (item) => {
            try {
                if (!item.link) return item;

                // Use https.get with a custom agent to bypass SSL verification
                // fetch() is strict about SSL and complex to configure with an agent in all environments
                const html = await new Promise((resolve, reject) => {
                    const req = https.get(item.link, {
                        agent: new https.Agent({ rejectUnauthorized: false }),
                        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; WeGovNYC/1.0)' }
                    }, (res) => {
                        let data = '';
                        res.on('data', (chunk) => data += chunk);
                        res.on('end', () => resolve(data));
                    });

                    req.on('error', (e) => reject(e));
                    req.setTimeout(5000, () => {
                        req.destroy();
                        resolve(''); // Resolve empty string on timeout
                    });
                });

                const match = html.match(/<meta property="og:image" content="([^"]+)"/);
                return {
                    ...item,
                    imageUrl: match ? match[1] : null
                };
            } catch (e) {
                console.error(`Error fetching image for ${item.link}:`, e);
                return item;
            }
        }));

        return enhancedItems;
    } catch (error) {
        console.error("Error fetching RSS feed:", error);
        return [];
    }
}
