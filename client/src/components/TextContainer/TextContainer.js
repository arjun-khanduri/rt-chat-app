import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';
import './TextContainer.css';

const TextContainer = ({ users }) => (
    <div className="textContainer">
        {
            users
                ? (
                    <div>
                        <h3>Users active in the room:</h3>
                        <div className='activeContainer'>
                            <h2>
                                {users.map(({name}) => (
                                    <div key={name} className='activeItem'>
                                        {name}
                                        <img alt='Online users' src={onlineIcon}/>
                                    </div>
                                ))}
                            </h2>
                        </div>
                    </div>
                )
                :
                    null
        }
    </div>
);

export default TextContainer;