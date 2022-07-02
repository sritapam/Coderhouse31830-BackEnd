import express from "express";
import { getTime } from "./lib/utils";
import Persona from "./Persona";

const persona: Persona = new Persona("Coder", "House");

const app = express();

app.get("/", (req, res) => {
 res.send({
   time: getTime(),
   name: persona.getFullName(),
 });
});

const PORT = 8080;
app.listen(PORT, () => {
 console.log(`conectado al puerto: ${PORT}`);
});
