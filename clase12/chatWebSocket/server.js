const express = require("express");
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.static("public"));

const mensajes = [
  { author: "Juan", text: "¡Hola! ¿Que tal?" },
  { author: "Pedro", text: "¡Muy bien! ¿Y vos?" },
  { author: "Ana", text: "¡Genial!" }
];

io.on("connection", (socket) => {
  console.log("Nuevo cliente conectado!");

  /* Envio los mensajes al cliente que se conectó */
  socket.emit("mensajes", mensajes);

  socket.on('nuevoMensaje', mensaje =>{
    mensajes.push(mensaje);
    io.sockets.emit('mensajes', mensajes);
  })
  
});

const PORT = 8080;
const connectedServer = httpServer.listen(PORT, function () {
  console.log(
    `Servidor Http con Websockets escuchando en el puerto ${
      connectedServer.address().port
    }`
  );
});
connectedServer.on("error", (error) =>
  console.log(`Error en servidor ${error}`)
);
