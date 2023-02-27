import React from "react";
import {Fade, Button}  from 'react-bootstrap';
import Expand from "react-expand-animated";
import Java from "../../components/java/Java";
import C from '../../components/c#/C#'
import Jsx from '../../components/react/react'
import Python from '../../components/python/Python'

class Portfolio extends React.Component {
    state = {
        javaOpen: false,
        cOpen: false,
        reactOpen: false
    };

    render() {
        const {
            javaOpen,
            cOpen,
            reactOpen,
            pythonOpen
        } = this.state;

        const Lang = {
            Java: 'javaOpen',
            C: 'cOpen',
            React: 'reactOpen',
            Python: 'pythonOpen',
        };

        const toggle = (open) => {
            if(open === "javaOpen"){
                this.setState({javaOpen: !javaOpen});
            }
            else if(open === "cOpen"){
                this.setState({cOpen: !cOpen});
            }
            else if(open === 'reactOpen'){
                this.setState({reactOpen: !reactOpen});
            }
            else if(open === 'pythonOpen'){
                this.setState({pythonOpen: !pythonOpen});
            }
        };

        const transitions = ["height", "opacity", "background"];

        return (
            <div>
                <div style={{width: '100%', margin: '0 auto', paddingTop: '60px'}}>
                    <Button
                        onClick={() => toggle(Lang.Java)}
                        aria-controls="fade-text"
                        aria-expanded={javaOpen}
                        style={{width: '50%', border: '2px black red', borderRadius: '3px', marginLeft: '25%'}}
                    >
                        Java
                    </Button>
                    <Expand
                        open={this.state.javaOpen}
                        duration={500}
                        styles={{width: '100%'}}
                        transitions={transitions}
                    >
                        <Java/>
                    </Expand>
                </div>
                <br />
                <div style={{width: '100%', margin: '0 auto'}}>
                    <Button
                        onClick={() => toggle(Lang.C)}
                        aria-controls="fade-text"
                        aria-expanded={cOpen}
                        style={{width: '50%', border: '2px black red', borderRadius: '3px', marginLeft: '25%'}}
                    >
                        C# - .NET
                    </Button>
                    <Expand
                        open={this.state.cOpen}
                        duration={500}
                        styles={{width: '100%'}}
                        transitions={transitions}
                    >
                        <C/>
                    </Expand>
                </div>
                <br />
                <div style={{width: '100%', margin: '0 auto'}}>
                    <Button
                        onClick={() => toggle(Lang.React)}
                        aria-controls="fade-text"
                        aria-expanded={reactOpen}
                        style={{width: '50%', border: '2px black red', borderRadius: '3px', marginLeft: '25%'}}
                    >
                        React
                    </Button>
                    <Expand
                        open={this.state.reactOpen}
                        duration={500}
                        styles={{width: '100%'}}
                        transitions={transitions}
                    >
                        <Jsx/>
                    </Expand>
                </div>
                <br />
                <div style={{width: '100%', margin: '0 auto'}}>
                    <Button
                        onClick={() => toggle(Lang.Python)}
                        aria-controls="fade-text"
                        aria-expanded={pythonOpen}
                        style={{width: '50%', border: '2px black red', borderRadius: '3px', marginLeft: '25%'}}
                    >
                        Python
                    </Button>
                    <Expand
                        open={this.state.pythonOpen}
                        duration={500}
                        styles={{width: '100%'}}
                        transitions={transitions}
                    >
                        <Python/>
                    </Expand>
                </div>
            </div>
        );
    }
}

export default Portfolio
