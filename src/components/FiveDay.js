import React, {useContext} from 'react';
import {Context} from '../context';
import OneDay from './OneDay';


function FiveDay() {
    const data = useContext(Context);
    //render() { 
      return (
        <div className="FiveDay"> 
            <h2>5-Day Forecast for {data.state.city}</h2>
            <div id ="days">
                <OneDay />
                <OneDay />
                <OneDay />
                <OneDay />
                <OneDay />
            </div>
        </div>
      );
   // }
  }


export default FiveDay;
