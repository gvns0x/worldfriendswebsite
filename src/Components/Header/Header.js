import React from 'react';
import '../Header/Header.css'
import Logo from '../../Images/logo.png'
import CTA from '../../Components/CTA/CTA.js'
import LogoText from '../../Images/logotext.png'

const Header = () => {
    return (
        <div className='Header'>
            <div className='Header-content'>
            <img className="Logo" src={Logo}/>
            <img className="LogoText" src={LogoText}/>
            </div>
            <CTA/>
            
        </div>
    );
};

export default Header;