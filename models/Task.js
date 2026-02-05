const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: [true, 'Le titre du projet est obligatoire'],
    trim: true
  },
  date: {
    type: String, // Ou Date, mais String si tu gardes le format "YYYY-MM-DD"
    required: true
  },
  deadline: {
    type: String,
    required: true
  },
  memberId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member', // Doit correspondre au nom du modèle Member
    required: [true, 'Une tâche doit être assignée à un membre']
  },
  statut: {
    type: String,
    enum: ['en-cours', 'termine'],
    default: 'en-cours'
  }
}, { 
  timestamps: true 
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;