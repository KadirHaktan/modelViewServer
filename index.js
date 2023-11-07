const express = require('express');

const app = express();
const port = 3010;


const fs=require('fs')

const viewPath="C://home//site//wwwroot//wwwroot//view"

app.use(express.static(`${viewPath}`))

app.get("/",(req,res,next)=>{
    const directory=`${viewPath}/index.html`
    fs.createReadStream(directory).pipe(res);
})

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});