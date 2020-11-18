import React from 'react';
import Logo from "../../images/ace_logo.png";

class ACE extends React.Component {
    render() {
        return (
            <div>
                <img src={Logo} height={'120px'} width={'200px'}/>
                <ul style={{color: '#03a9f4', textShadow: '1px 1px #FFFFFF', width: '50%', backgroundColor: 'white', opacity: '0.7'}}>
                    <li>Clerk - 6/05-3/06</li>
                </ul>
            </div>
        );
    }
}

export default ACE