const express = require("express");
const router = express.Router();

// List of Users
let users = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 45
    },
    {
        name: "User 3",
        age: 27
    },
    {
        name: "User 4",
        age: 22
    }
]

// Route to get all users
router.get('/', (req, res) => {
    res.json(users);
});

router.get('/:id', (req, res) => {
    const user = users[req.params.id - 1];
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
});

router.post('/', (req, res) => {
    const newUser = {
        name: req.body.name,
        age: req.body.age
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

router.put('/:id', (req, res) => {
    const userIndex = req.params.id - 1;
    if (!users[userIndex]) {
        return res.status(404).json({ message: 'User not found' });
    }
    users[userIndex].name = req.body.name;
    users[userIndex].age = req.body.age;
    res.json(users[userIndex]);
});

router.delete('/:id', (req, res) => {
    const userIndex = req.params.id - 1;
    if (!users[userIndex]) {
        return res.status(404).json({ message: 'User not found' });
    }
    users.splice(userIndex, 1);
    res.sendStatus(204);
});

// Route to get a particular user by index
router.get('/:id', (req, res) => {
    const user = users[req.params.id - 1];
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
});

module.exports = router;
