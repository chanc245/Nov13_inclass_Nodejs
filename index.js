// Import the express library and assign it to a variable
import express from 'express'

// Add this line to the top of the file
import {
  sentence
} from 'txtgen'

// // Update the express app code below to this:
// app.get('/', (req, res) => {
//   const randomSentence = sentence()

//   res.send(randomSentence)
// })

// Create an instance of an express application 
const app = express()

// Set the port the application will be running on
const port = process.env.PORT || 3001

// Set up a response for the root path of the application
app.get('/', (req, res) => {
  res.send(sentence())
  // res.send("hello hello! Please draw an octopus, or post an octopus related meme!! :DD")
})

// Set the application to listen a port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})