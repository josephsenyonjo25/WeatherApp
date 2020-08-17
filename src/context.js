import React, { Component } from 'react';
export const Context = React.createContext();
export class Provider extends Component {
	state = {
		data: ['testing', 1, 2, 3],
		city: ''
	}
    componentDidMount() {
        /*fetch('api ...')
        .then(res => res.json())
		.then(data => this.setState({data}))*/
		this.getData();
    }
        exampleContextMethod =() => alert('this is a method in the context!!')

	getData =()=>{
		fetch('api ...')
        .then(res => res.json())
        .then(data => this.setState({data}))
	}

	updateCity =(city) =>this.setState({city});

	render() {

	  let { state, updateCity, getData, exampleContextMethod } =this;

		return(
		  <Context.Provider value ={{state, updateCity, getData, exampleContextMethod}}>
			{this.props.children}
		  </Context.Provider>
		)
	}		
}

export const Consumer = Context.Consumer;