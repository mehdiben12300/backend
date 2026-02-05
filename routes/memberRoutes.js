const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route pour l'inscription : POST http://localhost:3005/api/members/signup
router.post('/signup', authController.signup);

// Route pour la connexion : POST http://localhost:3005/api/members/signin
router.post('/signin', authController.signin);

module.exports = router;