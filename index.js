const express = require('express');

const app = express();
const port = 3010;



const amqp=require('amqplib')

const fs=require('fs')

const directoryName=__dirname
console.log(directoryName)




app.get('/',async(req,res,next)=>{
    console.log(directoryName)
    res.send({
        directoryName
    })
})


app.get('/show',async(req,res,next)=>{
    app.use(express.static(directoryName));
    const directory=`${directoryName}/index.html`
    fs.createReadStream(directory).pipe(res);
})

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});

