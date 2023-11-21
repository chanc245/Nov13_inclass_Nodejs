import express from 'express'
import { sentence, paragraph } from 'txtgen'
import fetch from 'node-fetch'

import figlet from 'figlet'
//https://www.npmjs.com/package/figlet

import { generate, count } from "random-words";
//https://www.npmjs.com/package/random-words

const app = express()

const port = process.env.PORT || 3001

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
    a randomly generate word:[${randomword}] in ASCII art form
    <br>
    <pre>${formattedData}</pre>
    `);
  });

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

