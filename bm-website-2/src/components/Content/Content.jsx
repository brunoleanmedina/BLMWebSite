import React from 'react';



const Content = ({title,projectLink, projectName, info }) => {

    return (
        <section id="sectionContent">
            <h1>{title} <a href={projectLink}>{projectName}</a></h1>
        <div>
            {info}
        </div>
            
    
        </section>
    );
}


export default Content