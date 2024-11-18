import React from 'react';

export default function DebugComponent() {
    const handleClick = () => {
        console.log('Button Clicked');
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Debug Component</h1>
            <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
                Test Click
            </button>
        </div>
    );
}
