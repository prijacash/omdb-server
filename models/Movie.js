// require mongoose ODM
const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    movieId: {
        type: String
    },
    title: {
        type: String
    },
    year: {
        type: Number
    }
}, {
    timestamps: true
})