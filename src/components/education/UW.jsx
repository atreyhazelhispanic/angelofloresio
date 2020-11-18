import React from "react";
import Logo from "../../images/uw_logo.png";

class UW extends React.Component {
    render() {
        return (
            <div>
                <img src={Logo} height={'180px'} width={'210px'}/>
                <ul style={{color: '#e60000', textShadow: '1px 1px #FFFFFF', width: '50%', backgroundColor: 'white', opacity: '0.7'}}>
                <li>Bachelor's of Science in Computer scienceField Of StudyFocus: Software Engineering, Minor: Mathematics</li>
                    <li><i>Activities and Societies: Fall 2016 Gamer's Club in Unity, HUSCII coding group and DubHacks 2016.</i></li>
                </ul>
            </div>
        );
    }
}

export default UW