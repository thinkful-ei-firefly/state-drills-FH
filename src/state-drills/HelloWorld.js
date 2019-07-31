import React from 'react';

class HelloWord extends React.Component{
	state = {
		who: 'world'
	};

	handleClick = (name) => {
		this.setState({
			who: name
		});
	}

	render(){
		return(
				<div>
				<button onClick={() => this.handleClick('World')} >World</button>
				<button onClick={() => this.handleClick('Friend')} >Friend</button>
				<button onClick={() => this.handleClick('React')} >React</button>
				<p>Hello, {this.state.who}!</p>
				</div>
			)
	}
}

export default HelloWord;