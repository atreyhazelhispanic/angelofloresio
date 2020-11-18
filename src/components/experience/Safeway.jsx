import React from 'react';
import Logo from "../../images/safeway_logo.jpg";

class Safeway extends React.Component {
    render() {
        return (
            <div>
                <img src={Logo} height={'120px'} width={'180px'}/>
                <ul style={{color: '#03a9f4', textShadow: '1px 1px #FFFFFF', width: '50%', backgroundColor: 'white', opacity: '0.7'}}>
                    <li>Clerk - 3/13-9/13</li>
                </ul>
            </div>
        );
    }
}

export default Safeway