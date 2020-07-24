import React, {Component} from 'react';
import MaterialIcon from 'material-icons-react';
import '../../Common.css';

class Experience extends Component {
	contact() {
		document.getElementById('contact').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
	}

	hobbies() {
		document.getElementById('hobbies').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
	}

	render() {
		return <div className='container' id='experience'>
			<div className='container-left centered-column'>
				<br/>	
				<div className='fat-line'>
					<img src={process.env.PUBLIC_URL + 'experience_img/solocal.png'}/>
					<h4 className='title'>2019 (4 mois)</h4>
					<p>Mise en place d'une suite ELK afin de visualiser des Logs provenant d'un site E-Commerce</p>
				</div>
				<div className='fat-line'>
					<p>Optimisation et refonte d'une application de gestion de frais ( outils utilisés : PHP/SQL/HTML/CSS/JS)</p>
					<h4 className='title'>2018 (2 mois)</h4>
					<img src={process.env.PUBLIC_URL + 'experience_img/avem.jpeg'}/>
				</div>	
				<div className='fat-line'>
					<img src={process.env.PUBLIC_URL + 'experience_img/matines.png'}/>
					<h4 className='title'>2017 (2 mois)</h4>
					<p>Travail d'été chez Matines. J'y ai effectué un travail de manutention (nettoyage)</p>
				</div>
			</div>
			<div className='container-right'>
				<br/>
				<button onClick={this.hobbies}><MaterialIcon icon='star'/>Centre d'intérêts</button>
				<div className='center-right'>
					<h1 className='title text-underlined'>Expériences :</h1>	
					<p>Durant ma formation, j'ai eu l'occasion de réaliser des stages, mais j'ai aussi pu travailler dans une usine (Matines)</p>
				</div>
				<div className='bottom-right'>
					<button onClick={this.contact}><MaterialIcon icon='contacts'/>Contact</button>
				</div>
			</div>
		</div>
	}
}

export default Experience;

