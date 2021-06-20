const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 3000;

const router = require('./router');

corsOptions = {
    cors: true,
    origins: ["http://localhost:3001"],
}


const app = express();
const server = http.createServer(app);
const io = socketio(server, corsOptions);

io.on('connect', (socket) => {
    console.log('We have a new connection');
    socket.on('disconnect', () => {
        console.log('User has left');
    })
})

app.use(router);
server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));