import React from 'react';
import PushButtons from '../PushButtons/PushButtons.jsx';

const Navigation = () => {
    return(
        <div id="navDiv">
            <PushButtons idComponent="#aboutMe" title='About Me'/>
            <PushButtons idComponent="#projects" title='Projects'/>
            <PushButtons idComponent="#skills" title='Skills'/>
            <PushButtons idComponent="#knowledge"title='Knowledge'/>
            <PushButtons idComponent="#contact" title='Contact'/>
        </div>
        
    );
}

export default Navigation;