const express = require('express')
const app = express()
const port = 3000

var routes        = require( './routes' );

app.get('/', routes.index)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
