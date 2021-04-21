import React from "react";




const PushButtons = ({idComponent, title}) =>{
    return (


        <div id="divButton">
            <button id="btn"><a href={idComponent}>{title}</a></button>
        </div>
    );
}

export default PushButtons;