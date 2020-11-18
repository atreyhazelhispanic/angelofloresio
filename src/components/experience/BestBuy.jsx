import React from 'react';
import Logo from "../../images/bestbuy_logo.jpg";

class BestBuy extends React.Component {
    render() {
        return (
            <div>
                <img src={Logo} height={'130px'} width={'200px'}/>
                <ul style={{color: '#03a9f4', textShadow: '1px 1px #FFFFFF', width: '50%', backgroundColor: 'white', opacity: '0.7'}}>
                    <li>Mobile/Connected/Networking Technology Representative - 4/18-9/20</li>
                    <li>Advanced Repair Technician - 9/16-4/18</li>
                    <li>Mobile Technology Representative - 6/16-9/16</li>
                    <li>Consultation Agent - 12/13-6/16</li>
                </ul>
            </div>
        );
    }
}

export default BestBuy