const Task = require('../models/Task');

// CREATE : Ajouter une tâche
exports.createTask = async (req, res) => {
    try {
        const newTask = new Task(req.body);
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(400).json({ message: "Erreur lors de la création", error });
    }
};

// READ : Tout récupérer (avec les infos du membre)
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find().populate('memberId', 'prenom email');
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
};

// UPDATE : Changer le statut ou les infos (ex: passer à 'termine')
exports.updateTask = async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // Pour renvoyer l'objet modifié
        );
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(400).json({ message: "Erreur lors de la mise à jour", error });
    }
};

// DELETE : Supprimer un projet
exports.deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Tâche supprimée avec succès" });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la suppression", error });
    }
};