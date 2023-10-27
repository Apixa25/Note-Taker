const fb = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all the feedback
fb.get('/', (req, res) => {
  console.info(`${req.method} request received for feedback`);

  readFromFile('./db/feedback.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for submitting feedback
fb.post('/', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to submit feedback`);
  
  module.exports = fb;