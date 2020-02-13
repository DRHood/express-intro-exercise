const express = require('express');
const app = express();

app.use(express.json());

const shops = [];

function getShops() {
    return shops;
}

function getShop(index) {
    return shops[index];
}

function addShop(newShop) {
    shops.push(newShop);
    return shops.indexOf(newShop);
}

function deleteShop(index) {
    shops.splice(index, 1);
}

function updateShop(index, shop) {
    shops[index] = shop;
}

app.get('/shops', function(req, res) {
    res.send(getShops);
});

app.get('/shops/:index', function(req, res) {
    res.send(getShop(req.params.index));
});

app.post('shops', function(req, res) {
    addShop(req.body);
    res.send('ok');
});

app.delete('/shops/:index', function(req, res) {
    deleteShop(req.params.index);
    res.send('ok')
});

app.put('/shops/:index', function(req, res) {
    updateShop(req.params.index, req.body);
    res.send('ok')
});
    
const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Listening on port ' + port);
});