import React, { useState } from 'react';

export default function Post({ username, userImage, contentImage, likes, likedBy }) {
    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [likeCount, setLikeCount] = useState(likes);

    const toggleLike = () => {
        setIsLiked(!isLiked);
        setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
    };

    const likeOnImage = () => {
        if (!isLiked) {
            setIsLiked(true);
            setLikeCount(likeCount + 1);
        }
    };

    const toggleSave = () => {
        setIsSaved(!isSaved);
    };

    return (
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={userImage} alt={username} />
                    {username}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
            <div className="conteudo">
                <img
                    src={contentImage}
                    alt="post content"
                    onClick={likeOnImage}
                    style={{ cursor: 'pointer' }}
                />
            </div>
            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon
                            name={isLiked ? 'heart' : 'heart-outline'}
                            style={{
                                color: isLiked ? 'red' : 'inherit',
                                cursor: 'pointer',
                            }}
                            onClick={toggleLike}
                        ></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon
                            name={isSaved ? 'bookmark' : 'bookmark-outline'}
                            onClick={toggleSave}
                            style={{ cursor: 'pointer' }}
                        ></ion-icon>
                    </div>
                </div>
                <div className="curtidas">
                    <img src="/assets/respondeai.svg" alt="respondeai" />
                    <div className="texto">
                        Curtido por <strong>{likedBy}</strong> e{' '}
                        <strong>outras {likeCount} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}
