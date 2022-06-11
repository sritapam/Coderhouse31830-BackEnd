const express =  require('express');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/api/productos',(req, res)=> {
 if(Object.entries(req.query).length > 0){
   res.json({
     result: 'obtuve una query',
    query: req.query
   })
 }
 else{
  res.json({
    result: 'no obtuve una query',
  })
 }
})

// let productos = [{ nombre: "Laptop", precio: 1000},	{nombre: "Teclado", precio: 200},	{nombre: "Mouse", precio: 50}];


// app.get('/api/productos/:id',(req, res)=> {
// let id = req.params.id;
// console.log(id);
// let producto = productos[id];
// res.json({result: 'todo ok', producto: producto});
// }
// )

// app.post('/api/productos',(req, res)=> {
//   let producto = req.body;
//   console.log(producto);
//   productos.push(producto);
//   res.json({
//     result: 'obtuve una query',
//     producto: producto
//   })
// });

let productosID = [{id: 1, nombre: "Laptop", precio: 1000},	{id: 2, nombre: "Teclado", precio: 200},	{id: 3,nombre: "Mouse", precio: 50}];

app.delete("/api/productos/:id", (req, res)=>{
  res.json({
    result: 'obtuve una query',
    id: req.params.id,
  })
})

app.put("/api/productos/:id", (req, res)=>{
  let productoID = parseInt(req.params.id);
  let producto = req.body;
  let productoEncontrado = productosID.find(producto => producto.id === productoID);
  //actualizo
  productoEncontrado.nombre = producto.nombre;
  productoEncontrado.precio = producto.precio;
  console.log(productoEncontrado);
  res.json({producto: productoEncontrado})
})

const PORT  = 8080;
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}
);