import React from 'react';
import Logo from "../../images/integrity_logo.jpeg";

class IntegrityLabs extends React.Component {
    render() {
        return (
            <div>
                <img src={Logo} height={'120px'} width={'280px'}/>
                <ul style={{color: '#03a9f4', textShadow: '1px 1px #FFFFFF', width: '50%', backgroundColor: 'white', opacity: '0.7'}}>
                    <li>Software Engineer - Contract 5/18-7/18</li>
                </ul>
            </div>
        );
    }
}

export default IntegrityLabs