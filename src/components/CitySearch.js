import React, {Component} from 'react';
import '../App.css';


class CitySearch extends Component {
    render() { /*add logo*/
      return (
        <div className="CitySearch"> 
            <form>
                <label>City</label>
                <input type ="text" />
            </form>

        </div>
      );
    }
  }


export default CitySearch;
