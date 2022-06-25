const socket = io();

const input = document.querySelector('input');
input.addEventListener('input', ()=>{
  socket.emit('mensaje', input.value);
})

socket.on('mensajes', data =>{

  document.querySelector('p').innerText = data
})





// socket.on('mi primer mensaje', (data)=>{
//   //alert(data)
//   console.log(data)

//   socket.emit('notificacion', 'Mensaje enviado desde el cliente')
// })