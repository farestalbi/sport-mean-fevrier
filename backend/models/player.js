const mongoose = require('mongoose');
const playerSchema = mongoose.Schema({
    name: String,
    poste: String,
    n: Number,
    age: Number,
    description: String
});

const player = mongoose.model('Player', playerSchema);

module.exports = player;