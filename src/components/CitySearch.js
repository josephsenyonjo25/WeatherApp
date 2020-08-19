import React, {useContext} from 'react';
import '../App.css';
import {Context} from '../context';

function CitySearch(){
    const data = useContext(Context);

    const handleSubmit= (event) => {
      event.preventDefault();
      if(event.target.previousSibling.value){
        data.getData(event.target.previousSibling.value);
      }
    }
      return (
        <div className="CitySearch">
            
            <form>
                <label>Find weather in</label>
                <input type ="text" placeholder="Enter city here"/>
                <button type ="submit" onClick ={handleSubmit}>Get Forecast</button>
            </form>

        </div>
      );
  }


export default CitySearch;
