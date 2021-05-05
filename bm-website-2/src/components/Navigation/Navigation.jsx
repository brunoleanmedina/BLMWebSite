import React from 'react';

import PushButtons from '../PushButtons/PushButtons.jsx';

const Navigation = () => {

    


    return(
            <section id="sectionNav" className="hidden" >
                <PushButtons idComponent="#aboutMe" title='About Me'/>
                <PushButtons idComponent="#projects" title='Projects'/>
                <PushButtons idComponent="#skills" title='Skills'/>
                <PushButtons idComponent="#knowledge"title='Knowledge'/>
                <PushButtons idComponent="#contact" title='Contact'/>
            </section>
    );
}

export default Navigation;