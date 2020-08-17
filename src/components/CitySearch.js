import React, {useContext} from 'react';
import '../App.css';
import {Context} from '../context';

function CitySearch(){
    const data = useContext(Context);
    const handleSubmit= () => {
      event.preventDefault();
      data.updateCity(event.target.previousSibling.value);
    }
    //render() { 
      return (
        <div className="CitySearch">
            
            <form>
                <label>Find weather in</label>
                <input type ="text" placeholder="Enter city here"/>
                <button type ="submit" onClick ={handleSubmit}>Get Forecast</button>
            </form>

        </div>
      );
   // }
  }


export default CitySearch;
