import React from 'react';
import PushButtons from '../PushButtons/PushButtons.jsx';



const Start = () => {


    return (

        <section id="startSection">

            <h1 id="welcomeH1">WELCOME</h1>
            <p id="welcomeP">Thank you for accessing my website</p>
            <div id="divButton">
                <PushButtons content="About Me"/>
                <PushButtons content="Projects"/>
                <PushButtons content="Skills"/>
                <PushButtons content="Knowledge"/>
                <PushButtons content="About Site"/>
                <PushButtons content="Contact"/>
            </div>


        </section>

    )

}

export default Start