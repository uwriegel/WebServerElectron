import express = require('express')
var app = express()

import fs = require('fs')
import https = require('https')
var options = { 
    key: fs.readFileSync('server-key.pem'), 
    cert: fs.readFileSync('server-crt.pem'), 
    ca: fs.readFileSync('ca-crt.pem'), 
}

app.use(express.static('web'))

app.get('/humbug', (req, res) => {
    res.send('Hello Humbug!')
})

// app.listen(80, () => {
//     console.log("Webserver listening on HTTP")
// })

https.createServer(options, app).listen(443, () => {
    console.log("Webserver listening on HTTPS")
})
