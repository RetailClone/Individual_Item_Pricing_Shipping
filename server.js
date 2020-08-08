const express = require('express');
const path = require('path');
const db = require('./database/queries.js');
const PORT = 7770;

const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(PORT, ()=> console.log(`Individual item server listening on port: ${PORT}`));