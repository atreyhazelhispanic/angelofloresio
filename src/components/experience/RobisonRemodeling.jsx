import React from 'react';
import Logo from "../../images/rr_logo.png";

class RobisonRemodeling extends React.Component {
    render() {
        return (
            <div>
                <img src={Logo} height={'300px'} width={'200px'}/>
                <ul style={{color: 'black', width: '50%', backgroundColor: 'white'}}>
                    <li>UI/UX Dev - Adhoc 9/14-5/20</li>
                </ul>
            </div>
        );
    }
}

export default RobisonRemodeling