const express = require('express');
const mealController = require('../controllers/meals')
const orderController = require('../controllers/orders')

const router = express.Router();

router.get('/getmeals', mealController.getmeals)
router.post('/postmeals', mealController.postmeals)
router.delete('/deletemeal/:_id', mealController.deletemeals)
router.post('/addorder', orderController.postorders)


module.exports = router;