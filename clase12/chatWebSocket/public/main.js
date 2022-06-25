const socket = io.connect();

function makeHTML(mensajes) {
  return mensajes
    .map((elem, index) => {
      return `<div>
            <strong>${elem.author}</strong>:
            <em>${elem.text}</em> </div>`;
    })
    .join(" ");
}

function render(data) {
  const html = makeHTML(data);
  document.getElementById("mensajes").innerHTML = html;
}

socket.on("mensajes", (mensajes) => {
  render(mensajes);
});

function addMessage(e) {
  const mensaje = {
    author: document.getElementById("username").value,
    text: document.getElementById("texto").value,
  };
  socket.emit("nuevoMensaje", mensaje);
  return false;
}
