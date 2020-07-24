import React, {Component} from 'react';
import '../../Common.css';

class Card extends Component {
	constructor(props) {
		super(props);

		this.state = {
			content: <h1 className='title'>{this.props.title}</h1>,
			hover: false
		}

		this.hover = this.hover.bind(this);
		this.reset = this.reset.bind(this);
	}

	hover() {
		this.setState({
			content: <p className='text-content appear-anim'>{this.props.description}</p>,
			hover: true
		});
	}

	reset() {
		this.setState({
			content: <h1 className='title'>{this.props.title}</h1>,
			hover: false
		});
	}

	render() {
		let img = (this.state.hover) ? <img src={this.props.img} className='gray'/>: <img src={this.props.img}/>
		
		return <div className='card-small' onMouseEnter={this.hover} onMouseLeave={this.reset}>
			{img}
			<div className='content'>
				{this.state.content}
			</div>
		</div>
	}
}

export default Card;

