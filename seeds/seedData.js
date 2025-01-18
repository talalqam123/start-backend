const mongoose = require('mongoose');
const path = require('path');

// Hardcode the connection string temporarily for testing
const MONGODB_URI = 'mongodb+srv://startaxtalal:startaxtalal@cluster0.rvps6.mongodb.net/startax?retryWrites=true&w=majority';

const Client = require('../models/Client');

const dummyClients = [
    {
        first_name: "John Doe",
        pan_number: "ABCPD1234K",
        fathers_name: "William Doe",
        client_type: "Individual"
    },
    {
        first_name: "Jane Smith",
        pan_number: "XYZPS5678L",
        fathers_name: "Robert Smith",
        client_type: "Business"
    },
    {
        first_name: "Rahul Kumar",
        pan_number: "PQRSK9012M",
        fathers_name: "Raj Kumar",
        client_type: "Individual"
    },
    {
        first_name: "Priya Patel",
        pan_number: "LMNPP3456N",
        fathers_name: "Amit Patel",
        client_type: "Business"
    },
    {
        first_name: "Michael Brown",
        pan_number: "DEFMB7890P",
        fathers_name: "David Brown",
        client_type: "Individual"
    }
];

const seedDatabase = async () => {
    try {
        console.log('Attempting to connect to MongoDB...');
        
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000 // Add timeout
        });
        
        console.log('Connected successfully');

        // Clear existing data
        const deleteResult = await Client.deleteMany({});
        console.log('Cleared existing clients:', deleteResult);

        // Insert dummy data
        const insertResult = await Client.insertMany(dummyClients);
        console.log('Inserted clients:', insertResult.length);

    } catch (err) {
        console.error('Connection error:', err.message);
    } finally {
        await mongoose.disconnect();        console.log('Disconnected from MongoDB');        process.exit();    }};

// Handle any unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err);
    process.exit(1);
});

seedDatabase();
