import React, {Component} from 'react';
import '../../Common.css';

/*
 * import skill component
*/
import Skill from '../../Components/skill/skill.js';

/*
 * Import menu component
*/
import Menu from '../../Components/menu/menu.js';

/*
 * Import sill item
 */
import SkillItem from '../../Components/skillitem/skillitem.js';
import MaterialIcon from 'material-icons-react';

import data from './skills.json';

class Skills extends Component {
	constructor(props) {
		super(props);

		this.state = {
			card: <div className='card'>
					<h1 className='title'>Comment Visualiser le détail de mes Compétences ?</h1>
				</div>,
			selected: ''
		}

		this.changeCard = this.changeCard.bind(this);
	}

	changeCard(name) {
		this.setState({
			card: <div className='card'>
			</div>

		});

		setTimeout(() => {
			data.data.forEach(el => {
				if (el.name === name)
					this.setState({
						card: <Skill name={el.name} description={el.description} img={el.img_src}/>,
						selected: el.name
					});
			});
		}, 1);	
	}

	render() {
		let menu = data.data.map(data => {
			if (data.name !== this.state.selected)
				return <SkillItem key={data.name} name={data.name} img={data.img_src} change={this.changeCard} type={data.type} active={false}/>

			return <SkillItem key={data.name} name={data.name} img={data.img_src} change={this.changeCard} type={data.type} active={true}/>
		});
		
		return <div className='container'>
			<div className='container-left centered'>
				{this.state.card}
			</div>
			<div className='container-right align-column'>
				<br/>
				<button><MaterialIcon icon='arrow_upward'/> Présentation</button>
				<h1 className='text-underlined title'>Mes Compétences :</h1>
				<div>
					{menu}
				</div>
			</div>
		</div>
	}
}

export default Skills;

