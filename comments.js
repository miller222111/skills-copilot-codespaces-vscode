// Create web server
// 1. Create a web server
// 2. Create a route for GET /comments
// 3. Create a route for GET /comments/:id
// 4. Create a route for POST /comments
// 5. Create a route for PUT /comments/:id
// 6. Create a route for DELETE /comments/:id
// 7. Listen on port 3000

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// 1. Create a web server
app.use(bodyParser.json());

// 2. Create a route for GET /comments
app.get('/comments', (req, res) => {
    res.send('GET /comments');
});

// 3. Create a route for GET /comments/:id
app.get('/comments/:id', (req, res) => {
    res.send(`GET /comments/${req.params.id}`);
});

// 4. Create a route for POST /comments
app.post('/comments', (req, res) => {
    res.send('POST /comments');
});

// 5. Create a route for PUT /comments/:id
app.put('/comments/:id', (req, res) => {
    res.send(`PUT /comments/${req.params.id}`);
});

// 6. Create a route for DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
    res.send(`DELETE /comments/${req.params.id}`);
});

// 7. Listen on port 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
