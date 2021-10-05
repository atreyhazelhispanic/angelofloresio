import React from 'react';
import Curated from '../../files/Curated Collections - Lambda Processor.pdf'
import {Button, Fade} from "react-bootstrap";

class CuratedCollections extends React.Component {
    state = {
        open: false,
        display: 'none'
    };

    render() {
        const {
            open,
            display
        } = this.state;

        const toggle = (open) => {
            if(open){
                this.setState({display: 'none'});
            }
            else{
                this.setState({display: 'block'});
            }

            this.setState({open: !open});
        };

        const projButtonStyle = {
            backgroundImage: 'linear-gradient(to right, #e73e00 , #00bdff)', width: '10%', marginTop: '2px',
            border: '2px black', borderRadius: '3px', marginLeft: '25%', fontWeight: 'bold'
        };

        const infoBoxStyle = {
            backgroundColor: 'white',
            color: 'black',
            marginTop: '3px',
            marginLeft: '25%',
            width: '50%'
        };

        return (
            <div>
                <Button
                    onClick={() => toggle(open)}
                    aria-controls="fade-text"
                    aria-expanded={open}
                    style={projButtonStyle}
                >
                    Curated Collections
                </Button>
                <Fade in={open}>
                    <div id="fade-text" style={{width: '100%', display: display}}>
                        <div style={infoBoxStyle}>
                            Curated Collections is a Java 11 based Lambda that was implemented to take data from an S3
                            event occurring on the UI, and assign tokens accordingly. A token being a label or type of
                            clothing. Parsing IDs, it would update all records for any relative ID in this this domains
                            files with tokens being added or removed for each.
                        </div>
                        <iframe src={Curated} title="curatedCollection" height="800px" width="100%" />
                    </div>
                </Fade>
            </div>
        );
    }
}

export default CuratedCollections