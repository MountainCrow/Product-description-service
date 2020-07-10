const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/fjall_raven', {useNewUrlParser: true, useUnifiedTopology: true} )
const sample = require('./sample_data.js')

const { Pool, Client } = require('pg')


const pool = new Pool({
  user:'postgres',
  password:'clippy',
  host:'localhost',
  port:'5432',
  database:'fjall_crow'
})
pool.connect()
  .then(() => {
    console.log('Connected to fjallcrow DB')
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
  let query = `
  SELECT *
  FROM products
  `;
  pool.query(query, (err, res) => {
    cb(err, res.rows)
  })
}
//POSTGRES GET BY ID
var getProductid = (id, cb) => {
  console.log('Got a get for id: ', id)
  let query = `
  SELECT *
  FROM products
  WHERE product_id = '${id}'
  `;
  pool.query(query, (err, res) => {
    if (err) {console.log('err, ', err)}
    else {
      console.log('Got back: ', res.rows)
      cb(err, res.rows)
    }
  })
}
//POSTGRES GET BY NAME
var getProductname = (name, cb) => {
  console.log('Got a get for name: ', name)
  let query = `
  SELECT *
  FROM products
  WHERE name = '${name}'
  `;
  pool.query(query, (err, res) => {
    if (err) {console.log('err, ', err)}
    else {
      //console.log('Got back: ', res.rows)
      cb(err, res.rows)
    }
  })
}


//--------------------------------------------------------
//MONGOOSE INITIALIZATION
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'))
// db.once('open', function() {
//   // we're connected!
//   console.log('Database is running...')
// })

// let productSchema = new mongoose.Schema({
//   productId: Number,
//   name: String,
//   type: String,
//   description: String,
//   rating: Number,
//   totalRatings: Number,
//   price: Number,
//   gender: String,
//   style: String,
//   size: [String],
//   color: String,
//   image: [String]
// })

// let Product = mongoose.model("Product", productSchema)

//--------------------------------------------------------------------
//Populates database with mock data
//NOTE: Original image links will not be accessible and new images will need to be sourced
// let build = (data, callback) => {
//   console.log(data[0].name)
//   var collection = []
//   var count = 1
//   data.forEach(function(data) {

//     var newProduct = new Product({
//       productId: count,
//       name: data.name,
//       type: data.type,
//       price: data.price,
//       description: data.description,
//       rating: data.userRating,
//       totalRatings: data.totalRatings,
//       gender: data.gender,
//       style: data.style,
//       size: data.size,
//       color: data.color,
//       image: data.url
//     })
//     count = count + 1;
//     collection.push(newProduct);
//   })

//   Product.insertMany(collection)
//   .then((res) => {
//     callback(null, res)
//   })
//   .catch((err) => {
//     callback(err, null)
//   })
// }

// MONGOOSE GET ALL WITH RANDOM GENERATION
// var getProducts = (callback) => {
//   const productType = ['backpack', 'jacket', 'tent']
//   const tents = ['KEB DOME', 'ABISKO VIEW', 'ABISKO LITE', 'ABISKO LITE 3', 'ABISKO DOME']
//   const backpacks = ['KANKEN LAPTOP 13\"', 'RAVEN 28','TOTEPACK NO.1']
//   const jackets = ['YUPIK PARKA M', 'STEN JACKET M', 'KAIPAK JACKET M', 'GREENLAND DOWN LINER JACKET M', 'STINA JACKET W', 'KEB JACKET W', 'SINGI DOWN JACKET W', 'NUUK PARKA W']

//   let randomProduct = ''

//   let randProductType = productType[Math.floor(Math.random() * 3)]
//   console.log(randProductType)

//   if (randProductType === 'backpack') {
//     randomProduct = backpacks[Math.floor(Math.random() * 3)]
//   } else if (randProductType === 'jacket') {
//     randomProduct = jackets[Math.floor(Math.random() * 8)]
//   } else {
//     randomProduct = tents[Math.floor(Math.random() * 5)]
//   }

//   Product.find({name: randomProduct})
//   .limit() //set to one for now. Will refactor once components are built
//   .exec((err, data) => {
//     if (err) {
//       callback(err, null)
//     } else {
//       callback(null, data)
//     }
//   })
// }

// uncomment in order to populate db with mock data
// build(sample.data, (err, data) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
module.exports.pool = pool
module.exports.getProducts = getProducts
module.exports.getProductid = getProductid
module.exports.getProductname = getProductname
module.exports.updateOne = updateOne
module.exports.removeOne = removeOne

