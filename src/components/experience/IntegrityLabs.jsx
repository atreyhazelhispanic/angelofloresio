import React from 'react';
import Logo from "../../images/integrity_logo.jpeg";

class IntegrityLabs extends React.Component {
    render() {
        return (
            <div>
                <img src={Logo} height={'120px'} width={'280px'}/>
                <ul style={{color: 'black', width: '50%', backgroundColor: 'white'}}>
                    <li>Software Engineer - Contract 5/18-7/18</li>
                </ul>
            </div>
        );
    }
}

export default IntegrityLabs