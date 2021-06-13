const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer();
const express = require('express');
//const routeImport = requrie('./routes/routeName');

var app = express();

app.use(express.json());

//route middleware
//app.use('/route-name', routeImport)

app.get('/', (req, res) => {
    res.send('Home');
})

app.listen(port, () => console.log(`PeppermintAPI listening on port ${port}!`))