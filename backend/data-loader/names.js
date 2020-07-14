const faker = require('faker');

createNames = () => {
  let names = [];
  counter = 0;
  while (counter < 800000) {
    var name = faker.commerce.productName();
    names.push(name);
    counter++;
  }
  return names;
}
var names = createNames();
module.exports.names = names;