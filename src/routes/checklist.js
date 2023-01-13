const express = require ('express');
const checklist = require('../models/checklist');
const router = express.Router()
const Checklist = require('../models/checklist')

router.get('/', async (req, res) =>{
try{
    let checklists = await Checklist.find({});
    res.status(200).render('checklists/index', {checklists: checklists })
} catch (error) {
    res.status(200).render('pages/error', {error: 'Erro ao exibir as Listas' })

}// Le tudo do banco de dados

})
router.get('/new', async (req, res) =>{
    try {
        let checklist = new Checklist()
        res.status(200).render('checklists/new', {checklist: checklist })
    } catch (error) {
        res.status(500).render('pages/error', {errors: 'Erro ao carregar formulário' })
    } 
})

router.post ('/', async (req, res) =>{
    let { name } = req.body.checklist;
    let checklist = new Checklist({name})
    try{
        await checklist.save()
        res.redirect('/checklists')
    } catch (error){
        res.status(422).render('checklists/new', { checklists: {...checklist, error}});
    }
})

router.get('/:id', async (req, res) =>{
    try {
        let checklist = await Checklist.findById(req.params.id)
        res.status(200).render('checklists/show', {checklist: checklist })
    } catch (error) {
        res.status(200).render('checklists/new', {checklists: {...checklist, error}})
    } // Retorna o resultado via ID no postman
})

router.put('/:id', async (req, res)=>{
    let { name } = req.body
    try {
        let checklist = await Checklist.findByIdAndUpdate(req.params.id, {name}, {new : true}) // Atualizar algo, no caso será o --> name
        res.status(200).json(checklist);
    } catch (error) {
        res.status(422).json(error);
    }
})
router.delete ('/:id', async (req, res)=>{
    try {
        let checklist = await Checklist.findByIdAndDelete(req.params.id) // Atualizar algo, no caso será o --> name
        res.status(200).json(checklist);
    } catch (error) {
        res.status(422).json(error);
    }
})
module.exports = router;