const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const db = require('../database/config.js')

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, '../../client/dist')))

const corsOptions = {
  origin: 'http://localhost/3000',
  optionSuccessStatus: 200
}
//calls getProducts function which will query the database
app.get('/products', (req, res) => {
  db.getProducts((err,data) => {
    if (err) {
      res.send(err)
    } else {
      res.json(data)
    }
  })
})
//wrote this as a get one based on the id passed in
app.get('/:productId', (req, res) => {
  db.getProduct(req.params.productId)
    .then((product) => {
      res.send(product)
    })
})
//wrote this for an update, probably not correct yet
app.post('/:productId', (req, res) => {
  var id = req.params.productId
  let field = req.body.field
  let newInfo = req.body.data
  db.updateOne(id, field, newInfo)
    .then(res.end())
})
//should remove the product from the database
app.delete('/:productId', (req, res) => {
  db.removeOne(req.params.productId);
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`)
})