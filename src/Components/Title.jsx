import React from 'react';
import './Styles/title.css';
 
function Title(props) {
    return(
        <div>
            <p className="title">{props.title}</p>
        </div>
    )
}

export default Title;