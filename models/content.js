const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contentSchema = new Schema({
    name: {
        type:String,
    },
    duration :String,
    videourl:String,
})

module.exports = mongoose.model('Content',contentSchema);