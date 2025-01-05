const express = require('express');
const router = express.Router();
const Pet = require('../models/Pet');

// Get all pets
router.get('/', async (req, res) => {
    try {
        const pets = await Pet.find();
        res.json(pets);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get single pet
router.get('/:id', async (req, res) => {
    try {
        const pet = await Pet.findById(req.params.id);
        if (!pet) {
            return res.status(404).json({ message: 'Pet not found' });
        }
        res.json(pet);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create new pet
router.post('/', async (req, res) => {
    const pet = new Pet({
        name: req.body.name,
        type: req.body.type,
        breed: req.body.breed,
        age: req.body.age,
        description: req.body.description,
        imageUrl: req.body.imageUrl
    });

    try {
        const newPet = await pet.save();
        res.status(201).json(newPet);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update pet status
router.patch('/:id/status', async (req, res) => {
    try {
        const pet = await Pet.findById(req.params.id);
        if (!pet) {
            return res.status(404).json({ message: 'Pet not found' });
        }

        pet.status = req.body.status;
        const updatedPet = await pet.save();
        res.json(updatedPet);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router; 