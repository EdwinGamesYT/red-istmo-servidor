const { WebSocketServer } = require('ws');

const port = process.env.PORT || 10000;
const wss = new WebSocketServer({ port: port });

wss.on('connection', (ws) => {
  console.log('¡Un cliente se ha conectado a la Red Istmo!');

  ws.on('message', (message) => {
    console.log('Mensaje recibido:', message.toString());
    wss.clients.forEach((client) => {
      if (client.readyState === ws.OPEN) {
        client.send(message.toString());
      }
    });
  });

  ws.on('close', () => {
    console.log('Cliente desconectado');
  });
});

console.log('Servidor WebSocket corriendo en el puerto ' + port);