const express = require('express');

const html_routes = require('./Develop/routes/html-routes')
const api_routes = require('./Develop/routes/api-routes')
const PORT = 3000;
const app = express();


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));
app.use(api_routes)
app.use(html_routes)

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/Develope/public/index.html'))
);

// GET Route for feedback page
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/Develope/public/notes.html'))
);

app.listen(PORT, () => {
    console.log(`This bad boy is running! at http://localhost:${PORT} 🚀`);
});