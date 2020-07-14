const app = require('./server.js');
const supertest = require('supertest')
const request = supertest(app)

const products = [
  {
    color: '031 - Graphite',// text
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at", // text
    gender: 'unisex',  // text
    image: ["https://picsum.photos/500", "https://picsum.photos/200/450"],//text[]
    name: 'Handmade Granite Shirt', // text
    price: 200, //numeric
    rating: 5.0, //string
    size: ["One Size"], //text[]
    style: 'style # 123', // text
    total_ratings: 760,// integer
    type: 'backpack',// text
    product_id: 'bp30000fc',// text
    identifier: 30000//integer
  }
];

it('Gets the test endpoint', async done => {
  const res = await request.get('/test')
  console.log('got the test route')
  done()
},

it('Gets 30 products max from main products route', async done => {
  const res = await request.get('/products');
  expect(res.body.length).toBe(30);
  done();
}),

it('Gets one product by ID', async done => {
  const res = await request.get('/id/30000');
  expect(res.body.length).toBe(1);
  expect(res.body[0]).toStrictEqual(products[0]);
  done();
}),

it('Gets up to 30 products by name', async done => {
  const res = await request.get('/name/KEB_DOME');
  expect(res.body.length).toBe(30);
  expect(res.body[0].name).toBe('KEB DOME');
  done();
})