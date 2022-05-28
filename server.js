const express = require('express');
const apiRoutes = require('./routes/api');
const htmlRoutes = require('./routes/html');

const app = express();
const path = require('path');
const port = process.env.PORT || 3001;


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(port);
console.log('Server started at http://localhost:' + port);