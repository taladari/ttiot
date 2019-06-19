const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ReportSchema = new Schema({
    platform: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String
    },
    status: {
        type: Boolean,
        default: true
    }
});

module.exports = Report = mongoose.model('reports', ReportSchema);