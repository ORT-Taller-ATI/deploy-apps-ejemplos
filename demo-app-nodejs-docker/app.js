const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

// In-memory database (for simplicity)
let items = [];
let nextId = 1;

// Middleware
app.use(express.static('public'));
app.use(bodyParser.json());

// API Endpoints

// Get all items
app.get('/api/items', (req, res) => {
  res.json(items);
});

// Add a new item
app.post('/api/items', (req, res) => {
  const newItem = {
    id: nextId++,
    name: req.body.name
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// Delete an item by ID
app.delete('/api/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id, 10);
  items = items.filter(item => item.id !== itemId);
  res.status(204).end();
});

// Serve the main page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
//agrego la nueva funcionalidad