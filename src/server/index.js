

const dotenv = require('dotenv');
dotenv.config();

var path = require('path');
const PORT = 8081
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express()
const fetch = require("node-fetch")

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("dist")) 

app.get("/", (req, res) => {
    res.sendFile(path.resolve("dist/index.html"));
});

app.post('/addurl', async function (req, res) {

    console.log('POST request received');
    let key = process.env.API_KEY;

    let url = req.body.urltext;
    console.log(`the url is ${url}`);
    let url_to_be_sent = `https://api.meaningcloud.com/sentiment-2.1?key=${key}&url=${url}&lang=en`
    const response = await fetch(url_to_be_sent)
    const jsonResponse = await response.json()
    console.log('the response is', jsonResponse)
    res.send(jsonResponse)
})





app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`The Server is listening on port ${PORT}!`)
})

module.exports=app;
