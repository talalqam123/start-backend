const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    first_name: { 
        type: String, 
        required: true 
    },
    pan_number: { 
        type: String, 
        required: true, 
        unique: true 
    },
    fathers_name: { 
        type: String, 
        required: true 
    },
    client_type: { 
        type: String, 
        required: true,
        enum: ['Individual', 'Business'] 
    },
    created_at: { 
        type: Date, 
        default: Date.now 
    }
});

// Make sure to export with a proper model name
const Client = mongoose.model('Client', clientSchema);
module.exports = Client;
