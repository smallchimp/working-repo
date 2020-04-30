const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/nba_play_by_play', {
    useNewUrlParser:    true,
    useCreateIndex:     true,
    useFindAndModify:   false,
    useUnifiedTopology: true,
});
