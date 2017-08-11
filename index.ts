import express = require('express')
var app = express()

app.use(express.static('web'))

app.get('/humbug', (req, res) => {
    res.send('Hello Humbug!')
})

app.listen(80, () => {
    console.log("Webserver listening on HTTP")
})