import React from 'react';

export default function Story({ username, image }) {
    return (
        <div className="story">
            <div className="imagem">
                <img src={image} alt={username} />
            </div>
            <div className="usuario">{username}</div>
        </div>
    );
}
