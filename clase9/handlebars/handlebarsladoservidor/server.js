const express = require('express');
const app = express();

const handlebars = require('express-handlebars');

//configuración de un motor de plantillas

app.engine('handlebars',
 handlebars.engine({
    extname: '.handlebars',
    defaultLayout: 'index.handlebars',
    layoutsDir: __dirname + '/views/layouts/', //ruta a la plantilla principal
    partialsDir: __dirname + '/views/partials/' //ruta a los parciales
  })
);

//seteamos el motor de plantillas
app.set('view engine', 'handlebars');
//establezco el directorio de las vistas
// app.set('views', __dirname + '/views');
// app.use('/public', express.static(__dirname + '/public'));
app.set('views', './views');
//espacio publico del servidor
app.use(express.static('public'));

fakeApi = () =>  [
  {name: 'John', lane: 'midlaner'},
  {name: 'Jane', lane: 'toplaner'},
  {name: 'Jack', lane: 'midlaner'},
  {name: 'Jill', lane: 'midlaner'},
  {name: 'Joe', lane: 'midlaner'},
];

app.get ('/', (req, res) => {
  res.render('main', {suggestedChamps: fakeApi(), listExists: true});
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
