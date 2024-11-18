import React from 'react';
import Suggestion from './Suggestion';

export default function Suggestions() {
    const suggestions = [
        { username: 'bad.vibes.memes', userImage: '/assets/bad.vibes.memes.svg', reason: 'Segue você' },
        { username: 'chibirdart', userImage: '/assets/chibirdart.svg', reason: 'Novo no Instagram' },
        { username: 'razoesparaacreditar', userImage: '/assets/razoesparaacreditar.svg', reason: 'Segue você' },
        { username: 'adorable_animals', userImage: '/assets/adorable_animals.svg', reason: 'Segue você' },
        { username: 'smallcutecats', userImage: '/assets/smallcutecats.svg', reason: 'Segue você' },
    ];

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {suggestions.map((suggestion, index) => (
                <Suggestion
                    key={index}
                    username={suggestion.username}
                    userImage={suggestion.userImage}
                    reason={suggestion.reason}
                />
            ))}
        </div>
    );
}
