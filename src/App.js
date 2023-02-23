import {Link, Redirect, Route, Switch} from 'react-router-dom';
import {Navbar, Nav, Container, NavItem} from 'react-bootstrap'
import './App.css';
import Logo from './images/af_icon.png'
import Portfolio from './pages/portfolio/Portfolio'
import Experience from './pages/experience/Experience'
import Homepage from "./components/homepage/Homepage";
import Overwatch from "./components/overwatch/Overwatch";

function App() {
  return (
    <div className="App">
        <Navbar collapseOnSelect fixed="top" bg="dark" variant="dark" expand="lg">
            <Container style={{marginLeft: 0}}>
                <Navbar.Brand href="/"><img
                    src={Logo}
                    width="50"
                    height="40"
                    className="d-inline-block align-top"
                    alt="AF logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <NavItem href="/experience">
                            <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
                        </NavItem>
                        <NavItem href="/portfolio">
                            <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
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
            <Route path={'/overwatch'} component={Overwatch}/>
        </Switch>
    </div>
  );
}

export default App;
