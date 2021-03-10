import React, {useState} from 'react';


const PushButtons = ({content}) =>{

    const [enabled, setEnabled] = useState(true)
    const className = enabled ? "" : "disabled"

    return (


        <div id="divButton">

            <button  className={className}  onClick={() => setEnabled(!enabled)} >{content}</button>
        
        </div>
    );
}

export default PushButtons;