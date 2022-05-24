// need to import path and express router//
// const { Router, response } = require('express');
// const res = require('express/lib/response');
const path = require('path')
// create get route for notes // 
const router = require('express').Router();
router.get("/notes",(req,res)=>{
    res.sendFile(path.join(__dirname,"../public/notes.html"))
})
router.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"../public/notes.html"))
})
module.exports = router;
//need all other routes to resond with index.html//

// export the router

