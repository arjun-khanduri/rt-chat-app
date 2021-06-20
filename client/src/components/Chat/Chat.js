import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const Chat = () => {
    const [room, setRoom] = useState('');
    const [name, setName] = useState('');
    const ENDPOINT = 'localhost:3000';
    useEffect(() => {
        const { name, room } = queryString.parse(window.location.search);
        socket = io(ENDPOINT);

        socket.emit('join', { name, room }, () => {

        });

        return () => {
            socket.emit('disconnect');
            socket.off();
        }

    }, [ENDPOINT, window.location.search]);
    return (
        <div>
            <h1>Chat</h1>

        </div >
    )
}

export default Chat;