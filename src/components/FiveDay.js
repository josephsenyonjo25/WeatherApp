import React, {Component} from 'react';
import OneDay from './OneDay';


class FiveDay extends Component {
    render() { 
      return (
        <div className="FiveDay"> 
            <h2>5-Day Forecast</h2>
            <div id ="days">
                <OneDay />
                <OneDay />
                <OneDay />
                <OneDay />
                <OneDay />
            </div>
        </div>
      );
    }
  }


export default FiveDay;
