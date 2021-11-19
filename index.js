const rss = require('rss-generator');
const fs = require('fs');

const feed = new rss({title: 'random cat api', description: 'This rss feed make from random cat api.'});
feed.item({title: 'meow', description: 'meow', url: 'https://purr.objects-us-east-1.dream.io/i/ODD9FR6.jpg'})
fs.writeFileSync('feeds/cat.rss', feed.xml({indent: true}));