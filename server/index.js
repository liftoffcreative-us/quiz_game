const express = require('express');
const http = require('http');
const setupSocket = require('./socket');

const app = express();
const server = http.createServer(app);
const io = setupSocket(server);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
