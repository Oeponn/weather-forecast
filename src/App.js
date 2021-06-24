import { Switch, Route, BrowserRouter, NavLink } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Current from './components/Current';
import Fiveday from './components/Fiveday';
import PageNotFound from './components/404';

const Header = (props) => {
  return (
    <div className='header-container'>
      <h1 className="header-oponn">Weather Forecast</h1>
      <div className="header-links-container">
        <NavLink to="/" exact={true} activeClassName='selected-link' className={props.header_items}>Home</NavLink>
        <br />
        <NavLink to="/current" activeClassName='selected-link' className={props.header_items}>Current Temperature</NavLink>
        <br />
        <NavLink to="/fiveday" activeClassName='selected-link' className={props.header_items}>Five Day Forecast</NavLink>
      </div>
      <div className="line-container">
        <hr className='line-black' />
      </div>
    </div>
  )
}

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
          <div className="headerc-container">
            <Header />
          </div>
          <div>
            <Switch>
              <Route path="/" component={Home} exact={true} />
              {/* <Route path="/feed" component={Feed} /> */}
              <Route path="/current" component={Current} />
              <Route path="/fiveday" component={Fiveday} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header> */}
    </div>
  );
}

export default App;
