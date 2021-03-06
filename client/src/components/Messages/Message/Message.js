import React from 'react';
import ReactEmoji from 'react-emoji';
import './Message.css';

const Message = ({ message: { user, text }, name }) => {
    let isSentByCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser ?
            (
                <div className='messageContainer'>
                    <p className='sentText pr-10'>{trimmedName}</p>
                    <div className='messageBox backgroundGreen'>
                        <p className='messageText'>{ReactEmoji.emojify(text)}</p>
                    </div>
                </div>
            )
            :
            (
                <div className='messageContainer justifyStart'>
                    <div className='messageBox backgroundWhite'>
                        <p className='messageText colorDark'>{ReactEmoji.emojify(text)}</p>
                    </div>
                    <p className='sentText pl-10'>{user}</p>
                </div>
            )
    )
}

export default Message;