const express = require('express');

const html_routes = require('./Develop/routes/html-routes')
const api_routes = require('./Develop/routes/api-routes')
const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
    console.log("Here")
    res.render('index')
})

app.listen(PORT, () => {
    console.log(`This bad boy is running! at http://localhost:${PORT}`);
});