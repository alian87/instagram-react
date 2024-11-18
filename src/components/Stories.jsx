import React from 'react';

export default function Stories() {
    const stories = [
        { username: '9gag', image: '/assets/9gag.svg' },
        { username: 'meowed', image: '/assets/meowed.svg' },
        { username: 'barked', image: '/assets/barked.svg' },
    ];

    return (
        <div className="stories">
            {stories.map((story, index) => (
                <div className="story" key={index}>
                    <div className="imagem">
                        <img src={story.image} alt={story.username} />
                    </div>
                    <div className="usuario">{story.username}</div>
                </div>
            ))}
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}
