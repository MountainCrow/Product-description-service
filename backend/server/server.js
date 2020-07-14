const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
//connect to postgres
const db = require('../database/config-update.js')
//connect to mongo
//const db = require('../database/config-mg.js')
// this line connects this file to the data generator and runs the create data/csv writer functions. Uncomment to generate more data
//const dataa = require('../data-loader/generate.js')

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, '../../client/dist')))

const corsOptions = {
  origin: 'http://localhost/3001',
  optionSuccessStatus: 200
}
//calls getProducts function which will query the database
app.get('/products', (req, res) => {
  db.getProducts((err, data) => {
    if (err) {
      //console.log('server had error')
      res.end()
    } else {
      //console.log('server got: ', data)
      res.send(data)
    }
  })
})
//wrote this as a get one based on the id passed in
app.get('/name/:productName', (req, res) => {
  let name = req.params.productName.split('_');
  name = name.join(' ');
  console.log('name of product: ', name)
  db.getProductname(name, (err, data) => {
    if (err) {
      //console.log('server had error')
      res.end()
    } else {
      console.log('server got: ', data.length)
      res.send(data)
    }
  })
    // .then((product) => {
    //   res.send(product)
    // })
})
//Get based on productID
app.get('/id/:productId', (req, res) => {
  let id = Number(req.params.productId);
  //console.log('id from route: ', id)
  db.getProductid(id, (err, data) => {
    if (err) {
      console.log('server had error', err)
      res.end()
    } else {
      //console.log('server got: ', data)
      res.send(data)
    }
  })
})
// //wrote this for an update, probably not correct yet
// app.post('/:productId', (req, res) => {
//   var id = req.params.productId
//   let field = req.body.field
//   let newInfo = req.body.data
//   db.updateOne(id, field, newInfo)
//     .then(res.end())
// })
//should remove the product from the database
app.delete('/remove', (req, res) => {
  db.deleteAll((err, data) => {
    if (err) {console.log('error: ', err)}
    console.log('deleted')
    res.end();
  });
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`)
})