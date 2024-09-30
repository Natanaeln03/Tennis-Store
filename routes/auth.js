const express = require('express'); 
const router = express.Router(); 
const authController = require('../controllers/authController'); 

// registro de usuário
router.post('/register', authController.registerUser);

// login de usuário
router.post('/login', authController.loginUser);

// solicitar redefinição de senha 
router.post('/request-password-reset', authController.requestPasswordReset);

//  redefinir a senha 
router.post('/reset-password', authController.resetPassword);

module.exports = router; 