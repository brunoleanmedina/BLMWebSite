import React from "react";
import myImg from "../../media/myIcon.jpg";
import "./Hero.css";

const Hero = () => {
    return(
        <section>
            <img src={myImg} alt=":T"/>
            <div id="textSection">
                <h1>Bruno Medina</h1>
                <h2>Web Developer</h2>
            </div>
        </section>
    );
};

export default Hero