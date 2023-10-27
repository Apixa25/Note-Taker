const router = require('express').Router();
const path = require('path');

// html routes
// this is the route that sends notes.html when a Get request is made
router.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});
// this is the route that sends index.html when a Get request is made
router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

  module.exports = router;