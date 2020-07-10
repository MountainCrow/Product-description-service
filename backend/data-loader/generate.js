const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const data = require('./data.js')
const csvWriter = createCsvWriter({
  path: 'data.csv',
  fieldDelimiter: ';',
  header: [
    {id: 'color' , title: 'color' },
    {id: 'description' , title: 'description' },
    {id: 'gender' , title: 'gender' },
    {id: 'image' , title: 'image' },
    {id: 'name' , title: 'name' },
    {id: 'price' , title: 'price' },
    {id: 'rating' , title: 'rating' },
    {id: 'size' , title: 'size' },
    {id: 'style' , title: 'style' },
    {id: 'total_ratings' , title: 'total_ratings' },
    {id: 'type' , title: 'type' },
    {id: 'product_id' , title: 'product_id' },
  ]
});

// csvWriter
//   .writeRecords(data.data)
//   .then(() => console.log('File generated!'))