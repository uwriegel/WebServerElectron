import express = require('express')
var app = express()

import speedy = require('spdy')
import fs = require('fs')
import compression = require('compression')

var sslPath = '/etc/letsencrypt/live/riegel.selfhost.eu/'

var options = {  
    key: fs.readFileSync(sslPath + 'privkey.pem'),
    cert: fs.readFileSync(sslPath + 'fullchain.pem')
}

app.use(express.static('web'))
app.use(compression())

app.get('/humbug', (req, res) => {
    res.send('Hello Humbug!')
})

speedy.createServer(options, app).listen(443)

