import React, {useContext} from 'react';
import {Context} from '../context';

function Today() {
    const data = useContext(Context);
    //render() { 
      return (
        <div className="Today"> 
            <h2>Today's Forecast for {data.state.city}</h2>
            <div id = "today">
                <p className = "date">Currently</p>
                <p className = "current">{data.state.today.temp}&deg;</p>
                <p className = "high">High: {data.state.today.hightemp}&deg;</p>
                <p className = "low">Low: {data.state.today.lowtemp}&deg;</p>
                <img src ={data.state.today.icon} alt={data.state.today.condition} className = "icon" />
                <p className = "condition">{data.state.today.condition}</p>
            </div>
        </div>
      );
    //}
  }


export default Today;
