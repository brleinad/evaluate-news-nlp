var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const cors = require('cors')
const aylien = require('aylien_textapi')
const dotenv = require('dotenv');

dotenv.config();

const textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

let link = ''
app.post('/post-link', function (req, res) {
    link = req.body.link
    console.log('Link: ', link)
    res.send({success: true})
    });

app.get('/hashtags', function (req, res) {
    textapi.hashtags({
        url: link // 'http://www.bbc.com/sport/0/football/25912393'
        }, function(error, response) {
        if (error === null) {
            console.log(response.hashtags);
            res.send(response)
        }
    });
})

// designates what port the app will listen to for incoming requests
const port = 8080
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})

