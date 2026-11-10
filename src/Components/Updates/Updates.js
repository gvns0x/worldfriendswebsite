import React from 'react';
import './Updates.css';
import Header from '../Header/Header';

const Updates = () => {
    return (
        <div className="Updates-page">
            <Header />
            <div className="Updates">
                <h2 style={{fontSize:'14px'}}>v1.4 <p style={{color:'rgba(0,0,0,.4)'}}>Nov 2026</p></h2>
                <ul className="body-grey">
                    <li>Create groups of contacts</li>
                    <li>Liquid glass</li>
                    <li>Choose System, Light, or Dark in Settings</li>
                    <li>Improved haptics when changing time</li>
                    <li>Smaller headers for sheets</li>
                </ul>
            </div>
        </div>
    );
};

export default Updates;
