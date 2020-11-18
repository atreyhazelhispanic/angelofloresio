import React from 'react';
import Logo from "../../images/eqc_logo.png";

class EQC extends React.Component {
    render() {
        return (
            <div>
                <img src={Logo} height={'120px'} width={'200px'}/>
                <ul style={{color: '#03a9f4', textShadow: '1px 1px #FFFFFF', width: '50%', backgroundColor: 'white', opacity: '0.7'}}>
                    <li>Bartender - 4/11-6/11</li>
                    <li>Bar Back - 3/11-4/11</li>
                </ul>
            </div>
        );
    }
}

export default EQC