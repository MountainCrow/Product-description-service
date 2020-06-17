const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect('mongodb://localhost:27017/fjall_raven', { useNewUrlParser: true});

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log("Database is connected...")
  })

  const productSchema = new mongoose.Schema({
    type: String,
    name: String,
    image: URL,
    price: Number,
    color: String,
    description: String,
    gender: String,
    rating: Number
  });

  const Product = mongoose.model('Product', productSchema);

}