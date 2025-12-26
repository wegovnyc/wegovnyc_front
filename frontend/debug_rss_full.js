
const Parser = require('rss-parser');
const parser = new Parser();

(async () => {
    try {
        const feed = await parser.parseURL('https://wegov.nyc/news-events/feed/');
        console.log('Keys in first item:', Object.keys(feed.items[0]));
        console.log('First Item Content:', feed.items[0]);
    } catch (e) {
        console.error(e);
    }
})();
