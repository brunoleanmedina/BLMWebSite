import React from 'react';



const PushButtons = () =>{

    return (


        <div id="divButton">

            <button className="change">History</button>
            <button className="change">Projects</button>
            <button className="change">Skills</button>
            <button className="change">Knowledge</button>
            <button className="change">About this site</button>
            <button className="change">Contact</button>
        </div>
    );
}
document.querySelectorAll("button").forEach(button =>{
    button.addEventListener('click', () =>
    button.classList.toggle("change"));
});
export default PushButtons;