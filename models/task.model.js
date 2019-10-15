const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TaskSchema = new Schema({
    text: {type: String, required: true, max: 200},
    isChecked: {type: Boolean, required: true}
});


module.exports = mongoose.model('Task', TaskSchema);
