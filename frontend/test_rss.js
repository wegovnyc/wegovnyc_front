
const Parser = require('rss-parser');
const https = require('https');

async function testRSS() {
    // Mimic the fix applied in src/lib/rss.js
    const parser = new Parser({
        requestOptions: {
            agent: new https.Agent({
                rejectUnauthorized: false
            })
        }
    });

    try {
        console.log("Fetching feed...");
        const feed = await parser.parseURL('https://wegov.nyc/news-events/feed/');
        console.log(`Success! Found ${feed.items.length} items.`);
        if (feed.items.length > 0) {
            console.log("First item title:", feed.items[0].title);
        }
    } catch (error) {
        console.error("Error fetching feed:", error);
    }
}

testRSS();
