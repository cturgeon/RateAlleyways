const mongoose = require('mongoose')

const AlleywaySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
    },
    review: {
        type: String,
    }
})

module.exports = mongoose.model('Alleyways', AlleywaySchema);