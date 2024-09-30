const express = require('express'); 
const router = express.Router(); 
const productController = require('../controllers/productController'); 
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, productController.getAllProduct);

router.post('/', authMiddleware, productController.addProduct);

router.put('/:id', authMiddleware, productController.updateProductPut);

router.patch('/:id', authMiddleware, productController.updateProductPatch);

router.delete('/:id', authMiddleware, productController.deleteProduct);

module.exports = router;