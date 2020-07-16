import React, {Component} from 'react';
import './main.css';
import '../../Common.css';

class SkillItem extends Component {
	onClick(props) {
		props.change(this.props.name);
	}

	render() {
		let badge = <p className='badge bdg-green'>Compétence</p>

		if (this.props.type === 'software')
			badge = <p className='badge bdg-blue'>Logiciel</p>

		return <div className={`skillitem ${(this.props.active === true) ? 'active' : ''}`} onClick={() => this.onClick(this.props)}>
			<img src={process.env.PUBLIC_URL + this.props.img}/>
			<p className='normal skilltitle'>{this.props.name}</p>
			{badge}
		</div>
	}	
}

export default SkillItem;

