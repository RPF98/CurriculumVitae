import React, {Component} from 'react';
import MaterialIcon from 'material-icons-react';
import '../../Common.css';

import ClickList from '../../Components/clicklist/clicklist.js';
import data from './school.json';

class DegreeDisplay extends Component {
	render() {
		console.log(data);
		return <div className='card appear-anim'>
			<h1>Diplome Acquis : {this.props.data.degree}</h1>
			<h3>Date d'acquisition : {this.props.data.year}</h3>
			<p>{this.props.data.description}</p>
		</div>
	}
}

class School extends Component {
	constructor(props)
	{
		super(props);

		this.state = {
			card: <div>
				<h1 className='title'>test</h1>
			</div>
		}

		this.changeCard = this.changeCard.bind(this);
	}

	changeCard(card) {
		this.setState({
			card: card
		});
	}
	
	render() {
		console.log(data);
		return <div className='container'>
			<div className='container-left centered'>
				{this.state.card}	
			</div>
			<div className='container-right align-column'>
				<br/>
				<button><MaterialIcon icon='arrow_upward'/>Compétences</button>
				<h1 className='title text-underlined'>Formations/Diplomes</h1>
				<ClickList change={this.changeCard} data={data.years} model={DegreeDisplay}>
					<p data='0'><MaterialIcon icon='schedule'/>2016</p>
					<p data='1'><MaterialIcon icon='schedule'/>2017</p>
					<p data='2'><MaterialIcon icon='schedule'/>Actuellement-2022</p>
				</ClickList>
				<p className='title'>Actuellement je me dirige vers un diplome en 5années (Master) à Supinfo International University</p>
			</div>
		</div>
	}
}

export default School;

