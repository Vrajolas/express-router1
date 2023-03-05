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

router.post('/', (req, res) => {
    const fruit = req.body;
    fruits.push(fruit);
    res.status(201).json(fruit);
});

router.put('/:id', (req, res) => {
    const fruitIndex = req.params.id - 1;
    const fruit = fruits[fruitIndex];
    if (!fruit) {
        return res.status(404).json({ message: 'Fruit not found' });
    }
    const updatedFruit = req.body;
    fruits[fruitIndex] = { ...fruit, ...updatedFruit };
    res.json(fruits[fruitIndex]);
});

router.delete('/:id', (req, res) => {
    const fruitIndex = req.params.id - 1;
    const fruit = fruits[fruitIndex];
    if (!fruit) {
        return res.status(404).json({ message: 'Fruit not found' });
    }
    fruits.splice(fruitIndex, 1);
    res.sendStatus(204);
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
