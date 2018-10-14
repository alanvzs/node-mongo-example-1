const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const port = 3000

var routes        = require( './routes' );

app.use(bodyParser.json());

app.get('/', routes.index);
app.post('/', routes.store);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
