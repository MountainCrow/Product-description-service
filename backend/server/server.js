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

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`)
})