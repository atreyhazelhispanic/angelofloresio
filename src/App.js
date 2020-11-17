import logo from './logo.svg';
import {Link, Route, Switch} from 'react-router-dom';
import './App.css';
import Experience from './pages/Experience'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to={'/experience'}>Experience</Link>
      </header>

        <Switch>
            <Route exact path={'/experience'} component={Experience}/>
        </Switch>
    </div>
  );
}

export default App;
