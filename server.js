const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./database/queries.js');
const PORT = 7770;

const app = express();
app.use(cors());


app.use(express.static(__dirname + '/public'));

//This route is provided to test if server is connected to database. It should send an array of objects.
app.get("/testBackendConnection", (req, res) => {
  db.testDbConnect( (err, results)=> {
    if(err) {
      res.send(err);
    } else {
      res.send(results);
    }
  })
})

//This route will get price of product
app.get("/product/price/:Id", (req, res) => {
  let productIdNum = parseInt(req.params.Id);
  db.getPrice(productIdNum, (err, results)=>{
    if (err) {
      console.log("Error in price route")
      res.sendStatus(400);
    } else {
      if (results.length === 0) {
        console.log('item not in database')
        res.send( {"price": 0.00} )
      }
      console.log("Successful price query")
      res.status(200).send(results[0]);
    }
  })
});

//This route will get photos of product
app.get("/product/photos/:product", (req, res) => {
  let productIdNum = parseInt(req.params.product);
  db.getPhotos(productIdNum, (err, results)=>{
    if (err) {
      console.log("Error in photos route")
      res.sendStatus(400);
    } else {
      if (results.length === 0) {
        console.log('item not in database')
        res.send( [{"link": 'https://atlanticairtool.com/images/Specials/1400/1401.png'}] )
      }
      console.log("Successful photos query")
      res.status(200).send(results);
    }
  })
});

app.listen(PORT, ()=> console.log(`Individual item server listening on port: ${PORT}`));