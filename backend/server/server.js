const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const db = require('../database/config.js');

const sample = require('../database/sample_data.js')

app.use(cors());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../../client/dist')));

db.build(sample.data)
// .then(data => console.log(data))

// app.get('/', (req, res) => {
//   db.build(sample.data, callback)
//   .then(data => {
//     console.log(data)
//     res.json(data);
//   })
// })


/*app.post('/', (req, res) => {
    console.log("POST is working...")
})*/

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`)
})