const express = require('express');
const handlebars = require('express-handlebars');

const app = express()


app.engine('hbs',
 handlebars.engine({
    extname: '.hbs',
    defaultLayout: 'index.hbs',
    layoutsDir: __dirname + '/views/layouts/', //ruta a la plantilla principal
    partialsDir: __dirname + '/views/partials/' //ruta a los parciales
  })
);

//seteamos el motor de plantillas
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('datos', { 
    nombre: 'Daniel',
        apellido: 'Sánchez',
        edad: 52,
        email: 'danielsanchez68@hotmail.com ',
        telefono: '1559607538',
        fyh: new Date().toLocaleString()
      });
    });

    const PORT = 8080
    const server = app.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${server.address().port}`)
    })
    server.on('error', error => console.log(`Error en servidor ${error}`))
    
