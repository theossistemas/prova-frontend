const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DevSchema = new Schema({
    github:     { type: String },
    avatarURL:  { type: String },
    name:       { type: String, required: true, max: 100 },
    email:      { type: String, required: true, max: 50 },
    city:       { type: String, required: true, max: 100 },
    graduation: { type: String, required: true, max: 100 },
    techStack:  { type: String, required: true },
});

module.exports = mongoose.model('Devs', DevSchema);
