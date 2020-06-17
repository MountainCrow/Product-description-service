const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../../client/dist')));

app.get('/', (req, res) => {
  res.sendStatus(200)
})

/*app.post('/', (req, res) => {
    console.log("POST is working...")
})*/

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`)
})