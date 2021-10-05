import React from "react";
import Logo from "../../images/oc_logo.png";

class OC extends React.Component {
    render() {
        return (
            <div>
                <img src={Logo} height={'140px'} width={'300px'}/>
                <ul style={{color: 'black', width: '50%', backgroundColor: 'white'}}>
                    <li>ATA - Associates of Science in Computer ScienceField Of StudyComputer Science and Mathematics</li>
                    <li><i>Activities and Societies: MESA STEM program, ROV underwater engineering competition judge, Washington State science and engineering fair judge, WSU engineering guest, UW engineering guest, Discrete mathematics study group, and an Associates of Science in Computer Science.</i></li>
                </ul>
            </div>
        );
    }
}

export default OC