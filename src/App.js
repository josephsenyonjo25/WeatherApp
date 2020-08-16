import React, { Component } from 'react';
import './App.css';
import { Provider } from './context';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import Header from './components/Header';
//import Navigation from './components/Navigation';
//import CitySearch from './components/CitySearch';
//import Footer from './components/Footer';

class App extends Component {
    render() {
      return(
        <Provider>

          <Router>
	          <ul className ='links'>
	            <li><Link to='/'>Home</Link></li>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/'>Home</Link></li>
	            <li><Link to='/'>Home</Link></li>
              <li><Link to='/'>Home</Link></li>
	            <li><Link to='/'>Home</Link></li>
            </ul>

	          <Switch>
	            <Route exact path ='/' component={Home} />
	            <Route exact path ='/' component={Home} />
              <Route exact path ='/' component={Home} />
              <Route exact path ='/' component={Home} />
              <Route exact path ='/' component={Home} />
              <Route exact path ='/' component={Home} />
	          </Switch>
          </Router>
        </Provider>
        
      );
    }
  }
export default App;
