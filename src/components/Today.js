import React, {useContext} from 'react';
import {Context} from '../context';

function Today() {
    const data = useContext(Context);
    //render() { 
      return (
        <div className="Today"> 
            <h2>Today's Forecast for {data.state.city}</h2>
        </div>
      );
    //}
  }


export default Today;
