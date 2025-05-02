const Product = require('../model/addProduct')
const fs = require('fs');
module.exports.getMainPage = (req, res) => {
  Product.fetchAllProduct((products) => {

    res.render('index', { path: '/', pageTitle: 'shop', products: products })
  })



}

module.exports.getAddProduct = (req, res) => {
  res.render('add-product', { path: '/add-product', pageTitle: 'add your product' })
}
module.exports.postAddProduct = (req, res) => {
  const { title, description, price } = req.body
  const imagePath = req.file.filename
  console.log(req.file);

  const product = new Product(null, title, description, price, imagePath)
  product.saveProduct()

  res.redirect('/')
}



module.exports.postDeleteProduct = (req, res) => {
  const prodId = req.params.productId;
  Product.deleteProduct(prodId, () => {
    console.log('product deleted');
    res.redirect('/')
  })

}











