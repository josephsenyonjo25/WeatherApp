import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import CitySearch from './components/CitySearch';
import Footer from './components/Footer';


class App extends Component {
    render() {
      return (
        <div className="App"> 
            <Header />
            <Navigation />
            <CitySearch />
            <Footer />

        </div>
      );
    }
  }


export default App;
