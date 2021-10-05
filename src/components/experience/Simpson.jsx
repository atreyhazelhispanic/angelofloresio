import React from 'react';
import Logo from "../../images/simpson_logo.png";

class Simpson extends React.Component {
    render() {
        return (
            <div>
                <img src={Logo} height={'130px'} width={'200px'}/>
                <ul style={{color: 'black', width: '50%', backgroundColor: 'white'}}>
                    <li>Manufacturer - 5/12-9/12</li>
                </ul>
            </div>
        );
    }
}

export default Simpson