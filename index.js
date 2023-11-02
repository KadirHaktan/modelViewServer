const express = require('express');

const app = express();
const port = 3010;


const fs=require('fs')
const path=require('path')

// const viewPath="C:/Users/HaktanDevice/OneDrive - HRSP/Desktop/3D Catalog Web Application/P23001/server/Presentation/wwwroot"

const homeDir = require('os').homedir();
const desktopDir = path.join(homeDir,'Desktop')

app.use(express.static(`${desktopDir}`))


app.get('/',(req,res,next)=>{
    res.send("hello")
})

app.get("/show",(req,res,next)=>{
    const directory=`${desktopDir}/index.html`
    fs.createReadStream(directory).pipe(res);
})

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});
