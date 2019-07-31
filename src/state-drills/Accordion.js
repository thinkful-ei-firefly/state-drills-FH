import React from 'react';
import './Accordion.css'

class Accordion extends React.Component {

	state = {
		itemSelected: ''
	}

	componentDidMount() {} // Called after component mounts

	changeSelectedAccordion(title){
		this.setState({
			itemSelected: title
		});
	}

	renderSections(){
		return this.props.sections.map(section => {
			return <li><button onClick={() => this.changeSelectedAccordion(section.title)}>{section.title}</button>
				{section.title===this.state.itemSelected ? <p> {section.content} </p> : ""}
			</li>;
		});
	}

    render() {
        return (
        	<ul>
        		{this.props.sections && this.renderSections()}
        	</ul>
        	);
    }

    componentDidUpdate() {} // Called after each render

    componentWillUnmount() {}
}

export default Accordion;