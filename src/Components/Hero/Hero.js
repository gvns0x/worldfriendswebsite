import React, { useState, useEffect } from 'react';
import './Hero.css';
import QRCode from '../QRCode/QRCode';
import HeroPhone from '../../Images/herophone.png';

const Hero = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='Hero'>
            <div className="Hero-content">
                <div className="Hero-text-container">
                    <h1>Visualize and convert timezones for friends, family and colleagues.</h1>
                    <div className="Hero-conditional-container">
                        <div className="Hero-conditional">
                            {windowWidth > 435 ? (
                            <QRCode/>
                        ) : (
                            <button className="Hero-button">Click Me</button>
                        )}
                    </div>
                    <div className="Hero-subtext-container">
                    <p className="Hero-subtext">Scan the QR to download for iPhone</p>
                    <a rel="noreferrer" href="http://globalzones.com/" className="Hero-subtext">or visit the AppStore</a>
                    </div>
                </div>
                </div>
                    <img src={HeroPhone} alt="iPhone with the Globezones app" className="Hero-image" />
            </div>
        </div>
    );
};

export default Hero;