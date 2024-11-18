import React from 'react';

export default function Posts() {
    const posts = [
        {
            username: 'meowed',
            userImage: 'assets/meowed.svg',
            contentImage: 'assets/gato-telefone.svg',
            likes: 101523,
            likedBy: 'respondeai',
        },
        {
            username: 'barked',
            userImage: 'assets/barked.svg',
            contentImage: 'assets/dog.svg',
            likes: 99159,
            likedBy: 'adorable_animals',
        },
    ];

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
                        <img src={post.contentImage} alt="post content" />
                    </div>
                    <div className="fundo">
                        <div className="acoes">
                            <div>
                                <ion-icon name="heart-outline"></ion-icon>
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
