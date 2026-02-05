const Member = require('../models/Member');

// SIGN UP (Inscription)
exports.signup = async (req, res) => {
  try {
    const { prenom, email, password } = req.body;

    // Vérifier si le membre existe déjà
    const existingMember = await Member.findOne({ email });
    if (existingMember) {
      return res.status(400).json({ message: "Cet email est déjà utilisé." });
    }

    // Créer le nouveau membre
    const newMember = new Member({ prenom, email, password });
    await newMember.save();

    res.status(201).json({ message: "Compte créé avec succès !", user: newMember });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de l'inscription.", error });
  }
};

// SIGN IN (Connexion)
exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Trouver le membre par email
    const member = await Member.findOne({ email });
    if (!member || member.password !== password) {
      return res.status(401).json({ message: "Email ou mot de passe incorrect." });
    }

    res.status(200).json({ message: "Connexion réussie", user: member });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la connexion.", error });
  }
};