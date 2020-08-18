import React, {useContext} from 'react';
import {Context} from '../context';

function Hourly() {
    const data = useContext(Context);
    //render() { 
      return (
        <div className="Hourly"> 
            <h2>Hourly Forecast for {data.state.city}</h2>
          
        </div>
      );
   // }
  }


export default Hourly;
