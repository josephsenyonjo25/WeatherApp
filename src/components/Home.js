import React, {Component} from 'react';

class Home extends Component {
    render() { 
      return (
        <div className="Home"> 
          <p>Enter a city in the textbox above.</p>
          <p>Click on 'Today' for the current temperature and weather conditions.</p>
          <p>Click on '5-Day' for the 5 day extended forecast.</p> 
          
        </div>
      );
    }
  }


export default Home;
