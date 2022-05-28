const router = require('express').Router();
const path = require("path");


 
    
    router.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../Develop/public/index.html"));
    });
    
    router.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../Develop/public/notes.html"));
    });

    router.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../Develop/public/notes.html"));
    });

    module.exports = router;