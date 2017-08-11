import express = require('express')
var app = express()

import speedy = require('spdy')
import fs = require('fs')
import compression = require('compression')

var options = {
    pfx: fs.readFileSync('riegel.selfhost.eu.pfx'),
    passphrase: 'caesar'
}

app.use(express.static('web'))
app.use(compression())

app.get('/humbug', (req, res) => {
    res.send('Hello Humbug!')
})

speedy.createServer(options, app).listen(443)

