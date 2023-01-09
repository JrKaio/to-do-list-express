const express = require ('express')
const router = express.Router()

router.get('checklists', (req, res)=>{
    console.log('Olá');
    res.send();
}) // Criou uma nova rota
module.exports = router;