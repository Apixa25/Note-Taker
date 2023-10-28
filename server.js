// dependencies
const express = require('express');
const html_routes = require('./Develop/routes/html-routes')
const api_routes = require('./Develop/routes/api-routes')
// const path = require('path');
// setting up the server
const app = express();
const PORT = process.env.PORT || 3000;

// handeling asynchronous processes
// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.proisify(fs.writeFile);


// middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// static middleware
app.use(express.static("./Develop/public"));
// mount middleware for html router
app.use(html_routes)
// mount middleware for api router
app.use(api_routes)


app.listen(PORT, () => {
    console.log(`This bad boy is running! at http://localhost:${PORT} 🚀`);
});