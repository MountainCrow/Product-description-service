const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fjall_raven', {useNewUrlParser: true, useUnifiedTopology: true} )


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Database is running...')
});

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
  size: String,
  color: String,
  image: [String]
})

let Product = mongoose.model("Product", productSchema);

//--------------------------------------------------------------------
//Populates database with mock data - un-comment module.exports below
// let build = (data, callback) => {
//   console.log(data[0].name);
//   var collection = [];
//   var count = 1;
//   data.forEach(function(data) {

//     var newProduct = new Product({
//       productId: count,
//       name: data.name,
//       type: data.type,
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

  Product.find()
  .limit() //set to one for now. Will refactor once components are built
  .exec((err, data) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, data)
    }
  })
}

// module.exports.build = build;
module.exports.getProducts = getProducts;

