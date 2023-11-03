const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');


const stream=require('stream')

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(cors());

// veya sadece belirli bir kaynaktan gelen isteklere izin vermek için:
app.use(cors({
  origin: 'https://sync3dcatalog.netlify.app'
}));

// POST route
app.post('/show-html', (req, res) => {
    const htmlContent = req.body.htmlContent;
    
    if (!htmlContent) {
        return res.status(400).send('HTML content is required.');
    }

    res.writeHead(200,{"Content-Type":"text/html"})
    res.write(htmlContent)
    res.end()
});

// Sunucuyu 3000 portunda başlat
app.listen(3010, () => {
    console.log('express start');
});
