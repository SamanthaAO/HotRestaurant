var express = require("express");

var app = express();
var PORT = 3000;


app.use(express.urlencoded({ extended: false }));
app.use(express.json());



var reservation = [
   {
       name: "",
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
   res.sendFile(path.join(__dirname, "home.html"));
 });

 app.get("/tables", function(req, res) {
   res.sendFile(path.join(__dirname, "tables.html"));
 });

 app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
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