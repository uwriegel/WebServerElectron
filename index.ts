import express = require('express')
var app = express()

import speedy = require('spdy')
import fs = require('fs')
import compression = require('compression')

var options = {  
    key: fs.readFileSync('./server-key.pem'),
    cert: fs.readFileSync('./server-crt.pem')
}

app.use(express.static('web'))
app.use(compression())

app.get('/humbug', (req, res) => {
    res.send('Hello Humbug!')
})

speedy.createServer(options, app).listen(443)

