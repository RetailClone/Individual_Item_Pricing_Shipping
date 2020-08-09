const mysql = require('mysql');
const databaseConfig = require('./db.config.js');

const connection = mysql.createConnection(databaseConfig);

const getPrice = (id, callback) => {
  connection.query(`SELECT price FROM products WHERE id = ${id}`, (err, results, fields) => {
    if (err) {
      console.log("Query error in getting price", err);
      callback(err, null);
    } else {
      console.log("Success query for price");
      callback(null, results);
    }
  });
};

module.exports = {};