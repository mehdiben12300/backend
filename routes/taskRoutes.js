const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Routes CRUD
router.post('/', taskController.createTask);        // Créer
router.get('/', taskController.getAllTasks);       // Lire tout
router.patch('/:id', taskController.updateTask);    // Modifier (Statut)
router.delete('/:id', taskController.deleteTask);   // Supprimer

module.exports = router;