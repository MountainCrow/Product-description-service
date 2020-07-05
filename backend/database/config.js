const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/fjall_raven', {useNewUrlParser: true, useUnifiedTopology: true} )


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  // we're connected!
  console.log('Database is running...')
})

let productSchema = new mongoose.Schema({
  productId: Number,
  name: String,
  type: String,
  description: String,
  rating: Number,
  totalRatings: Number,
  price: Number,
  gender: String,
  style: String,
  size: [String],
  color: String,
  image: [String]
})

let Product = mongoose.model("Product", productSchema)

//--------------------------------------------------------------------
//Populates database with mock data - un-comment module.exports below
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
// -------------------------------------------------------------------

var getProducts = (callback) => {

  const productType = ['backpack', 'jacket', 'tent']
  const tents = ['KEB DOME', 'ABISKO VIEW', 'ABISKO LITE', 'ABISKO LITE 3', 'ABISKO DOME']
  const backpacks = ['KANKEN LAPTOP 13\"', 'RAVEN 28','TOTEPACK NO.1']
  const jackets = ['YUPIK PARKA M', 'STEN JACKET M', 'KAIPAK JACKET M', 'GREENLAND DOWN LINER JACKET M', 'STINA JACKET W', 'KEB JACKET W', 'SINGI DOWN JACKET W', 'NUUK PARKA W']

  let randProductType = productType[Math.floor(Math.random() * 3)]
  console.log(randProductType)

  let randomProduct = 'RAVEN 28'

  if (randProductType === 'backpack') {
    randomProduct = backpacks[Math.floor(Math.random() * 3)]
  } else if (randProductType === 'jacket') {
    randomProduct = jackets[Math.floor(Math.random() * 8)]
  } else {
    randomProduct = tents[Math.floor(Math.random() * 5)]
  }

  Product.find({name: randomProduct})
  .limit() //set to one for now. Will refactor once components are built
  .exec((err, data) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, data)
    }
  })
}

// use to populate db with mock data
// db.build(sample.data, (err, data) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })

// module.exports.build = build;
module.exports.getProducts = getProducts

