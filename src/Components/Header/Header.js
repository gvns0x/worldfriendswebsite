import React, { useState, useEffect } from 'react';
import '../Header/Header.css'
import Logo from '../../Images/logo.png'
import CTA from '../../Components/CTA/CTA.js'
import LogoText from '../../Images/logotext.png'
import QRCode from '../QRCode/QRCode.js'

const Header = () => {
    const [showQRCode, setShowQRCode] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 500);

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth > 500);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleCTAClick = (e) => {
        e.preventDefault();
        window.open('https://globezones.com', '_blank');
    };

    const handleCTAHover = () => {
        if (isWideScreen) {
            setShowQRCode(true);
            setIsHovered(true);
        }
    };

    const handleCTALeave = () => {
        if (isWideScreen) {
            setShowQRCode(false);
            setIsHovered(false);
        }
    };

    return (
        <>
            <div className='Header'>
                <div className='Header-content'>
                    <img className="Logo" src={Logo} alt="Globezones logo"/>
                    <img className="LogoText" src={LogoText} alt="globezones"/>
                </div>
                <div className="CTA-container"
                     onMouseEnter={handleCTAHover}
                     onMouseLeave={handleCTALeave}
                     onClick={handleCTAClick}>
                    <CTA 
                        cta={isWideScreen && isHovered ? "Go to AppStore" : "Download for iPhone"}
                        isHovered={isHovered}
                        isWideScreen={isWideScreen}
                    />
                    {isWideScreen && (
                        <div className={`QRCode-hover ${showQRCode ? 'visible' : ''}`}>
                            <QRCode />
                        </div>
                    )}
                </div>
            </div>
            {isWideScreen && <div className={`blur-overlay ${showQRCode ? 'active' : ''}`}></div>}
        </>
    );
};

export default Header;