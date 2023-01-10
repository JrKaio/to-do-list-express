const express = require ('express')
const router = express.Router()

router.get('/', (req, res)=>{
    console.log('Olá');
    res.send();
}) // Criou uma nova rota


router.post('/', (req, res)=>{
    console.log(req.body); // Esse mostra no terminal
     res.status(200).json(req.body) // Esse mostra no postman
})
router.get ('/:id', (req, res)=>{
    console.log(req.params.id)
    res.send(`ID: ${req.params.id}`)
})
router.put ('/:id', (req, res)=>{
console.log(req.body);
res.send(`ID: ${req.params.id}`)
})
module.exports = router;