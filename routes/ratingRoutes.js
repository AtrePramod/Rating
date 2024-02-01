const express = require('express')
const { createRating, getAllRating } = require('../controller/ratingController')



//router object
const router = express.Router()


//GET ALL ADS ||GET
router.get('/all', getAllRating)
//CRETAE ADS ||POST
router.post('/new', createRating)

module.exports = router