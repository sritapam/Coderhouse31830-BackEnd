const express = require('express');
const { Server: HTTPServer } = require ('http');
const { Server: IOServer } = require('socket.io'); 

const app = express();
const httpServer = new HTTPServer(app);
const io = new IOServer(httpServer);

app.use(express.static('public'))

// app.get('/', (req, res) => {
//   res.sendFile('index.html', { root: __dirname })
//   //res.sendFile(__dirname + '/index.html');
// })

httpServer.listen(3000, () => console.log('listening on port 3000'));

io.on('connection', (socket)=>{
  console.log('Nuevo Cliente Conectado')

  // socket.emit('mi primer mensaje', 'Este es un mensaje desde el Servidor')

  // socket.on('notificacion', (data)=>{
  //   console.log(data);
  // })

  socket.on('mensaje', data=>{

    io.sockets.emit("mensajes", data);
    
  })
})