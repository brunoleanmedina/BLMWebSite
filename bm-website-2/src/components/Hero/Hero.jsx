import React from "react";
import myImg from "../../media/myIcon.jpg";


const Hero = () => {
    return(
        <section id="myPresentation">
            <img src={myImg} alt=":T"/>
            <div id="textSection">
                <h1>Bruno Medina</h1>
                <h2>Web Developer</h2>
            </div>
        </section>
    );
};

export default Hero