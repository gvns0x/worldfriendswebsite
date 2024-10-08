import React from 'react';
import './Letter.css'
import Logo from '../../Images/logo.png'

const Letter = () => {
    return (
        <div className='Letter'>
            <p>I built globezones out of need.
<br/><br/>
As an immigrant with friends, family, and colleagues all over the globe 🌍, it became hard to juggle so many timezones in my head.
<br/><br/>
Globezones <img className="GlobezonesSentenceLogo" alt="" src={Logo}/> helps me see when my friends are available and make plans by easily dragging their time into the future.
<br/><br/>
I use it every day. Hopefully it can be useful for you too.
<br/><br/>
If you are using globezones, I’d love to know about it. Hopefully you have feedback that can help improve it. <a className="LetterLink" href="https://x.com/gvns0x" rel="noopener noreferrer" target='_blank'>DM me on X.</a>
<br/><br/>
Have a great time,<br/>
João</p>
        </div>
    );
};

export default Letter;