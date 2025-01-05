const express = require('express');
const router = express.Router();
const Inquiry = require('../models/Inquiry');

// Create new inquiry
router.post('/', async (req, res) => {
    const inquiry = new Inquiry({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    });

    try {
        const newInquiry = await inquiry.save();
        res.status(201).json(newInquiry);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all inquiries (admin only)
router.get('/', async (req, res) => {
    try {
        const inquiries = await Inquiry.find().sort({ createdAt: -1 });
        res.json(inquiries);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update inquiry status (admin only)
router.patch('/:id', async (req, res) => {
    try {
        const inquiry = await Inquiry.findById(req.params.id);
        if (!inquiry) {
            return res.status(404).json({ message: 'Inquiry not found' });
        }

        if (req.body.status) {
            inquiry.status = req.body.status;
        }

        const updatedInquiry = await inquiry.save();
        res.json(updatedInquiry);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router; 