const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define a function for greeting messages
function getGreetingMessage(name) {
  return `Hello, ${name}!`;
}

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/about', (req, res) => {
  res.send('About Us');
});

app.get('/greet/:name', (req, res) => {
  const name = req.params.name;
  const message = getGreetingMessage(name);
  res.send(message);
});

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
  
module.exports = { getGreetingMessage, server };

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
  
module.exports = { getGreetingMessage };


