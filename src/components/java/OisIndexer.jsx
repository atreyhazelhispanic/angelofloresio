import React from 'react';
import Indexer from '../../files/OIS-Indexer.pdf'
import {Button, Fade} from "react-bootstrap";

class OisIndexer extends React.Component {
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
                    IOS-Indexer
                </Button>
                <Fade in={open}>
                    <div id="fade-text" style={{width: '100%', display: display}}>
                        <div style={infoBoxStyle}>
                            Ois-Indexer is a feature I worked on for pulling brand and style data from our main product
                            stream (Kafka) and writing each to their respective Dynamo tables.
                        </div>
                        <iframe src={Indexer} title="oisIndexer" height="800px" width="100%" />
                    </div>
                </Fade>
            </div>
        );
    }
}

export default OisIndexer