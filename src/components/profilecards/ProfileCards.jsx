import React from 'react';
import './ProfileCard.css';
import {OverwatchStatsModal} from '../modal/OverwatchStatsModal';
import {getOWPlayer} from "../../Services/getOWPlayer";
import widowBackground from '../../images/profile cards/widowmaker_profiile.jpeg'
import hanzoBackground from '../../images/profile cards/hanzo_cyberdragon_profile.jpeg'
import creeBackground from '../../images/profile cards/mcree_blackwatch_profile.jpeg'
import moriaBackground from '../../images/profile cards/moria_profile.jpeg'
import mercyBackground from '../../images/profile cards/mercy_background_profile.jpeg'
import alex from '../../images/profile cards/alex_profile_pic.jpeg'
import flaqo from '../../images/profile cards/flaqo_profile_pic.JPG'
import angelo from '../../images/profile cards/angelo_profile_pic.JPG'
import joel from '../../images/profile cards/underdose_profile_pic.jpg'
import saskia from '../../images/profile cards/saskia_profile_pic.png'
import PropTypes, {string} from "prop-types";

class ProfileCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            stats: []
        };
    }

    componentDidMount() {
        this.props.teammates.map((teammate) => {
            getOWPlayer(teammate.stats.battleTag)
                .then((result) => {
                    teammate.stats.username = result.username
                    teammate.stats.portrait = result.portrait
                    teammate.stats.endorsement = result.endorsement
                })
                .catch((e) => console.log(e));
        })
    }

    setModalShow = (show, stats) => {
        this.setState({
            modalShow: show,
            stats: stats,
        });
    }

    render() {
        return (
            <div className='profile-cards'>
                {this.props.teammates.map(
                    (teammate) =>
                        <div style={{paddingRight: '10px', display: "inline-block"}}>
                            <div className="card-container" onClick={() => this.setModalShow(true, teammate.stats)}>
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

                <OverwatchStatsModal
                    show={this.state.modalShow}
                    onHide={() => this.setModalShow(false, [])}
                    stats={this.state.stats}
                />
            </div>
        );
    }
}


ProfileCards.propTypes = {
    teammates: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            profilePic: PropTypes.string,
            profileBackground: PropTypes.object,
            peek: PropTypes.string,
            main: PropTypes.string,
            map: PropTypes.string,
            location: PropTypes.string,
            stats: PropTypes.shape({
                heroes: PropTypes.string,
                battleTag: PropTypes.string,
                username: PropTypes.string,
                portrait: PropTypes.string,
                endorsement: PropTypes.string,
                videos: PropTypes.arrayOf(string)
            })
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
            location: 'Seattle',
            stats: {
                heroes: 'Any',
                battleTag: 'IIIŁGßFJßIII-1439',
                username: '',
                portrait: '',
                endorsement: '',
                videos: [
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/GRgwlZcqQbk"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>

                    </iframe>,
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/PrRZ4T4lSmI"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>

                    </iframe>,
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/0966hLANY6A"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                    </iframe>
                ]
            }
        },
        {
            name: 'Chilli',
            profilePic: flaqo,
            profileBackground: creeBackground,
            peek: 'Diamond',
            main: 'Cassidy/Mcree',
            map: 'Eichenwalde',
            location: 'TJ',
            stats: {
                heroes: 'Any',
                battleTag: 'flaqow-1310',
                username: '',
                portrait: '',
                endorsement: '',
                videos: [

                ]
            }
        },
        {
            name: 'Alex',
            profilePic: alex,
            profileBackground: widowBackground,
            peek: 'GM',
            main: 'Widowmaker',
            map: 'Kings Row',
            location: 'Florida',
            stats: {
                heroes: 'Any',
                battleTag: 'ĢóřĭŀłãƇõôĉh-1451',
                username: '',
                portrait: '',
                endorsement: '',
                videos: [

                ]
            }
        },
        {
            name: 'Saskia',
            profilePic: saskia,
            profileBackground: moriaBackground,
            peek: 'Gold',
            main: 'Moria',
            map: 'Dorado',
            location: 'Seattle',
            stats: {
                heroes: 'Moria, Lucio, Sigma, Torb',
                battleTag: 'saskia-11104',
                username: '',
                portrait: '',
                endorsement: '',
                videos: [

                ]
            }
        },
        {
            name: 'Underdose',
            profilePic: joel,
            profileBackground: mercyBackground,
            peek: 'Gold',
            main: 'Mercy',
            map: 'Blizzard World',
            location: 'Victoria, B.C.',
            stats: {
                heroes: 'Mercy, Lucio, Reinhardt',
                battleTag: 'underdose-11486',
                username: '',
                portrait: '',
                endorsement: '',
                videos: [

                ]
            }
        }
    ]
}

export default ProfileCards;