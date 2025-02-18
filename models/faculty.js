const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const facultySchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    hireDate: {
        type: Date,
        default: Date.now,
    }
}, {timestamps: true});

const Faculty = mongoose.model('Faculty', facultySchema);
module.exports = Faculty;