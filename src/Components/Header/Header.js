import React from 'react';
import '../Header/Header.css'
import Logo from '../../Images/logo.png'
import CTA from '../../Components/CTA/CTA.js'

const Header = () => {
    return (
        <div className='Header'>
            <img className="Logo" src={Logo}/>
            <CTA/>
            
        </div>
    );
};

export default Header;