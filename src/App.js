import {Link, Route, Switch} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap'
import './App.css';
import Experience from './pages/Experience'

function App() {
  return (
    <div className="App">
        <Navbar bg="dark" variant="dark" style={{backgroundColor: "black"}}>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Nav className="mr-auto">
                <Link to={'/experience'}>Experience</Link>
            </Nav>
        </Navbar>
        <Switch>
            <Route exact path={'/experience'} component={Experience}/>
        </Switch>
    </div>
  );
}

export default App;
