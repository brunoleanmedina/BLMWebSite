import React, {useState}from 'react';

import PushButtons from '../PushButtons/PushButtons.jsx';

const Navigation = () => {

    const [state, setState] = useState(false);

    const handleClick = (state == true ? "<" : ">")

    return(
        <section id="sectionNav">
            <PushButtons idComponent="#aboutMe" title='About Me'/>
            <PushButtons idComponent="#projects" title='Projects'/>
            <PushButtons idComponent="#skills" title='Skills'/>
            <PushButtons idComponent="#knowledge"title='Knowledge'/>
            <PushButtons idComponent="#contact" title='Contact'/>
            <p id="handleClick" onClick={() => setState(!state)}>{handleClick}</p>
            

        </section>
        
    );
}

export default Navigation;