var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: { type: Date, default: Date.now },
    priority: { type: Number, default: 1 },
    isNewTask: { type: Boolean, default: false },
});

module.exports = mongoose.model("Task", TaskSchema);
