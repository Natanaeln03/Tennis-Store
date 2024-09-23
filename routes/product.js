const express = require('express'); 
const router = express.Router(); 
const productController = require('../controllers/productController'); 

router.get('/', productController.getAllProduct);

router.post('/', productController.addProduct);

router.put('/:id', productController.updateProductPut);

router.patch('/:id', productController.updateProductPatch);

router.delete('/:id', productController.deleteProduct);

module.exports = router;