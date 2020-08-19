import React, {useContext} from 'react';
import {Context} from '../context';

function OneDay(props) {
    const data = useContext(Context);
    let id = Number(props.id)-1;
    let month = '';
    let day = '';
    let monthNames =['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if(data.state.city){
        console.log(data.state.days[id].date);
    let date = data.state.days[id].date.split('-');
    month = monthNames[Number(date[1]) -1];
    day = date[2];
    }
    //render() { 
      return (
        <div className="OneDay"> 
           <p className = "day">Day</p>
           <p className = "date">{month} {day}</p>
           <p className = "high">High: {data.state.days[id].hightemp}&deg;</p>
           <p className = "low">Low: {data.state.days[id].lowtemp}&deg;</p>
           <img src ={data.state.days[id].icon} alt={data.state.days[id].condition} className = "icon" />
           <p className = "condition">{data.state.days[id].condition}</p>
        </div>
      );
    //}
  }


export default OneDay;
