import React from 'react';
import BasicSelect from "../../components/basicselect/BasicSelect";
import PropTypes from "prop-types";

class VideoProduction extends React.Component {
    render() {
        return (
            <div className="video-production">
                <header className='rewind-header'>The new 2022 Rewind video is out now!</header>
                <span className='rewind-description'>Fully produced by myself :) <br/>
                    All years provided for your enjoyment.
                </span>
                <BasicSelect rewinds={this.props.rewinds} />
            </div>
        );
    }
}

VideoProduction.propTypes = {
    rewinds: PropTypes.array
}

VideoProduction.defaultProps = {
    rewinds: [
        <iframe width="560" height="315" src="https://www.youtube.com/embed/9UlSbhR0SiQ" title="YouTube video player"
                id="2022"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                class="responsive-iframe">
        </iframe>,
        <iframe width="560" height="315" src="https://www.youtube.com/embed/xGP6aT57G9Q" title="YouTube video player"
                id="2021"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                class="responsive-iframe">
        </iframe>,
        <iframe width="560" height="315" src="https://www.youtube.com/embed/MYs9huQfSBU" title="YouTube video player"
                id="2020"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                class="responsive-iframe">
        </iframe>,
        <iframe width="560" height="315" src="https://www.youtube.com/embed/3YJ8hRwQNAA" title="YouTube video player"
                id="2019"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                class="responsive-iframe">
        </iframe>
    ]
}

export default VideoProduction;