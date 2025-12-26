import Parser from 'rss-parser';

export async function getNewsFeed() {
    const parser = new Parser();
    try {
        const feed = await parser.parseURL('https://wegov.nyc/news-events/feed/');
        const items = feed.items.slice(0, 3); // Get top 3 items

        // Enhance items with meta images
        const enhancedItems = await Promise.all(items.map(async (item) => {
            try {
                if (!item.link) return item;
                const res = await fetch(item.link);
                const html = await res.text();
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
