import express from 'express'

const app = express()

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/hello', (req, res) => {
    res.render('hello.pug', { mensaje: 'Hola estoy usando Pug desde Express' });
}
);
/* ------------------------------------------------------ */
/* Server Listen */
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
