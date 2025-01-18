const express = require('express');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let passwordCards = [];

app.get('/password-cards', (req, res) => {
    const { filter } = req.query;

    let cards = passwordCards;
    if (filter) {
        cards = cards.filter(card => card.name.includes(filter));
    }
    res.json(cards);
});

app.get('/password-cards/:id', (req, res) => {
    const { id } = req.params;
    const card = passwordCards.find(card => card.id === id);
    if (!card) {
        return res.status(404).json({ message: 'Card not found' });
    }
    res.json(card);
});

app.post('/password-cards', (req, res) => {
    const { url, name, username, password } = req.body;
    if (!url || !name || !username || !password) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    const newCard = { id: uuidv4(), url, name, username, password };
    passwordCards.push(newCard);
    res.status(201).json(newCard);
});

app.put('/password-cards/:id', (req, res) => {
    const { id } = req.params;
    const { url, name, username, password } = req.body;
    const cardIndex = passwordCards.findIndex(card => card.id === id);

    if (cardIndex === -1) {
        return res.status(404).json({ message: 'Card not found' });
    }

    if (!url || !name || !username || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    passwordCards[cardIndex] = { id, url, name, username, password };
    res.json(passwordCards[cardIndex]);
});

app.delete('/password-cards/:id', (req, res) => {
    const { id } = req.params;
    const cardIndex = passwordCards.findIndex(card => card.id === id);

    if (cardIndex === -1) {
        return res.status(404).json({ message: 'Card not found' });
    }

    passwordCards.splice(cardIndex, 1);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});