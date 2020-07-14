const { Pool, Client } = require('pg')
require('dotenv').config()

const pool = new Pool({
  user: process.env.PG_user,
  password: process.env.PG_password,
  host: process.env.PG_host,
  port: process.env.PG_port,
  database: process.env.PG_database
})
pool.connect()
  .then(() => {
    console.log('Connected to fjallcrow PG DB')
  })
  .catch((e) => {
    console.log('error: ', e)
  })

//MONGOOSE update one
var updateOne = (id, field, newInfo) => {
  var product = Product.findById(id);
  product.field = newInfo
  doc.save()
}
//MONGOOSE DELETE
var removeOne = (id) => {
  var product = Product.findByIdAndRemove(id);
}

// POSTGRES GET ALL
var getProducts = (cb) => {
  //gets all, with a limit of 15
  let query = `
  SELECT *
  FROM products
  LIMIT 30
  `;
  pool.query(query, (err, res) => {
    //console.log('Got back ', res.rows.length, ' rows')
    cb(err, res.rows)
  })
}
//POSTGRES GET BY ID
var getProductid = (id, cb) => {
  //queries all with a specific ID (should return only 1)
  console.log('Got a get for id: ', id)
  let query = `
  SELECT *
  FROM products
  WHERE identifier = '${id}'
  `;
  pool.query(query, (err, res) => {
    if (err) {console.log('err, ', err)}
    else {
      // console.log('Got back ', res.rows.length, ' rows')
      cb(err, res.rows)
    }
  })
}
//POSTGRES GET BY NAME
var getProductname = (name, cb) => {
  //queries all with a specific name (should return many, limit to 15)
  console.log('Got a get for name: ', name)
  let query = `
  SELECT *
  FROM products
  WHERE name = '${name}'
  LIMIT 30
  `;
  pool.query(query, (err, res) => {
    if (err) {console.log('err, ', err)}
    else {
      //console.log('Got back: ', res.rows)
      cb(err, res.rows)
    }
  })
}

//Postgres CLEAR all from table products. Does not delete table itself, just all entries
var deleteAll = (cb) => {
  let query = `
  DELETE FROM products
  `
  pool.query(query, (err, res) => {
    if (err) {console.log('err, ', err)}
    else {
      cb(res)
    }
  })
}


module.exports.pool = pool
module.exports.getProducts = getProducts
module.exports.getProductid = getProductid
module.exports.getProductname = getProductname
module.exports.updateOne = updateOne
module.exports.removeOne = removeOne
module.exports.deleteAll = deleteAll
