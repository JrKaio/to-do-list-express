const express = require ('express')
const router = express.Router()

router.get('/', (req, res)=>{
    console.log('Olá');
    res.send();
}) // Criou uma nova rota
module.exports = router;

router.post('/', (req, res)=>{
    console.log(req.body); // Esse mostra no terminal
     res.status(200).json(req.body) // Esse mostra no postman
})