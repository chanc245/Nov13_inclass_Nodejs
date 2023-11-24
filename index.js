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
    A randomly generate word:[${randomword}] in ASCII art form
    <br>
    <pre>${formattedData}</pre>
    <br>
    This website is a pratice of utilizing two apis: 
    <br>
    1. <a href="https://www.npmjs.com/package/figlet" target="_blank">figlet</a> 
    - turn words into ASCII Art
    <br>
    2. <a href="https://www.npmjs.com/package/random-words" target="_blank">random-words</a> 
    - generate a random word
    <br>
    <br>
    `);
  });

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

