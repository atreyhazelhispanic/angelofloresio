import React from 'react';
import Logo from '../../images/walmart.jpg';

class Walmart extends React.Component {
    render() {
        return (
            <div>
                <img src={Logo} height={'100px'} width={'200px'}/>
                <ul style={{color: 'black', width: '50%', backgroundColor: 'white'}}>
                    <li>Fresh Production 1/23-3/23</li>
                    <li>Department Manager 3/23-Current</li>
                </ul>
            </div>
        );
    }
}

export default Walmart