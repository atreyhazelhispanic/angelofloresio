import React from 'react';
import portrait from '../../images/tahoe_profile_pic.jpg'
import csBanner from '../../images/cs_wallpaper.jpg'
import emailIcon from '../../images/email_icon.png'
import ghIcon from '../../images/gh_icon.svg'
import linkedInIcon from '../../images/li_icon.svg'
import {EmailModal} from "../../components/modal/EmailModal";

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false
        };
    }

    componentDidMount() {
        // Update background height for mobile
        document.body.style.backgroundColor = '#48C7FF'
    }

    setModalShow = (show) => {
        this.setState({
            modalShow: show
        });
    }

    render() {
        const ghLink = 'https://github.com/atreyhazelhispanic'
        const liLink = 'https://www.linkedin.com/in/angelo-flores-449068ba/'

        return (
            <div className="homepage">
                <img src={portrait} className='portrait' alt='Homepage Portrait' width='40%' height='890' resizeMode='cover' />
                <img src={csBanner} className='cs-banner' alt='Title background banner' width='60%' height='400' resizeMode='cover' />

                <div className="homepage-title">
                    <span>Software Engineer | Developer</span>
                </div>
                <div>
                    <span className="introduction-title">Hi, I'm Angelo.</span>
                    <p className="introduction-paragraph">
                        I'm a Full Stack engineer with experience in backend, front end, DevOps, ML, and cloud infrastructure.
                        <br/>
                        I'm driven by problem solving, being creative, learning, and developing new features or experiences.
                        <br/>
                        Throughout years of experience I've worked with a plethora of code, technologies, dependencies as
                        well as devices. Beyond my technical skills I'm additionally well versed in working with people.
                        This includes all levels from: different teams, companies, and customers directly.
                        <br/>
                        I've provided a few forms of contact here to learn more and where I may be reached.
                    </p>
                </div>

                <div>
                    <img src={emailIcon} onClick={() => this.setModalShow(true)} alt='Email Icon' className='email-icon' width='70px' height='45px' />
                    <a href={ghLink}>
                        <img src={ghIcon} alt='GitHub Icon' className='github-icon' width='130px' height='65px' />
                    </a>
                    <a href={liLink}>
                        <img src={linkedInIcon} alt='LinkedIn Icon' className='linkedin-icon' width='130px' height='65px' />
                    </a>

                    <EmailModal
                        show={this.state.modalShow}
                        onHide={() => this.setModalShow(false)}
                    />
                </div>
            </div>
        );
    }
}

export default Homepage