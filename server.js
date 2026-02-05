const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Pour charger ton URI MongoDB depuis un fichier .env
// ... (tes imports précédents)
const memberRoutes = require('./routes/memberRoutes');
const taskRoutes = require('./routes/taskRoutes');

// ... après tes middlewares
// Utilisation des routes
// ... (ton app.listen)
const app = express();
const PORT = process.env.PORT || 3005;

// --- Middlewares ---
app.use(cors()); // Autorise ton frontend Vue.js à communiquer avec le serveur
app.use(express.json()); // Permet de lire les données JSON envoyées dans les requêtes

// --- Connexion MongoDB ---
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/kleoslabs';

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Connecté avec succès à MongoDB (Kleos Labs)'))
  .catch((err) => console.error('❌ Erreur de connexion MongoDB :', err));

// --- Test de fonctionnement ---
app.get('/', (req, res) => {
  res.send('Serveur Kleos Labs opérationnel 🚀');
});

app.use('/api/members', memberRoutes);
app.use('/api/tasks', taskRoutes);
// --- Démarrage ---
app.listen(PORT, () => {
  console.log(`📡 Serveur en écoute sur : http://localhost:${PORT}`);
});
