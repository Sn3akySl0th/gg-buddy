const https = require('https');

https.get('https://gg.deals/', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        // Look for the main logo SVG
        const match = data.match(/<svg[^>]*class="[^"]*logo[^"]*"[^>]*>[\s\S]*?<\/svg>/i);
        if (match) {
            console.log(match[0]);
        } else {
            console.log('Logo SVG not found');
        }
    });
}).on('error', err => {
    console.error(err.message);
});
