const express = require("express");
const app = express();

app.set("view engine", "ejs");

//indexpage

app.get("/datos", (req, res) => {

  res.render('nivel', req.query);
});

app.listen(8080);
console.log("Server running on port 8080");
