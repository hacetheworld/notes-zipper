const express = require('express');
const notes = require("./data/notes")
const bodyParser = require('body-parser');
require('dotenv').config()

const app = express();

app.use(bodyParser.json());

// READ
app.get('/api/items/:id', (req, res) => {
  const id = req.params.id;
  // retrieve the item from the database
  let note=notes.find((note)=>note._id===id)
  res.json(note)
});

// READ All Of Them
app.get('/api/notes/', (req, res) => {
  // retrieve the items from the database
  res.json(notes);
});

// CREATE
app.post('/api/items', (req, res) => {
  const item = req.body;
  // save the item to the database
  res.status(201).json(item);
});


// UPDATE
app.put('/api/items/:id', (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  // update the item in the database
  res.json(updatedItem);
});

// DELETE
app.delete('/api/items/:id', (req, res) => {
  const id = req.params.id;
  // delete the item from the database
  res.sendStatus(204);
});

const port = process.env.PORT || 6000
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
