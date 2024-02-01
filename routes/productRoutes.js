const express = require('express')
const { createProduct, getAllProducts } = require('../controller/productController')



//router object
const router = express.Router()

//GET ALL ADS ||GET
router.get('/all', getAllProducts)

//CRETAE ADS ||POST
router.post('/new', createProduct)

module.exports = router