import React, {useContext} from 'react';
import {Context} from '../context';

function OneDay() {
    const data = useContext(Context);
    //render() { 
      return (
        <div className="OneDay"> 
           <p className = "day">Day</p>
           <p className = "date">Currently</p>
           <p className = "high">High: {data.state.today.hightemp}&deg;</p>
           <p className = "low">Low: {data.state.today.lowtemp}&deg;</p>
           <img src ={data.state.today.icon} alt={data.state.today.condition} className = "icon" />
           <p className = "condition">{data.state.today.condition}</p>
        </div>
      );
    //}
  }


export default OneDay;
