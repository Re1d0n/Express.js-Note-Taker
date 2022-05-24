// Import express package
const express = require('express');
// const { json } = require('express/lib/response');
// const fs = require('fs');
const apiRoutes=require("./routes/apiRoutes")
const htmlRoutes=require("./routes/htmlRoutes")
const PORT = process.env.PORT||3001;
// const path=require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

//   app.get('/notes', (req, res) => {
//     res.sendFile(path.join(__dirname + '/public/notes.html'))
//   });

// app.get('/api/notes', (req, res) => {
//     const notes = JSON.parse(fs.readFileSync("./db/db.json"))
//     res.json(notes)
//   });

//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/public/index.html'))
//   });
  app.use("/api",apiRoutes)
  app.use("/",htmlRoutes)
  app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
