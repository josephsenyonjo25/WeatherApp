import React, {Component} from 'react';
import '../App.css';


class CitySearch extends Component {
    render() { /*add logo*/
      return (
        <div className="CitySearch">
            <h3>Find Weather Information</h3> 
            <form>
                <label>City</label>
                <input type ="text" placeholder="Enter city here"/>
                <button type ="submit">Get Forecast</button>
            </form>

        </div>
      );
    }
  }


export default CitySearch;
