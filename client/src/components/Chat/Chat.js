import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import 'react-router-dom';
import io from 'socket.io-client';
import './Chat.css';
import InfoBar from '../InfoBar/InfoBar';

let socket;

const Chat = () => {
    const [room, setRoom] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:8000';
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

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        })
        return () => {
            socket.off();
        }
    }, [messages]);

    const sendMessage = (event) => {
        event.preventDefault();

        if (message)
            socket.emit('sendMessage', message, () => setMessage(''));
    }

    console.log(message, messages);


    return (
        <div className='outerContainer'>
            <div className='container'>
                <InfoBar room={() => this.getRoom()} />
                <input value={message}
                    className="messageBox"
                    onChange={(event) => setMessage(event.target.value)}
                    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
                />
            </div>
        </div >
    )
}

export default Chat;