const express = require('express');

const app = express();
const port = 3010;


const fs=require('fs')

// const viewPath="C:/Users/HaktanDevice/OneDrive - HRSP/Desktop/3D Catalog Web Application/P23001/server/Presentation/wwwroot"


const viewPath="C:/home/site/wwwroot/wwwroot"

app.use(express.static(`${viewPath}`))


app.get('/',(req,res,next)=>{
    res.send("hello")
})

app.get("/show",(req,res,next)=>{
    const directory=`${viewPath}/index.html`
    fs.createReadStream(directory).pipe(res);
})

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});
