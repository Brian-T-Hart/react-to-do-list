// Dependencies
var express = require("express");

// Requiring our models
const db = require("../models");
var path = require("path");
var router = express.Router();

// Handle form submission, save submission to mongo
router.post("/saveToDo", function (req, res) {
    console.log(req.body);
    // Insert the note into the notes collection
    db.toDos.insert(req.body, function (error, saved) {
        // Log any errors
        if (error) {
            console.log(error);
        }
        // Otherwise, send the note back to the browser
        // This will fire off the success function of the ajax request
        else {
            res.send(saved);
        }
    });
});