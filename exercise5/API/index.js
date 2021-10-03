const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 4000
const data = require('./data.json');
const cors = require('cors')

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Working')
})


//USERS

app.get('/users', (req, res) => {
  res.json(data.users);
});

app.post('/users', (req, res) => {
  console.log(req.body);
  let id = (data.users[data.users.length-1].id+1);
  data.users.push({
    id: id,
    name: req.body.name,
    address: req.body.address,
    age: req.body.age,
    balance: req.body.balance,
  });

  res.sendStatus(200);
});

//USERS END

//PRODUCTS

app.get('/products', (req, res) => {
  res.json(data.items);
});

app.get('/products/:id', (req, res) => {
  let result = data.items.find(item => item.id == req.params.id);
  res.json(result);
});

app.post('/search', (req, res) => {
  console.log(req.body);
  let result;
  let keyword = req.body.keyword.toLowerCase();

  if(req.body.type == "name"){
    console.log(req.body.keyword);
    result = data.items.filter(item => item.title.toLowerCase().includes(keyword));
  }
  else if(req.body.type == "manufacturer"){
    result = data.items.filter(item => item.manufacturer.toLowerCase().includes(keyword));
  }
  else if(req.body.type == "price_under_50"){
    result = data.items.filter(item => item.price < 50);
  }
  else if(req.body.type == "price_under_100"){
    result = data.items.filter(item => item.price < 100);
  }
  else if(req.body.type == "price_under_400"){
    result = data.items.filter(item => item.price < 400);
  }
  res.json(result);
});

app.post('/products', (req, res) => {
  console.log(req.body);
  let id = (data.items[data.items.length-1].id+1);

  data.items.push({
    id: id,
    title: req.body.title,
    image: req.body.image,
    manufacturer: req.body.manufacturer,
    price: req.body.price,
    rating: req.body.rating,
  });

  res.json(data.items);
});

app.put('/products/:id', (req, res) => {
  objIndex = data.items.findIndex((item => item.id == req.params.id));
  data.items[objIndex] = req.body;
  
  res.sendStatus(200);
});

app.delete('/products/:id', (req, res) => {
  let temp_items = data.items.filter(item => item.id != req.params.id);
  data.items = temp_items;
  res.sendStatus(200);
});

//PRODUCTS END

//INVOICES

app.get('/invoices', (req, res) => {
  res.json(data.invoices);
});

app.get('/invoices/:id', (req, res) => {
  let result = data.invoices.filter(invoice => invoice.user_id == req.params.id);
  res.json(result);
});

app.get('/invoice/:id', (req, res) => {
  let invoices = data.invoices.filter(invoice => invoice.user_id == req.params.id);
  let result = invoices[invoices.length-1];
  res.json(result);

  let id = (data.items[data.items.length-1].id+1);
});

app.post('/purchase', (req, res) => {
  console.log(req.body);
  let id = (data.invoices[data.invoices.length-1].id+1);
  let items = [];
  let total_price = 0;
  for(let i = 0; i < req.body.items.length; i++){
    let item_id = req.body.items[i].item_id;
    let result = data.items.find(item => item.id == item_id);

    items.push({
      item_id : item_id,
      item_name : result.title,
      item_price : result.price,
    });
    total_price += result.price
  }
  data.invoices.push({
    id: id,
    user_id : req.body.user_id,
    items: items,
    total_price: total_price,
  });

  res.sendStatus(200);
});

app.delete('/invoices/:id', (req, res) => {
  let temp_invoices = data.invoices.filter(invoice => invoice.id != req.params.id);
  data.invoices = temp_invoices;
  res.sendStatus(200);
});

//INVOICES END

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})