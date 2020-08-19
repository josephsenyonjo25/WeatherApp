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
                <OneDay id ="1" />
                <OneDay id ="2" />
                <OneDay id ="3" />
                <OneDay id ="4" />
                <OneDay id ="5" />
            </div>
        </div>
      );
   // }
  }


export default FiveDay;
