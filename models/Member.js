const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  prenom: {
    type: String,
    required: [true, 'Le prénom est obligatoire'],
    trim: true
  },
  email: {
    type: String,
    required: [true, "L'email est obligatoire"],
    unique: true, // Empêche les doublons
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Veuillez utiliser un email valide']
  },
  password: {
    type: String,
    required: [true, 'Le mot de passe est obligatoire'],
    minlength: 4 // Tu pourras l'augmenter plus tard
  },
  role: {
    type: String,
    enum: ['admin', 'developer'],
    default: 'developer'
  }
}, { 
  timestamps: true // Ajoute automatiquement createdAt et updatedAt 
});

// Note : L'ID est géré automatiquement par MongoDB sous le nom _id
const Member = mongoose.model('Member', memberSchema);

module.exports = Member;