import React from 'react';
import Story from './Story';

export default function Stories() {
    const stories = [
        { username: '9gag', image: '/assets/9gag.svg' },
        { username: 'meowed', image: '/assets/meowed.svg' },
        { username: 'barked', image: '/assets/barked.svg' },
    ];

    return (
        <div className="stories">
            {stories.map((story, index) => (
                <Story key={index} username={story.username} image={story.image} />
            ))}
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}
