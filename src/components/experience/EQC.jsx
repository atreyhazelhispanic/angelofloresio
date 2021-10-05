import React from 'react';
import Logo from "../../images/eqc_logo.png";

class EQC extends React.Component {
    render() {
        return (
            <div>
                <img src={Logo} height={'120px'} width={'200px'}/>
                <ul style={{color: 'black', width: '50%', backgroundColor: 'white'}}>
                    <li>Bartender - 4/11-6/11</li>
                    <li>Bar Back - 3/11-4/11</li>
                </ul>
            </div>
        );
    }
}

export default EQC