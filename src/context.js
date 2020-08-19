import React, { Component } from 'react';
export const Context = React.createContext();
export class Provider extends Component {
	state = {
		city: '',
		today: {},
		days: [{}, {}, {}, {}, {}]
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
					today.temp = Math.round(Number(d.consolidated_weather[0].the_temp)*9/5+32);
					today.hightemp = Math.round(Number(d.consolidated_weather[0].max_temp)*9/5+32);
					today.lowtemp = Math.round(Number(d.consolidated_weather[0].min_temp)*9/5+32);
					today.condition = d.consolidated_weather[0].weather_state_name;
					today.icon='https://www.metaweather.com/static/img/weather/png/64/'+d.consolidated_weather[0].weather_state_abbr+'.png';
					this.setState({today})
					console.log(today);

					let days =[];
					for(let i=1; i<=5; i++) {
						let day = {};
						day.date =d.consolidated_weather[i].applicable_date;
						day.hightemp = Math.round(Number(d.consolidated_weather[i].max_temp)*9/5+32);
						day.lowtemp = Math.round(Number(d.consolidated_weather[i].min_temp)*9/5+32);
						day.condition = d.consolidated_weather[i].weather_state_name;
						day.icon='https://www.metaweather.com/static/img/weather/png/64/'+d.consolidated_weather[i].weather_state_abbr+'.png';
						days.push(day);
					}
					this.setState({days});
					console.log(days);
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