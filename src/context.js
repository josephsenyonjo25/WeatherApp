import React, { component } from 'react';
export const Context = React.createContext();
export class Provider extends Component {
	state = {
		data: ['testing', 1, 2, 3]

	}
    ComponentDidMount() {
        fetch('api ...')
        .then(res => res.json())
        .then(data => this.setState({data}))
    }
        exampleContextMethod =() => alert('this is a method in the context!!')


	render() {

	  let { state, exampleContextMethod } =this

		return(
		  <Context.Provider value ={{state, exampleContext}}>
			{this.props.children}
		  </Context.Provider>
		)
	}		
}

export const Consumer = Context.Consumer;