import express from 'express'
import { sentence, paragraph } from 'txtgen'
import fetch from 'node-fetch'

import figlet from 'figlet'

import { generate, count } from "random-words";

const app = express()

const port = process.env.PORT || 3001

// Set up a response for the root path of the application
app.get('/', (req, res) => {
  // res.send(sentence())
  // res.send("hello hello! Please draw an octopus, or post an octopus related meme!! :DD")
  let randomword = generate();
  figlet(randomword, function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    const formattedData = data.replace(/ /g, '&nbsp;').replace(/\n/g, '<br>');
    res.send(`
    a randomly generate word:[${randomword}] in ASCII
    <br>
    <pre>${formattedData}</pre>
    `);
  });

})

// Set the application to listen a port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

