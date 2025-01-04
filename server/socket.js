const { Server } = require('socket.io');

const setupSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });

    // Add your custom event listeners here
    socket.on('example_event', (data) => {
      console.log('Received example_event with data:', data);
      // Broadcast the event to all connected clients
      io.emit('example_event', data);
    });
  });

  return io;
};

module.exports = setupSocket;
