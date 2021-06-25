import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';

const TextContainer = ({ users }) => (
    <div className="textContainer">
        {
            users
                ? (
                    <div>
                        <h3>Active in the room:</h3>
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