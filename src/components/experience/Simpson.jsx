import React from 'react';
import Logo from "../../images/simpson_logo.png";

class Simpson extends React.Component {
    render() {
        return (
            <div>
                <img src={Logo} height={'130px'} width={'200px'}/>
                <ul style={{color: '#03a9f4', textShadow: '1px 1px #FFFFFF', width: '50%', backgroundColor: 'white', opacity: '0.7'}}>
                    <li>Manufacturer - 5/12-9/12</li>
                </ul>
            </div>
        );
    }
}

export default Simpson