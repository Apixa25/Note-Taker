// dependencies
const express = require('express');
const html_routes = require('./Develop/routes/html-routes')
const api_routes = require('./Develop/routes/api-routes')

// setting up the server
const app = express();
const PORT = 3000;

// handeling asynchronous processes
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.proisify(fs.writeFile);


// middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static middleware
app.use(express.static("./Develop/public"));
app.use(html_routes)
app.use(api_routes)


// GET Route for homepage
// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '/Develope/public/index.html'))
// );

// GET Route for feedback page
// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '/Develope/public/notes.html'))
// );

app.listen(PORT, () => {
    console.log(`This bad boy is running! at http://localhost:${PORT} 🚀`);
});