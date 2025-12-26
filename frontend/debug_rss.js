
const Parser = require('rss-parser');
const parser = new Parser({
    customFields: {
        item: [
            ['content:encoded', 'contentEncoded'],
            ['media:content', 'mediaContent'],
            ['media:thumbnail', 'mediaThumbnail']
        ]
    }
});

(async () => {
    try {
        const feed = await parser.parseURL('https://wegov.nyc/news-events/feed/');
        console.log('Feed Items:', feed.items.slice(0, 1).map(item => ({
            title: item.title,
            contentEncoded: item.contentEncoded ? item.contentEncoded.substring(0, 200) + '...' : 'N/A',
            mediaContent: item.mediaContent,
            mediaThumbnail: item.mediaThumbnail,
            description: item.description ? item.description.substring(0, 200) + '...' : 'N/A'
        })));

        // Check for img tags in contentEncoded
        if (feed.items[0].contentEncoded) {
            const match = feed.items[0].contentEncoded.match(/<img[^>]+src="([^">]+)"/);
            console.log('Found Image in contentEncoded:', match ? match[1] : 'None');
        }
    } catch (e) {
        console.error(e);
    }
})();
