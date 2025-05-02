const { render } = require('ejs');
const Product = require('../model/addProduct')
const fs = require('fs');
const User = require('../model/user');

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




module.exports.getSignup = (req, res) => {
  res.render('signup', { path: '/signup', pageTitle: 'Sign Up' })

}
module.exports.postSignup = (req, res) => {
  const { userName, email, password, repasswd } = req.body;
  const user = new User(userName, email, password, null)
  user.addUser(() => {
    res.redirect('/')

  })

}











