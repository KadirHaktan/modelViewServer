const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// POST route
app.post('/show-html', (req, res) => {
    const htmlContent = req.body.htmlContent;
    
    if (!htmlContent) {
        return res.status(400).send('HTML content is required.');
    }
    
    res.send(htmlContent);
});

// Sunucuyu 3000 portunda başlat
app.listen(3010, () => {
    console.log('express start');
});
