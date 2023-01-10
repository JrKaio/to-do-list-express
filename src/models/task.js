const mongoose = require ('mongoose');

const taskSchema = mongoose.Schema({
    name:{type:String, required: true},
    done:{type: Boolean, default:false},// Name é obrigatório quando eu chamar o shema
        checklist:{type: mongoose.Schema.Types.ObjectId,
        ref: 'Checklist',
    required: true}
})
module.exports = mongoose.model('Task', taskSchema)