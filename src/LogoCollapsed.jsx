import React from 'react';

import logo from './img/logo.jpeg';
import logopequena from './img/logopequena.jpg';

function Imgcollapsed(props) {


    if (!props.statelogo) {
        return (
            <div className="div-logo">
                <img className='logo' alt='logo' src={logo}></img>
            </div>
        )
    } else {
        return (
            <div className="div-logo">
                <img className='logopequena' alt='logo' src={logopequena}></img>
            </div>
        )
    }

}

export default Imgcollapsed;