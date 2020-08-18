import React, { Component } from 'react';
export const Context = React.createContext();
export class Provider extends Component {
	state = {
		
		city: ''
	}
    componentDidMount() {
		
	}
      
	getData =(city)=>{
		fetch('https://www.metaweather.com/api/location/search/?query='+city)
        .then(res => res.json())
        .then(data => {
			this.setState({city: data[0].title})
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