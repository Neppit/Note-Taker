const notes = [];

// Get all notes
app.get('/api/notes', (req, res) => {
    res.json(notes);
});

// Create a new note
app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    notes.push(newNote);
    res.json(newNote);
});

// Delete a note by ID
app.delete('/api/notes/:id', (req, res) => {
    const id = req.params.id;
    // Implement logic to delete note by ID
    res.sendStatus(204); // No Content
});