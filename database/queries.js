const mysql = require('mysql');
const databaseConfig = require('./db.config.js');

const connection = mysql.createConnection(databaseConfig);

module.exports = {};