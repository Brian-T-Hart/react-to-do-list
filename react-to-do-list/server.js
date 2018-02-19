// Dependencies
var express = require("express");
var mongojs = require("mongojs");
var bodyParser = require("body-parser");
var logger = require("morgan");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3001;

// Set the app up with morgan, body-parser, and a static folder
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vmd.api+json" }));
app.use(express.static("client/build"));

// Database configuration
var databaseUrl = "reactToDo";
var collections = ["toDos"];
var toDos = require("./controller/toDoController.js");

// Hook mongojs config to db variable
var db = mongojs(databaseUrl, collections);

// Log any mongojs errors to console
db.on("error", function (error) {
    console.log("Database Error:", error);
});

app.get('*', (req, res, next) => {
    res.send(index.html);
});

app.use("/", index);
app.use("/new", toDos);
// Simple index route
// app.get("/", function (req, res) {
//     res.send(index.html);
// });

// Retrieve results from mongo
app.get("/all", function (req, res) {
    // Find all notes in the notes collection
    db.toDos.find({}, function (error, found) {
        // Log any errors
        if (error) {
            console.log(error);
        }
        // Otherwise, send json of the notes back to user
        // This will fire off the success function of the ajax request
        else {
            res.json(found);
        }
    });
});

// Select just one note by an id
app.get("/find/:id", function (req, res) {

    // When searching by an id, the id needs to be passed in
    // as (mongojs.ObjectId(IDYOUWANTTOFIND))

    // Find just one result in the notes collection
    db.toDos.findOne({
        // Using the id in the url
        "_id": mongojs.ObjectId(req.params.id)
    }, function (error, found) {
        // log any errors
        if (error) {
            console.log(error);
            res.send(error);
        }
        // Otherwise, send the note to the browser
        // This will fire off the success function of the ajax request
        else {
            console.log(found);
            res.send(found);
        }
    });
});


// Update just one note by an id
app.post("/update/:id", function (req, res) {

    // When searching by an id, the id needs to be passed in
    // as (mongojs.ObjectId(IDYOUWANTTOFIND))

    // Update the note that matches the object id
    db.toDos.update({
        "_id": mongojs.ObjectId(req.params.id)
    }, {
            // Set the title, note and modified parameters
            // sent in the req's body.
            $set: {
                "title": req.body.title,
                "note": req.body.note,
                "modified": Date.now()
            }
        }, function (error, edited) {
            // Log any errors from mongojs
            if (error) {
                console.log(error);
                res.send(error);
            }
            // Otherwise, send the mongojs response to the browser
            // This will fire off the success function of the ajax request
            else {
                console.log(edited);
                res.send(edited);
            }
        });
});


// Delete One from the DB
app.get("/delete/:id", function (req, res) {
    // Remove a note using the objectID
    db.toDos.remove({
        "_id": mongojs.ObjectID(req.params.id)
    }, function (error, removed) {
        // Log any errors from mongojs
        if (error) {
            console.log(error);
            res.send(error);
        }
        // Otherwise, send the mongojs response to the browser
        // This will fire off the success function of the ajax request
        else {
            console.log(removed);
            res.send(removed);
        }
    });
});


// Clear the DB
app.get("/clearall", function (req, res) {
    // Remove every note from the notes collection
    db.toDos.remove({}, function (error, response) {
        // Log any errors to the console
        if (error) {
            console.log(error);
            res.send(error);
        }
        // Otherwise, send the mongojs response to the browser
        // This will fire off the success function of the ajax request
        else {
            console.log(response);
            res.send(response);
        }
    });
});


// Listen on port 3000
// app.listen(3000, function () {
//     console.log("App running on port 3000!");
// });

app.listen(PORT, function () {
    console.log("App is listening on PORT " + PORT);
});

module.exports = app;