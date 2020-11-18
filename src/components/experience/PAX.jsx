import React from 'react';
import Logo from "../../images/pax_logo.png";

class PAX extends React.Component {
    render() {
        return (
            <div>
                <img src={Logo} height={'110px'} width={'250px'}/>
                <ul style={{color: '#03a9f4', textShadow: '1px 1px #FFFFFF', width: '50%', backgroundColor: 'white', opacity: '0.7'}}>
                    <li>Enforcer - Dev 8/19-9/19</li>
                    <li>VR Enforcer - West 8/19-9/19</li>
                    <li>VR Enforcer - West 8/18-9/18</li>
                    <li>VR Enforcer - West 8/17-9/17</li>
                </ul>
            </div>
        );
    }
}

export default PAX