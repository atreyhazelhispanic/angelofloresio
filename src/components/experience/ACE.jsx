import React from 'react';
import Logo from "../../images/ace_logo.png";

class ACE extends React.Component {
    render() {
        return (
            <div>
                <img src={Logo} height={'120px'} width={'200px'}/>
                <ul style={{color: 'black', width: '50%', backgroundColor: 'white'}}>
                    <li>Clerk - 6/05-3/06</li>
                </ul>
            </div>
        );
    }
}

export default ACE