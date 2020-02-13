const express = require('express');
const app = express();

app.use(express.json());

const shops = [];

app.get('/getShops', function(req, res) {
    res.send(shops);
});

app.get('/getShop/:index', function(req, res) {
    res.send(shops[req.params.index]);
});

app.post('/addShop', function(req, res) {
    shops.push(req.body);
    res.send(get);
});

app.delete('/shops/:index', function(req, res) {
    res.send(shops.splice([req.params.index]))
});

app.put('/shops/:index', function(req, res) {
    res.send(shops[req.params.index]=req.body)
});
    
const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Listening on port ' + port);
});