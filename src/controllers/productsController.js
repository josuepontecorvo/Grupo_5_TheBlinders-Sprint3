const fs = require('fs');
const path = require('path');
const productsJSON = fs.readFileSync(path.resolve(__dirname, '../dataBase/products.json'), 'utf8');
const products = JSON.parse(productsJSON);


controller = {
    products: (req,res) => res.render('products/products', {products}),
    detail: (req,res) => { 
        const id = +req.params.id;
        const product = products.find( product => product.id == id);    
        res.render('products/productDetail', {product})
    },
    edit: (req,res) => res.render('products/productCRUD', {products}),
};

module.exports = controller;