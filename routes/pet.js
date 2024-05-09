const express = require("express");
const router = express.Router();
const Tutor = require("../models/Tutor");
const Pet = require("../models/pet");

// Criar pet e associá-lo a tutor
router.post("/:tutorId", async (req, res) => {
  const tutorId = req.params.tutorId;
  const { name, species, carry, weight, date_of_birth } = req.body;
  try {
    const tutor = await Tutor.findByPk(tutorId);
    if (!tutor) throw new Error("Tutor not found");

    const newPet = await Pet.create({
      name,
      species,
      carry,
      weight,
      date_of_birth,
      TutorId: tutorId,
    });

    res.status(201).json(newPet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Atualizar pet
router.put("/:petId/tutor/:tutorId", async (req, res) => {
  const petId = req.params.petId;
  const tutorId = req.params.tutorId;
  const { name, species, carry, weight, date_of_birth } = req.body;
  try {
    const pet = await Pet.findOne({ where: { id: petId, TutorId: tutorId } });
    if (!pet) throw new Error("Pet not found for this tutor");

    await Pet.update({
      name,
      species,
      carry,
      weight,
      date_of_birth,
    });

    res.json(Pet);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Deletar pet
router.delete("/:petId/tutor/:tutorId", async (req, res) => {
  const petId = req.params.petId;
  const tutorId = req.params.tutorId;
  try {
    const pet = await Pet.findOne({ where: { id: petId, TutorId: tutorId } });
    if (!pet) throw new Error("Pet not found for this tutor");

    await pet.destroy();
    res.sendStatus(200);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
