import React, { useState } from 'react';

export default function Posts() {
    const [posts, setPosts] = useState([
        {
            username: 'meowed',
            userImage: 'assets/meowed.svg',
            contentImage: 'assets/gato-telefone.svg',
            likes: 101523,
            likedBy: 'respondeai',
            isLiked: false,
        },
        {
            username: 'barked',
            userImage: 'assets/barked.svg',
            contentImage: 'assets/dog.svg',
            likes: 99159,
            likedBy: 'adorable_animals',
            isLiked: false,
        },
    ]);

    const toggleLike = (index) => {
        const updatedPosts = [...posts];
        const post = updatedPosts[index];

        // Alterna o estado de curtida
        post.isLiked = !post.isLiked;

        // Atualiza a contagem de likes
        post.likes += post.isLiked ? 1 : -1;

        setPosts(updatedPosts);
    };

    const likeOnImage = (index) => {
        const updatedPosts = [...posts];
        const post = updatedPosts[index];

        // Apenas adiciona curtida, não remove
        if (!post.isLiked) {
            post.isLiked = true;
            post.likes += 1;
        }

        setPosts(updatedPosts);
    };

    return (
        <div className="posts">
            {posts.map((post, index) => (
                <div className="post" key={index}>
                    <div className="topo">
                        <div className="usuario">
                            <img src={post.userImage} alt={post.username} />
                            {post.username}
                        </div>
                        <div className="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>
                    <div className="conteudo">
                        <img
                            src={post.contentImage}
                            alt="post content"
                            onClick={() => likeOnImage(index)}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                    <div className="fundo">
                        <div className="acoes">
                            <div>
                                <ion-icon
                                    name={post.isLiked ? 'heart' : 'heart-outline'}
                                    style={{
                                        color: post.isLiked ? 'red' : 'inherit',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => toggleLike(index)}
                                ></ion-icon>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div>
                                <ion-icon name="bookmark-outline"></ion-icon>
                            </div>
                        </div>
                        <div className="curtidas">
                            <img src="assets/respondeai.svg" alt="respondeai" />
                            <div className="texto">
                                Curtido por <strong>{post.likedBy}</strong> e{' '}
                                <strong>outras {post.likes} pessoas</strong>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
