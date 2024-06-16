import React from 'react';
import Collapsible from "./PythonCollapsible";
import styles from './collapsible.css'
import video1 from "../../files/python_chess_code.mov";

class Python extends React.Component {
    render() {
        return (
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Collapsible label="Python Chess">
                    <section className='left section' style={{float: "left"}}>
                        <iframe
                            title="chessLink"
                            src="https://itch.io/embed/2752524?bg_color=222222&amp;fg_color=f2f2f2&amp;link_color=0725ff&amp;border_color=3553f4"
                            width="552" height="167"><a href="https://atreyhazelhispanic.itch.io/python-chess">Python Chess
                            by AtreyHazelHispanic</a></iframe>
                        <p>
                            Coded a chess game in Python for my son to play. Very fun, <br/> but only works on desktop browser
                            at this time.
                        </p>
                    </section>
                    <section class='right section' style={{float: "right"}}>
                        <video className='python-code' title="chessCode" src={video1} width="600" height="300" controls="controls" autoPlay="true"/>
                    </section>
                </Collapsible>
            </div>
        );
    }
}

export default Python