import React, {Component} from 'react';
import '../App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CitySearch from './CitySearch';
import Home from './Home';
import Today from './Today';
import Hourly from './Hourly';
import FiveDay from './FiveDay';

class Navigation extends Component {
    render() { 
      return (
        <div className="Navigation"> 
           
          <Router>
	          <ul className ='links'>
	            <li><Link to='/'>Home</Link></li>
              <li><Link to='/today'>Today</Link></li>
              <li><Link to='/hourly'>Hourly</Link></li>
	            <li><Link to='/fiveday'>5-Day</Link></li>
            </ul>
            <CitySearch />
	          <Switch>
	            <Route exact path ='/' component={Home} />
	            <Route path ='/today' component={Today} />
              <Route path ='/hourly' component={Hourly} />
              <Route path ='/fiveday' component={FiveDay} />
	          </Switch>
          </Router>
        </div>
      );
    }
  }


export default Navigation;
