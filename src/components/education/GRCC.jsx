import React from "react";
import Logo from "../../images/grcc_logo.png";

class GRCC extends React.Component {
    render() {
        return (
            <div>
                <img src={Logo} height={'140px'} width={'300px'}/>
                <ul style={{color: '#e60000', textShadow: '1px 1px #FFFFFF', width: '50%', backgroundColor: 'white', opacity: '0.7'}}>
                <li>High SchoolField Of StudyOffice Management and High School GradGradeHS Senior</li>
                    <li><i>Activities and Societies: Running Start, High School completion.</i></li>
                </ul>
            </div>
        );
    }
}

export default GRCC