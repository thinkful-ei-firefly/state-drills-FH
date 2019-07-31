import React from 'react';

class RouletteGun extends React.Component {
	/*static defaultProps = {
	    bulletInChamber: 8
	  };*/


	state = {
		chamber: null,
		spinningTheChamber: false
	}

	componentDidMount() {
		//this.message = 'spinning the chamber and pulling the trigger!';
		this.message = '';
	}

	handleClick = () => {
		this.setState({
			spinningTheChamber: true
		});
		this.timeout = setTimeout(this.callback, 2000)
	}

	callback = () => {
		this.random = Math.ceil(Math.random() * 8);
		this.setState({
			chamber: this.random,
			spinningTheChamber: false
		})
	}

	/*renderDisplay() {
	    const { chamber, spinningTheChamber } = this.state
	    const { bulletInChamber } = this.props
	    if (spinningTheChamber) {
	      return 'spinning the chamber and pulling the trigger! ...'
	    } else if (chamber === bulletInChamber) {
	      return 'BANG!!!!!'
	    } else {
	      return 'you\'re safe!'
	    }
  	}

  	render(){
		return (
			<div>
			<button onClick={() => this.handleClick()}>Pull the trigger!</button>
			<p>
			{ renderDisplay() }
			</p>
			</div>
			);
	};*/

	render(){
		return (
			<div>
			<button onClick={() => this.handleClick()}>Pull the trigger!</button>
			<p>
			{ this.state.spinningTheChamber ? 'spinning the chamber and pulling the trigger! ...' : this.state.chamber === this.props.bulletInChamber ? 'BANG!!!!' : "you're safe!!" }
			</p>
			</div>
			);
	};

	componentWillUnmount() {
		clearInterval(this.timeout);
	}
}

RouletteGun.defaultProps = {
  bulletInChamber: 8,
}

export default RouletteGun;