import React from 'react';



const Content = ({title,projectLink, projectName, info }) => {

    return (
        <section id="sectionContent">
            <h1>{title} <a href={projectLink}>{projectName}</a></h1>
        <div>
            <p>{info}</p>
        </div>
            
    
        </section>
    );
}


export default Content