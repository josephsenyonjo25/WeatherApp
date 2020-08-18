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
                <p className = "current">&deg;</p>
                <p className = "high">High: &deg;</p>
                <p className = "low">Low: &deg;</p>
                <img src ="" alt="" className = "icon" />
                <p className = "condition"></p>
            </div>
        </div>
      );
    //}
  }


export default Today;
