import express from 'express'
import { sentence, paragraph } from 'txtgen'
import fetch from 'node-fetch'

import figlet from 'figlet'

const app = express()

const port = process.env.PORT || 3001

// Set up a response for the root path of the application
app.get('/', (req, res) => {
  // res.send(sentence())
  // res.send("hello hello! Please draw an octopus, or post an octopus related meme!! :DD")

  figlet("Hello World!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    const formattedData = data.replace(/ /g, '&nbsp;').replace(/\n/g, '<br>');
    res.send(`<pre>${formattedData}</pre>`);
    // res.send(data)
    // console.log(data);
  });

})

// Set the application to listen a port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

