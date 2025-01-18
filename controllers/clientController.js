const Client = require('../models/Client');

const clientController = {
    getClients: async (req, res) => {
        try {
            const clients = await Client.find();
            res.json(clients);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    createClient: async (req, res) => {
        const client = new Client(req.body);
        try {
            const newClient = await client.save();
            res.status(201).json(newClient);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    updateClient: async (req, res) => {
        try {
            const updatedClient = await Client.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            res.json(updatedClient);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    deleteClient: async (req, res) => {
        try {
            await Client.findByIdAndDelete(req.params.id);
            res.json({ message: 'Client deleted successfully' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
};

module.exports = clientController;
