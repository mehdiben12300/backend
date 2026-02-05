const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const memberController = require("../controllers/memberController")
// Route pour l'inscription : POST http://localhost:3005/api/members/signup
router.post('/signup', authController.signup);

// Route pour la connexion : POST http://localhost:3005/api/members/signin
router.post('/signin', authController.signin);
router.get("/", memberController.getMembers)
module.exports = router;