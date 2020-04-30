const mongoose = require('mongoose')

const Play = mongoose.model('plays', {
    game_id: {
        type: Number,
        required: true,
        trim: true,
    },
    scoreboard: {
        type: Object,
        required: true,
    },
    last_play_id: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true
    }

});

module.exports = Play