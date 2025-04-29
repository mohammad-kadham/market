const Product = require('../model/addProduct')
const fs = require('fs');
module.exports.getMainPage=(req,res)=>{
    res.render('index',{path:'/',pageTitle:'shop'})
}

module.exports.getAddProduct=(req,res)=>{
    res.render('add-product',{path:'/add-product',pageTitle:'add your product'})
}
module.exports.postAddProduct=(req,res)=>{
  const {title,description,price} = req.body
    const product = new Product('dgetdf',title,description,price)
    product.saveProduct()


  console.log('--------');
  
    res.redirect('/')
}












