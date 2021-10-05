import {Link, Route, Switch} from 'react-router-dom';
import {Navbar, Nav, Container, NavItem} from 'react-bootstrap'
import './App.css';
import Logo from './images/af_icon.png'
import Portfolio from './pages/portfolio/Portfolio'
import Experience from './pages/experience/Experience'

function App() {
  return (
    <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg" style={{backgroundColor: "black", height: '60px'}}>
            <Container style={{marginLeft: 0}}>
                <Navbar.Brand href="/"><img src={Logo} height={'50em'} alt={"Initials Logo"}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" style={{display:"flex", flexDirection:"row"}}>
                        <NavItem href="/experience">
                            <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
                        </NavItem>
                        <NavItem href="/portfolio">
                            <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Switch>
            <Route path={'/experience'} component={Experience}/>
            <Route path={'/portfolio'} component={Portfolio}/>
        </Switch>
    </div>
  );
}

export default App;
