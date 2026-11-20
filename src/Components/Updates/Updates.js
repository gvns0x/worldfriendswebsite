import React from 'react';
import './Updates.css';

const Updates = ({ open }) => {
    return (
        <div className={`Updates-layer${open ? ' is-open' : ''}`} aria-hidden={!open}>
            <div className="Updates">
                <div className="Update-info">
                    <h2 style={{fontSize:'14px'}}>v1.4.1 <p style={{color:'rgba(0,0,0,.4)'}}>Nov 2026</p></h2>
                    <ul className="body-grey">
                        <li>Fixed bug where it wasn't possible to switch between groups</li>
                    </ul>
                </div>
                <div className="Update-info">
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
        </div>
    );
};

export default Updates;
