import express from 'express'


const app = express()
const routerMascotas = express.Router()
const routerPersonas = express.Router()


app.use('/mascotas', routerMascotas)
app.use('/personas', routerPersonas)

routerMascotas.use(express.json())
routerPersonas.use(express.json())
routerMascotas.use(express.urlencoded({extended: true}))
routerPersonas.use(express.urlencoded({extended: true}))

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//app.use(express.static('public')) // con http://localhost:8080/
app.use('/static', express.static('public')) // con http://localhost:8080/static/

/* ------------------------------------------------------ */

function middlewarePrefix(req, res, next) {
  const name = req.body.nombre
  req.body.nombre = `${name}-coder` //lo trasforma con un postfijo
  next()
}
/* Mascotas */
const mascotas = []

routerMascotas.get('/listar', (req,res) => {
    res.json(mascotas)
})

//paso un middleware

routerMascotas.post('/guardar',middlewarePrefix, (req,res) => {
    //console.log(req) para el ejemplo de objeto request
    mascotas.push(req.body)
    console.log(`Mascota guardada: ${req.body.nombre}`)
    res.json(req.body)
})

/* ------------------------------------------------------ */
/* Personas */
const personas = []

routerPersonas.get('/listar', (req,res) => {
    res.json(personas)
})

routerPersonas.post('/guardar', (req,res) => {
    personas.push(req.body)
    res.json(req.body)
})

/* ------------------------------------------------------ */
/* Server Listen */
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
//manejo de error
server.on('error', error => console.log(`Error en servidor ${error}`))
