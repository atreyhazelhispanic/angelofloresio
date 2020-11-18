import React from "react";
import Logo from "../../images/smu_logo.jpeg";

class SMU extends React.Component {
    render() {
        return (
            <div>
                <img src={Logo} height={'120px'} width={'210px'}/>
                <ul style={{color: '#e60000', textShadow: '1px 1px #FFFFFF', width: '50%', backgroundColor: 'white', opacity: '0.7'}}>
                <li>Bachelor's of Science in Computer scienceField Of StudyFocus: Software Engineering, Minor: Mathematics</li>
                    <li><i>Activities and Societies: Attended as key component to school's first appearance in the regional PRCCDC Cyber Security competition for Washington State.</i></li>
                </ul>
            </div>
        );
    }
}

export default SMU