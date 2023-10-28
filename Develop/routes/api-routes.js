const router = require('express').Router();
const fs = require ("fs");
// npm i uuid@3.4.0 -- is what you need to run to install this dependency -- Universally Unique IDentifier,
const { v4: uuidv4 } = require('uuid');


// defines the get request to this routes end point '/api/notes'
// this is the what retreives the record from the db.json also known as the results set
router.get('/api/notes', async (req, res) => {
  const getDb = await JSON.parse(fs.readFileSync("./Develop/db/db.json","utf8"));
  res.json(getDb);
});

// defines the post request to this routes end point '/api/notes'
// this is what sends the note data to the database -- db.json
router.post('/api/notes', (req, res) => {
  const postDb = JSON.parse(fs.readFileSync("./Develop/db/db.json","utf8"));
  const newFeedback = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };
//  push architecture is event driven: the server pushes data to clients as updates become available
  postDb.push(newFeedback);
  fs.writeFileSync("./Develop/db/db.json",JSON.stringify(postDb));
  res.json(postDb);
});

// this is the delete fucntion 
router.delete('/api/notes/:id', (req, res) => {
    let data = fs.readFileSync("./Develop/db/db.json", "utf8");
    const dataJSON =  JSON.parse(data);
    const newNotes = dataJSON.filter((note) => { 
      return note.id !== req.params.id;
    });
    fs.writeFileSync("./Develop/db/db.json",JSON.stringify(newNotes));
    res.json("Note deleted.");
  });



module.exports = router;