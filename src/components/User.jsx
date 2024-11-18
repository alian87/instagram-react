import React, { useState } from 'react';

export default function User() {
    const [username, setUsername] = useState('catanacomics');
    const [profileImage, setProfileImage] = useState('/assets/catanacomics.svg');

    const changeUsername = () => {
        const newUsername = prompt('Digite o novo nome de usuário:');
        if (newUsername && newUsername.trim() !== '') {
            setUsername(newUsername.trim());
        }
    };

    const changeProfileImage = () => {
        const newImage = prompt('Digite o link da nova imagem de perfil:');
        if (newImage && newImage.trim() !== '') {
            setProfileImage(newImage.trim());
        }
    };

    return (
        <div className="usuario">
            <img
                src={profileImage}
                alt="imagem de perfil"
                onClick={changeProfileImage}
                style={{ cursor: 'pointer' }}
            />
            <div className="texto">
                <span>
                    <strong>{username}</strong>
                    <ion-icon
                        name="pencil"
                        onClick={changeUsername}
                        style={{ cursor: 'pointer' }}
                    ></ion-icon>
                </span>
            </div>
        </div>
    );
}
