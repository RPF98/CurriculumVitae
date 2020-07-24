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
				<h1 className='title'>Veuillez sélectionner une compétence parmi celles proposées.</h1>
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

	diplomes() {
		document.getElementById('diplome').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
	}

	presentation() {
		document.getElementById('presentation').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
	}

	render() {
		let menu = data.data.map(data => {
			if (data.name !== this.state.selected)
				return <SkillItem key={data.name} name={data.name} img={data.img_src} change={this.changeCard} type={data.type} active={false}/>

			return <SkillItem key={data.name} name={data.name} img={data.img_src} change={this.changeCard} type={data.type} active={true}/>
		});
		
		return <div className='container' id='competences'>
			<div className='container-left centered'>
				{this.state.card}
			</div>
			<div className='container-right'>
				<br/>
				<button onClick={this.presentation}><MaterialIcon icon='person'/> Présentation</button>
				<div className='center-right'>
					<h1 className='text-underlined title'>Mes Compétences :</h1>
					<div>
						{menu}
					</div>

				</div>	
				<div className='bottom-right'>
					<button onClick={this.diplomes}><MaterialIcon icon='card_travel'/>Diplômes</button>
				</div>
			</div>
		</div>
	}
}

export default Skills;

