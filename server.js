const express = require('express');

const html_routes = require('./Develop/routes/html-routes')
const api_routes = require('./Develop/routes/api-routes')
const PORT = 3000;
const app = express();


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(api_routes)
app.use(html_routes)


app.listen(PORT, () => {
    console.log(`This bad boy is running! at http://localhost:${PORT} 🚀`);
});