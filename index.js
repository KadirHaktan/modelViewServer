const express = require('express');

const app = express();
const port = 3010;



const amqp=require('amqplib')


const directoryName=__dirname
console.log(directoryName)


app.get('/',async(req,res,next)=>{
    await Send({
        directoryName
    },"downloadPathInfo")

    res.send(200)
})


app.get('/show',async(req,res,next)=>{
    const directory=`${directoryName}/index.html`
    fs.createReadStream(directory).pipe(res);
})

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});



async function Send(data, channelName) {
    const connection = await amqp.connect(
        'amqps://asylnloi:X0SDax_OxfphJtZlP4WEMkSlKvC6ShWr@sparrow.rmq.cloudamqp.com/asylnloi'
    );
  
    const channel = await connection.createChannel();
    await channel.assertQueue(channelName, { durable: true });
  
    const message = JSON.stringify(data);
    const messageBody = Buffer.from(message, 'utf-8');
  
    channel.sendToQueue(channelName, messageBody);
  
    console.log(`Mesaj gönderildi: ${message}`);
  
    await channel.close();
    await connection.close();
  }
  
  