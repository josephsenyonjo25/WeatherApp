import React, { Component } from 'react';
export const Context = React.createContext();
export class Provider extends Component {
	state = {
		city: '',
		today: {}
	}
    componentDidMount() {
		
	}
      
	getData =(city)=>{
		fetch('https://www.metaweather.com/api/location/search/?query='+city)
        .then(res => res.json())
        .then(async data => {
			if(data[0]){
				this.setState({city: data[0].title})
				await fetch('https://www.metaweather.com/api/location/'+data[0].woeid)
				.then(r=> r.json())
				.then(d=>{
					let today ={};
					today.temp = d.consolidated_weather[0].the_temp;
					today.hightemp = d.consolidated_weather[0].max_temp;
					today.lowtemp = d.consolidated_weather[0].min_temp;
					today.condition = d.consolidated_weather[0].weather_state_name;
					this.setState({today})
					console.log(today);
				})
			}
		});
	}


	render() {

	  let { state, getData } =this;

		return(
		  <Context.Provider value ={{state, getData}}>
			{this.props.children}
		  </Context.Provider>
		)
	}		
}

export const Consumer = Context.Consumer;