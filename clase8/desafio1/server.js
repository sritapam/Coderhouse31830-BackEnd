const express = require('express');

const app = express();

const routerMascotas = express.Router();
const routerPersonas = express.Router();

app.use('/mascotas', routerMascotas);
app.use('/personas', routerPersonas);

routerMascotas.use(express.json())
routerPersonas.use(express.json())

/*-----------------------*/
const mascotas = ['Lola', 'Luna'];

routerMascotas.get('/listar', (req, res)=>{
res.json(mascotas)
})

routerMascotas.post('/guardar', (req, res)=> {
  console.log(req.body)
  mascotas.push(req.body.name)
  res.json(mascotas)
})

/*---------------*/

const personas = ['pamela']

routerPersonas.get('/listar', (req,res) => {
    res.json(personas)
})

routerPersonas.post('/guardar', (req,res) => {
    personas.push(req.body)
    res.json(req.body)
})

const PORT = 8080;
const server = app.listen(PORT, ()=> {
  console.log(`Servidor escuchando en el puerto ${server.address().port}`)
});
server.on('error', error => console.log(`Error en servidor ${error}`))

