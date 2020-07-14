const faker = require('faker');
//write a script that will create random data for the table
  //columns we need:
    //color - string, ideally includes a three digit number to later translate it
    //description -- string, just a sentence long
    //gender == string: male, female, unisex
    //image --string (url)
    //name -- string
    //price -- numeric (should have two decimal places)
    //rating -- number 1-5
    //size -- string
    //style -- string
    // totalRatings -- number from 0 to something big
    //type -- string
    //productId -- string, unique based on the product itself
//will eventually be used to load the data as the url
//find a way to save the output in a csv format

let data = [
  {
    color: '215 - Autumn Leaf',// text
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at", // text
    gender: 'unisex',  // text
    image: ["https://picsum.photos/500","https://picsum.photos/400/450"],//text[]
    name: 'KEB DOME', // text
    price: 200, //numeric
    rating: 4, //string
    size: ["One Size"], //text[]
    style: 'style # 123', // text
    total_ratings: 52345,// integer
    type: 'backpack',// text
    product_id: 'bp3649000fc',// text
    identifier: 3649000//integer
  }
];

let productIdCount = 3649001;
let productId = 'bp' + productIdCount + 'fc';

let style = 'style # 123'
let names = require('./names.js');

//faker.commerce.productName
let getName = () => {return names.names[Math.floor(Math.random() * 800000)]};

let images = ["https://picsum.photos/500","https://picsum.photos/400/450"];

let genders = ['female', 'male', 'unisex'];
let getGender = () => {return genders[Math.floor(Math.random() * 3)]};

let price = 200;

let rating = () => {return (Math.min((Math.random() * 6), 5)).toFixed(1)};
let totalRatings = () => {return Math.floor(Math.random() * 1000)};

let sizes = [
  ["Small","Medium","Large","X-Large"],
  ["One Size"]
];
let getSize = () => {return sizes[Math.floor(Math.random() * 2)]};

let types = ['backpack', 'jacket', 'tent', 'trousers', 'shirts', 'shoes', 'gear'];
let getType = () => {return types[Math.floor(Math.random() * 7)]};

let descriptions = ["Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus.", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus.", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu"]
let getDescription = () => {return descriptions[Math.floor(Math.random() * 4)]}

let colors = ['215 - Autumn Leaf','662 - Deep Forest', '031 - Graphite']
let getColor = () => {return colors[Math.floor(Math.random() * 3)]}

let createFile = () => {
  while(productIdCount < 5000000) {
    let record  = {};
    record.color = getColor();
    record.description = getDescription();
    record.gender = getGender();
    record.image = images;
    record.name = getName();
    record.price = price;
    record.rating = rating();
    record.size = getSize();
    record.style = style;
    record.total_ratings = totalRatings();
    record.type = getType();
    record.product_id = 'bp' + productIdCount + 'fc';
    record.identifier = productIdCount;
    data.push(record);
    productIdCount++;
  }
}

createFile();

module.exports.data = data;