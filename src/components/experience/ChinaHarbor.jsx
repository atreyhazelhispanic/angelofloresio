import React from 'react';
import Logo from "../../images/chinaharbor_logo.jpg";

class ChinaHarbor extends React.Component {
    render() {
        return (
            <div>
                <img src={Logo} height={'120px'} width={'200px'}/>
                <ul style={{color: 'black', width: '50%', backgroundColor: 'white'}}>
                    <li>Bartender - 3/11-10/11</li>
                </ul>
            </div>
        );
    }
}

export default ChinaHarbor