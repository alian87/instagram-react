import React from 'react';
import 'ionicons/css/ionicons.min.css';
import './css/reset.css';
import './css/style.css';
import NavBar from './components/NavBar';
import Body from './components/Body';

export default function App() {
    return (
        <>
            <NavBar />
            <Body />
        </>
    );
}
