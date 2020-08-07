const express = require('express');
const parth = require('path');

const PORT = 5000;
const app = express();

app.use(express.static(__dirname + '/public'));
app.listen(PORT);

app.get('/', (req, res) => {
  res.send({working: true})
})