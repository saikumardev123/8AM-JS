const express = require('express');
var router = express.Router();
var ProductController = require('../controllers/product.controller');
router.post('/add', ProductController.add);
router.put('/update/:id', ProductController.update);
router.delete('/delete/:id', ProductController.delete);
router.get('/all', ProductController.all);
router.get('/:id', ProductController.singleProduct);
module.exports = router;
