const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/fjall_crow', { useNewUrlParser: true, useUnifiedTopology: true })



//--------------------------------------------------------
//MONGOOSE INITIALIZATION
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  // we're connected!
  console.log('Connected to mongodb')
})

let productSchema = new mongoose.Schema({
  product_id: String,
  name: String,
  type: String,
  description: String,
  rating: String,
  total_ratings: Number,
  price: Number,
  gender: String,
  style: String,
  size: [String],
  color: String,
  image: [String],
  identifier: {
    type: Number,
    unique: true
  }
})

let Product = mongoose.model("Product", productSchema)

const Tasty_Steel_Ball = new Product({
  color: '215 - Autumn Leaf',// text
  description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at", // text
  gender: 'unisex',  // text
  image: "{https://picsum.photos/500,https://picsum.photos/200/450}",//text[]
  name: 'Tasty Steel Ball', // text
  price: 200, //numeric
  rating: 4, //string
  size: "{One Size}", //text[]
  style: 'style # 123', // text
  total_ratings: 545,// integer
  type: 'backpack',// text
  product_id: 'bp0fc',// text
  identifier: 0//integer
})

// Tasty_Steel_Ball.save((err, tasty) => {
//   if (err) {console.log('error saving tasty: ', err)}
//   console.log('tasty!')
// })


var getProducts = (cb) => {
  Product.find()
    .where('identifier').gt(0).lt(100000)
    //.limit(100) //limit results to 100, because you know
    .exec((err, data) => {
      if(err) { cb(err, null) }
      else { cb(null, data) }
    })
}

//MONGOOSE get products by name
var getProductname = (name, cb) => {
  Product.find({ name: name })
    .where('identifier').lt(10000)//.lt(3648999)
    //.limit(23) //set to only return 15 products in the event there are more in db
    .exec((err, data) => {
      cb(err, data)
    })
}

//MONGOOSE get products by id
// identifier is a unique value, so this should only return one
var getProductid = (id, cb) => {
  //console.log('id in db route is: ', typeof(id))
  Product.find({ identifier: id })
    .exec((err, data) => {
      //console.log('got stuff back from find')
      cb(err, data)
    })
}

//MONGOOSE update one
var updateOne = (id, field, newInfo) => {
  //this needs to be updated to find by identifier like getProductid
  var product = Product.findById(id);
  product.field = newInfo
  doc.save()
}
//MONGOOSE DELETE
var removeOne = (id) => {
  //needs to be updated to find by identifier like getproductid
  var product = Product.findByIdAndRemove(id);
}
//MONGOOSE DELETE ALL
var deleteAll = (id) => {
  //var product = Product.findByIdAndRemove(id);
}

module.exports.getProducts = getProducts
module.exports.getProductname = getProductname
module.exports.getProductid = getProductid
module.exports.updateOne = updateOne
module.exports.removeOne = removeOne
module.exports.deleteAll = deleteAll