const express = require('express');

const app = express();
const port = 3010;


const fs=require('fs')

let viewPath=""

app.use(express.static(`${viewPath}`))

app.get("/:filePath",(req,res,next)=>{
    viewPath+=req.params.filePath
    const directory=`${viewPath}`
    fs.createReadStream(directory).pipe(res);
})
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});