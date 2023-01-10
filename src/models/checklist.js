const mongoose = require ('mongoose');

const checklistSchema = mongoose.Schema({
    name:{type:String, required: true },
    task: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task'
        }
    ] // Name é obrigatório quando eu chamar o shema
})
module.exports = mongoose.model('Checklist', checklistSchema)