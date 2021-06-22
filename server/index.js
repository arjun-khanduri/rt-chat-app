const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users.js');

const PORT = process.env.PORT || 8000;

const router = require('./router');

corsOptions = {
    cors: true,
    origins: ['http://localhost:3000']
}


const app = express();
const server = http.createServer(app);
const io = socketio(server, corsOptions);

io.on('connect', (socket) => {
    // console.log('We have a new connection');

    socket.on('join', ({ name, room }, callback) => {
        const { err, user } = addUser({ id: socket.id, name, room });
        if (err)
            return callback(err);
        socket.emit('message', { user: 'admin', text: `${user.name}, Welcome to the room ${user.room}` });
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined the chat` });
        socket.join(user.room);
        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);
        io.to(user.room).emit('message', { user: user.name, text: message });
        callback();
    });

    socket.on('disconnect', () => {
        console.log('User has left');
    })
});

app.use(router);
server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));