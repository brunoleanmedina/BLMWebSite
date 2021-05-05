import React from "react";
import myImg from "../../assets/media/myImg.jpg";


const Presentation = () => {
    return(
        <section id="myPresentation">
            
            <img src={myImg} alt=":T"/>

            
            <div>
                <h1>Bruno Medina</h1>
                <h3>Web Developer</h3>
                <p>I am a young developer looking for the first work experience, 
                    prepared and excited to apply my acquired knowledge and learn 
                    new technologies!.{<br/>}
                    I started with the basics, learning HTML, CSS, 
                    and JavaScript, to get a basic web dev profile. My goal, is to get in 
                    to a formal CS career like Programmer Analyst 
                </p>
            </div>
        </section>
    );
};

export default Presentation