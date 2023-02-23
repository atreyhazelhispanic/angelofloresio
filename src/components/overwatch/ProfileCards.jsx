import React from 'react';
import './ProfileCard.css';
import widowBackground from '../../images/profile cards/widowmaker_profiile.jpeg'
import hanzoBackground from '../../images/profile cards/hanzo_cyberdragon_profile.jpeg'
import creeBackground from '../../images/profile cards/mcree_blackwatch_profile.jpeg'
import moriaBackground from '../../images/profile cards/moria_profile.jpeg'
import alex from '../../images/profile cards/alex_profile_pic.jpeg'
import flaqo from '../../images/profile cards/flaqo_profile_pic.JPG'
import angelo from '../../images/profile cards/angelo_profile_pic.JPG'
import saskia from '../../images/profile cards/saskia_profile_pic.png'
import PropTypes from "prop-types";

class ProfileCards extends React.Component {
    render() {
        return (
            <div className='profile-cards'>
                {this.props.teammates.map(
                    (teammate) =>
                        <div style={{paddingRight: '10px', display: "inline-block"}}>
                            <div className="card-container">
                                <header className='profile-header'
                                        style={{backgroundImage: `url(${teammate.profileBackground})`}}>
                                    <img className='profile-pic' src={teammate.profilePic} alt='teammate-portrait' />
                                </header>
                                <h1 className="bold-text"></h1>
                                <h2 className="normal-text">{teammate.location}</h2>
                                <div className="social-container">
                                    <div className="mains">
                                        <h1 className="bold-text">{teammate.main}</h1>
                                        <h2 className="smaller-text">Main</h2>
                                    </div>
                                    <div className="peeks">
                                        <h1 className="bold-text">{teammate.peek}</h1>
                                        <h2 className="smaller-text">Peek</h2>
                                    </div>
                                    <div className="maps">
                                        <h1 className="bold-text">{teammate.map}</h1>
                                        <h2 className="smaller-text">Favorite Map</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                )}
            </div>
        );
    }
}


ProfileCards.propTypes = {
    teammates: PropTypes.arrayOf(
        PropTypes.shape({
            k0: PropTypes.string,
            k1: PropTypes.object,
            k2: PropTypes.object,
            k3: PropTypes.string,
            k4: PropTypes.string,
            k5: PropTypes.string,
            k6: PropTypes.string
        })
    )
}

ProfileCards.defaultProps = {
    teammates: [
        {
            name: 'Atrey',
            profilePic: angelo,
            profileBackground: hanzoBackground,
            peek: 'Masters',
            main: 'Hanzo',
            map: 'Junkertown',
            location: 'Seattle'
        },
        {
            name: 'Chilli',
            profilePic: flaqo,
            profileBackground: creeBackground,
            peek: 'Diamond',
            main: 'Cassidy/Mcree',
            map: 'Eichenwalde',
            location: 'TJ'
        },
        {
            name: 'Alex',
            profilePic: alex,
            profileBackground: widowBackground,
            peek: 'GM',
            main: 'Widowmaker',
            map: 'Kings Row',
            location: 'Florida'
        },
        {
            name: 'Saskia',
            profilePic: saskia,
            profileBackground: moriaBackground,
            peek: 'Gold',
            main: 'Moria',
            map: 'Dorado',
            location: 'Seattle'
        }
    ]
}

export default ProfileCards;