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
  gender: String,
  size: String,
  description: String,
  color: String,
  rating: Number,
  image: String
})

let Product = mongoose.model("Product", productSchema);

// let build = (data, callback) => {
//   console.log(data[0].name);
//   var collection = [];
//   var count = 1;
//   data.forEach(function(data) {

//     var newProduct = new Product({
//       productId: count,
//       name: data.name,
//       type: 'bag',
//       gender: 'Unisex',
//       size: 'xl',
//       description: data.description,
//       color: 'acorn',
//       rating: data.userRating,
//       image: ''
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

var getProduct = () => {
  
}

module.exports.build = build;

