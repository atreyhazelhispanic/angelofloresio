import {Link, Redirect, Route, Switch} from 'react-router-dom';
import {Navbar, Nav, Container, NavItem} from 'react-bootstrap'
import './App.css';
import Logo from './images/af_icon.png'
import Portfolio from './pages/portfolio/Portfolio'
import Experience from './pages/experience/Experience'
import Homepage from "./pages/homepage/Homepage";
import Overwatch from "./pages/overwatch/Overwatch";
import VideoProduction from "./pages/video-production/VideoProduction";

function App() {
  return (
    <div className="App">
        <Navbar collapseOnSelect fixed="top" variant="dark" expand="lg" style={{backgroundColor: '#102468'}}>
            <Container style={{marginLeft: 0, width: '50%'}}>
                <Navbar.Brand href="/"><img
                    src={Logo}
                    width="50"
                    height="40"
                    className="d-inline-block align-top"
                    alt="AF logo"
                />
                </Navbar.Brand>
            </Container>
            <Container style={{marginRight: 0, width: '50%'}}>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ml-auto" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <NavItem href="/home">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        </NavItem>
                        <NavItem href="/experience">
                            <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
                        </NavItem>
                        <NavItem href="/portfolio">
                            <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
                        </NavItem>
                        <NavItem href="/video-production">
                            <Nav.Link as={Link} to="/video-production">Video Production</Nav.Link>
                        </NavItem>
                        <NavItem href="/overwatch">
                            <Nav.Link as={Link} to="/overwatch">Overwatch</Nav.Link>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Switch>
            <Route path={'/home'} component={Homepage}/>
            <Route exact path={'/'}>
                <Redirect to={'/home'}/>
            </Route>
            <Route path={'/experience'} component={Experience}/>
            <Route path={'/portfolio'} component={Portfolio}/>
            <Route path={'/video-production'} component={VideoProduction}/>
            <Route path={'/overwatch'} component={Overwatch}/>
        </Switch>
    </div>
  );
}

export default App;
