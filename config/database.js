const mongoose = require('mongoose');

mongoose.set("strictQuery", true);

//configuração no mongo
mongoose.connect('mongodb://127.0.0.1/todo-list', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Conectado ao MongoDB'))
.catch((err) => console.error(err)); // Caso dê erro
