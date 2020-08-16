const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 4,
        maxlength: 20,
        required: true
    },
    birthname: String,
    movies: {
        type: [String],
        enum: ["Infinity War", "Endgame", "Iron Man 2", "The First Avenger"]
    },
    likeCount: Number,
    imgUrl: {
        type: String,
        default : "Placeholder Image Link to be updated here ... "
    },
    deceased: Boolean
});

const Hero = mongoose.model("Hero", heroSchema);
module.exports = Hero;