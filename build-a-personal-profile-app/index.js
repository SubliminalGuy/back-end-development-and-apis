// express a that listens for requests and sends responses
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle GET requests to the root URL
app.get('/', (req, res) => {
  res.send("Welcome to Camper Bot's homepage!");
});

app.get('/hobbies', (req, res) => {
  res.send("I cycle, go boating, and play guitar.");
});

app.get('/skills', (req, res) => {
  res.send("JavaScript, Node.js, and Express.js!");
});

// The /api/profile route should return a JSON response with the correct content type.
app.get('/api/profile', (req, res) => {
  const profile = {
    name: "Camper Bot",
    age: 5,
    hobbies: ["cycling", "boating", "guitar"],
    skills: ["JavaScript", "Node.js", "Express.js"]
  };
  res.json(profile);
});


// listen oin the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});