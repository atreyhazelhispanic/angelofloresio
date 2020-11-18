import React from 'react';
import Logo from "../../images/fredmeyer_logo.png";

class FredMeyer extends React.Component {
    render() {
        return (
            <div>
                <img src={Logo} height={'120px'} width={'270px'}/>
                <ul style={{color: '#03a9f4', textShadow: '1px 1px #FFFFFF', width: '50%', backgroundColor: 'white', opacity: '0.7'}}>
                    <li>Relief Assistant Food Manager - 2/09-2/11</li>
                    <li>Fourth Food Manager - 10/07-2/09</li>
                    <li>Operations Supervisor - 4/07-10/07</li>
                    <li>Cashier - 8/06-4/07</li>
                </ul>
            </div>
        );
    }
}

export default FredMeyer