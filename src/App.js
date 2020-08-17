import React, { Component } from 'react';
import './App.css';
import { Provider } from './context';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import Header from './components/Header';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';
//import CitySearch from './components/CitySearch';
//import Footer from './components/Footer';

class App extends Component {
    render() {
      return(
        <Provider>
          <Header />
          <Navigation />
          <Footer />
        </Provider>
        
      );
    }
  }
export default App;
