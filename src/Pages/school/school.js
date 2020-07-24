import React, {Component} from 'react';
import MaterialIcon from 'material-icons-react';
import '../../Common.css';

import ClickList from '../../Components/clicklist/clicklist.js';
import data from './school.json';

class School extends Component {
	competences() {
		document.getElementById('competences').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
	}

	hobbies() {
		document.getElementById('hobbies').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
	}

	render() {
		return <div className='container' id='diplome'>
			<div className='container-left centered'>
				<div className='card-long'>
					<div className='card-container-3-col'>
						<div>
							<h1 className='title'>2016</h1>
							<h3>BAC STI2D (Mention Bien)</h3>
							<p>{data.years[0].description}</p>
						</div>	
						<div>
							<h1 className='title'>2017</h1>
							<h3>Permis B</h3>
							<p>{data.years[1].description}</p>
						</div>
						<div>
							<h1 className='title'>Actuellement-2022</h1>
							<h3>SUPINFO International University</h3>
							<p>{data.years[2].description}</p>
						</div>
					</div>
				</div>
			</div>
		<div className='container-right'>
				<br/>
				<button onClick={this.competences}><MaterialIcon icon='architecture'/>Compétences</button>
				<div className='center-right'>	
					<h1 className='title text-underlined'>Diplômes :</h1>
					<p>Durant ces dernières années j'ai acquis des compétences et des diplômes.</p>
					<p className='title'>Actuellement je me dirige vers un diplôme en 5 années (Master) à Supinfo International University</p>
				</div>
				<div className='bottom-right'>
					<button onClick={this.hobbies}><MaterialIcon icon='star'/>Centres d'intérêts</button>
				</div>
			</div>
		</div>
	}
}

export default School;

