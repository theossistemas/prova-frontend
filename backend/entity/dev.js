const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DevSchema = new Schema({
    avatarURL: {type: String, required: true},
    name: {type: String, required: true, max: 100},
    email: {type: String, required: true, max: 50},
    city: {type: String, required: true, max: 100},
    gratuation: {type: String, required: true, max: 100},
    techStack: {type: String, required: true, max: 500},
});

module.exports = mongoose.model('Devs', DevSchema);
