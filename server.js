var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());



var reservation = [
   {
       name: "sam",
       phoneNumber: 100,
       email: "",
       uniqueID: ""
   },   {
       name: "",
       phoneNumber: 100,
       email: "",
       uniqueID: ""
   },   {
       name: "",
       phoneNumber: 100,
       email: "",
       uniqueID: ""
   }

];

//function that will spit put a variable that will be 5 or less and then another that is more than 5 on waitlist. 


app.get("/", function(req, res) {
   res.sendFile(path.join(__dirname, "html/home.html"));
 });

 app.get("/tables", function(req, res) {
   res.sendFile(path.join(__dirname, "html/tables.html"));
 });

 app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "html/reserve.html"));
  });

 app.get("/api/tables", function(req, res) {
   return res.json(reservation);
 });

 app.get("/api/waitlist", function(req, res) {
    return res.json(reservation);
  });

 app.listen(PORT, function() {
   console.log("App listening on PORT " + PORT);
 });


 app.get("/api/tables/:reservation", function(req, res) {
    var chosen = req.params.reservation;
  
    console.log(chosen);
  
    for (var i = 0; i < reservation.length; i++) {
      if (chosen === reservation[i].routeName) {
        return res.json(reservation[i]);
      }
    }
  
    return res.json(false);
  });





 app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newTable = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newTable);
  
    reservation.push(newTable);
  
    res.json(newTable);
  });