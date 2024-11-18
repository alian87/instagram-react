import React from 'react';

export default function Suggestion({ username, userImage, reason }) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={userImage} alt={username} />
                <div className="texto">
                    <div className="nome">{username}</div>
                    <div className="razao">{reason}</div>
                </div>
            </div>
            <div className="seguir">Seguir</div>
        </div>
    );
}
