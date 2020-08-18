import React, { Component } from 'react';
export const Context = React.createContext();
export class Provider extends Component {
	state = {
		
		city: ''
	}
    componentDidMount() {
		
	}
      
	getData =()=>{
		fetch('https://www.metaweather.com/api/location/search/?query=london')
        .then(res => res.json())
        .then(data => this.setState({data}));
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