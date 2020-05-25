const express = require('express');
const path = require('path');
const routes = require('./routes');
const app = express();

const port = 3000;

const apiService = require('./services/APIService');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.use(express.static(path.join(__dirname, './static')));


app.use('/', routes({apiService}));

// app.get('/post/:param', (request, response) => {
//     response.send(`Param recieved: ${request.params.param}`);
// });

app.listen(port);