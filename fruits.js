const express = require("express");
const router = express.Router();

// List of Fruits
let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    },
]

// Route to get all fruits
router.get('/', (req, res) => {
    res.json(fruits);
});

// Route to get a particular fruit by index
router.get('/:id', (req, res) => {
    const fruit = fruits[req.params.id - 1];
    if (!fruit) {
        return res.status(404).json({ message: 'Fruit not found' });
    }
    res.json(fruit);
});

module.exports = router;
