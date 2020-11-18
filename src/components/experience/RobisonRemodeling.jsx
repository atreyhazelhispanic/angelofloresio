import React from 'react';
import Logo from "../../images/rr_logo.png";

class RobisonRemodeling extends React.Component {
    render() {
        return (
            <div>
                <img src={Logo} height={'300px'} width={'200px'}/>
                <ul style={{color: '#03a9f4', textShadow: '1px 1px #FFFFFF', width: '50%', backgroundColor: 'white', opacity: '0.7'}}>
                    <li>UI/UX Dev - Adhoc 9/14-5/20</li>
                </ul>
            </div>
        );
    }
}

export default RobisonRemodeling