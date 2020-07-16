import React, {Component} from 'react';
import './main.css';
import '../../Common.css';

class Skill extends Component {
	render() {
		console.log(this.props);
		let exp = this.props.description.split(';');
		let parts = [];

		exp.map(e => {
			parts.push(<li>{e}</li>)
		});

		return <div className='card appear-anim'>
			<img src={process.env.PUBLIC_URL + this.props.img}/>
			<span className='card-description'>
				<h1>{this.props.name}</h1>
				<ul>{parts}</ul>
			</span>
		</div>
	}
}

export default Skill;

