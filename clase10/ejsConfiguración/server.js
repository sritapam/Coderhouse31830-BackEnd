const express = require("express");
const app = express();

//app.set("views", "./views");
app.set("view engine", "ejs");

//indexpage

app.get("/", (req, res) => {
  let mascots = [
    { name: "Sammy", organization: "DigitalOcean", birth_year: 2012 },
    { name: "Tux", organization: "Linux", birth_year: 1996 },
    { name: "Moby Dock", organization: "Docker", birth_year: 2013 },
  ];
  let tagline = "Hola mascotas";
  res.render("pages/index", {
    tagline: tagline,
    mascots: mascots,
  });
});

//aboutpage

app.get('/about', (req, res) => {
  res.render('pages/about');
});

app.listen(8080);
console.log("Server running on port 8080");
