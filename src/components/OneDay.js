import React, {useContext} from 'react';
import {Context} from '../context';

function OneDay(props) {
    const data = useContext(Context);
    let id = Number(props.id)-1;
    //render() { 
      return (
        <div className="OneDay"> 
           <p className = "day">Day</p>
           <p className = "date">Currently</p>
           <p className = "high">High: {data.state.days[id].hightemp}&deg;</p>
           <p className = "low">Low: {data.state.days[id].lowtemp}&deg;</p>
           <img src ={data.state.days[id].icon} alt={data.state.days[id].condition} className = "icon" />
           <p className = "condition">{data.state.days[id].condition}</p>
        </div>
      );
    //}
  }


export default OneDay;
