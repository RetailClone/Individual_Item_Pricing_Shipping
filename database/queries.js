const mysql = require("mysql");
const databaseConfig = require("./db.config.js");

const connection = mysql.createConnection(databaseConfig);

const testDbConnect = (callback) => {
  connection.query("SELECT price FROM products", (err, results, field) => {
    if (err) {
      console.log("Error in testDbConnect", err);
      callback(err, null);
    } else {
      console.log("Success from testDbConnect");
      callback(null, results);
    }
  });
}

const getName = (id, callback) => {
  connection.query(
    `SELECT name FROM products WHERE id = ${id}`,
    (err, results, fields) => {
      if (err) {
        console.log("Query error in getting name", err);
        callback(err, null);
      } else {
        console.log("Success query for name");
        callback(null, results);
      }
    }
  );
};

const getPrice = (id, callback) => {
  connection.query(
    `SELECT price FROM products WHERE id = ${id}`,
    (err, results, fields) => {
      if (err) {
        console.log("Query error in getting price", err);
        callback(err, null);
      } else {
        console.log("Success query for price");
        callback(null, results);
      }
    }
  );
};

const getPhotos = (id, callback) => {
  connection.query(
    `SELECT id,link FROM photos WHERE product = ${id}`,
    (err, results, fields) => {
      if (err) {
        console.log("Query error in getting photos", err);
        callback(err, null);
      } else {
        console.log("Success query for photos");
        callback(null, results);
      }
    }
  );
};

module.exports = { testDbConnect, getName, getPrice, getPhotos };