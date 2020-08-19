import React, { Component } from 'react';
import './App.css';
import { Provider } from './context';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';

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
