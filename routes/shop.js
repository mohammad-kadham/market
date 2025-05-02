const express = require('express')


const router = express.Router();


const shopController = require('../controller/shop')

router.get('/',shopController.getMainPage)

router.get('/add-product',shopController.getAddProduct)
router.post('/add-product',shopController.postAddProduct)
router.post('/delete-product/:productId',shopController.postDeleteProduct)


router.get('/signup',shopController.getSignup)
router.post('/signup',shopController.postSignup)



module.exports = router;