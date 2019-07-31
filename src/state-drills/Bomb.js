import React from 'react';

class Bomb extends React.Component {
	//let myInterval;

	state = {
		count: 0,
	}

	componentDidMount() {
		this.message = 'tick';
		this.nIntervId = setInterval(this.changeCount, 1000);
	} 

	changeCount = () => {
		console.log(this.state.count);
		if (this.state.count % 2 === 0){
			this.message = 'tick';
		}else{
			this.message = 'tock';
		}
		if (this.state.count === 8 ){
			this.message = 'BOOM!!!';
			clearInterval(this.nIntervId)
		}
		this.setState({
			count: this.state.count+1
		})
	}

	render(){
		return (
			<div>
				<p>{this.message}</p>
			</div>
			)
	}

	componentWillUnmount() {
		clearInterval(this.nIntervId)
	}

}

export default Bomb;