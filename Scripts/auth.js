const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const usersFile = path.join(__dirname, '../users.json');

// Ensure users.json file exists
if (!fs.existsSync(usersFile)) {
    fs.writeFileSync(usersFile, '[]', 'utf-8');
}

router.post('/register', (req, res) => {
    const { username, password, name } = req.body;
    const users = JSON.parse(fs.readFileSync(usersFile, 'utf-8'));
    const existingUser = users.find(user => user.username === username);

    if (existingUser) {
        return res.status(400).send('User already exists');
    }

    const newUser = { username, password, name };
    users.push(newUser);
    fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
    res.status(201).send('User registered successfully');
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const users = JSON.parse(fs.readFileSync(usersFile, 'utf-8'));
    const user = users.find(user => user.username === username && user.password === password);

    if (!user) {
        return res.status(400).send('Invalid credentials');
    }

    res.send('Login successful');
});

module.exports = router;
