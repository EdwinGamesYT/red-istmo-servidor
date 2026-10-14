const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port process.env.PORT  8080 });

wss.on('connection', (ws) = {
  console.log('¡Un cliente se ha conectado a la Red Istmo!');

  ws.on('message', (message) = {
    console.log('Mensaje recibido', message.toString());
     Reenviar el mensaje a todos los conectados (difundir alerta)
    wss.clients.forEach((client) = {
      if (client.readyState === ws.OPEN) {
        client.send(message.toString());
      }
    });
  });

  ws.on('close', () = {
    console.log('Cliente desconectado');
  });
});

console.log('Servidor WebSocket corriendo...');