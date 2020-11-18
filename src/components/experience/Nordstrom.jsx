import React from 'react';
import Logo from '../../images/nordstrom_logo.jpg';

class Nordstrom extends React.Component {
    render() {
        return (
            <div>
                <img src={Logo} height={'100px'} width={'200px'}/>
                <ul style={{color: '#03a9f4', textShadow: '1px 1px #FFFFFF', width: '50%', backgroundColor: 'white', opacity: '0.7'}}>
                    <li>Software Engineer - Full Stack 3/19-<i>current</i></li>
                    <li>Data Scientist - ML 8/18-3/19</li>
                    <li>Software Engineer - Internship 6/18-8/18</li>
                </ul>
            </div>
        );
    }
}

export default Nordstrom