const express = require('express');
const router = express.Router();
const Tutor = require('../models/Tutor');
const Pet = require('../models/pet')

router.get('/test', (req,res) => {
  res.send('deu certo')
})

// Listar tutores
router.get('/', async (req, res) => {
  try {
    const tutors = await Tutor.findAll({ include: Pet });
    res.json(tutors);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Criar tutor
router.post('/', async (req, res) => {
  const { name, phone, email, date_of_birth, zip_code } = req.body;
  try {
    const newTutor = await Tutor.create({ name, phone, email, date_of_birth, zip_code });
    res.status(201).json(newTutor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Atualizar tutor 
router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const { name, phone, email, date_of_birth, zip_code } = req.body;
  try {
    const tutor = await Tutor.findByPk(id);
    if (!tutor) throw new Error('Tutor not found');
    await tutor.update({ name, phone, email, date_of_birth, zip_code });
    res.json(tutor);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Deletar tutor
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const tutor = await Tutor.findByPk(id);
    if (!tutor) throw new Error('Tutor not found');
    await tutor.destroy();
    res.sendStatus(200);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
