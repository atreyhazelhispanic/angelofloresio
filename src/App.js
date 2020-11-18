import {Link, Route, Switch} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap'
import './App.css';
import Logo from './images/af_icon.png'
import Experience from './pages/Experience'

function App() {
  return (
    <div className="App">
        <Navbar bg="dark" variant="dark" style={{backgroundColor: "black"}}>
            <Nav className="mr-auto">
                <Navbar.Brand href="/"><img src={Logo} height={'70em'}/></Navbar.Brand>
                <Link to={'/experience'} className={'navItems'}>Experience</Link>
            </Nav>
        </Navbar>
        <Switch>
            <Route exact path={'/experience'} component={Experience}/>
        </Switch>
    </div>
  );
}

export default App;
