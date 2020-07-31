import React from 'react'; 
import './Styles/info.css';

function Info(props) {
    return(
        <div>
            <p className="info">{props.info}</p>
        </div>
    )
}

export default Info;