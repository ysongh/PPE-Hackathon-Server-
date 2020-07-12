const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SchoolSchema = new Schema({
    name: {
        type: String
    },
    address: {
        type: String
    },
    numberOfStudents: {
        type: Number,
        default: 0
    },
    gradeLevel: {
        type: String
    },
    description: {
        type: String
    },
    contactName: {
        type: String
    },
    contactEmail: {
        type: String
    },
    contactNumber: {
        type: String
    },
    ppeNeed: []
});

module.exports = mongoose.model('School', SchoolSchema); 