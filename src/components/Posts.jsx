import React from 'react';
import Post from './Post';

export default function Posts() {
    const posts = [
        {
            username: 'meowed',
            userImage: '/assets/meowed.svg',
            contentImage: '/assets/gato-telefone.svg',
            likes: 101523,
            likedBy: 'respondeai',
        },
        {
            username: 'barked',
            userImage: '/assets/barked.svg',
            contentImage: '/assets/dog.svg',
            likes: 99159,
            likedBy: 'adorable_animals',
        },
        {
            username: '9gaf',
            userImage: '/assets/9gag.svg',
            contentImage: '/assets/gato-preto.svg',
            likes: 32877,
            likedBy: 'smallcutecats',
        },        
    ];

    return (
        <div className="posts">
            {posts.map((post, index) => (
                <Post
                    key={index}
                    username={post.username}
                    userImage={post.userImage}
                    contentImage={post.contentImage}
                    likes={post.likes}
                    likedBy={post.likedBy}
                />
            ))}
        </div>
    );
}
