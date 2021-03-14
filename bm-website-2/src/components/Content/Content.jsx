import React from 'react';



const Content = ({title, info}) => {

    return (
        <section>
            <h1>{title}</h1>
            <div>
                {info}
            </div>
        
        </section>
    );
}


export default Content