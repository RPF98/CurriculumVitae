import React, {Component} from 'react';
import MaterialIcon from 'material-icons-react';
import '../../Common.css';

import Card from '../../Components/card/card.js';
import data from './hobbies.json';

class Hobbies extends Component {
	contact() {
		document.getElementById('contact').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
	}

	diplome() {
		document.getElementById('diplome').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
	}

	render() {
		let cards = [];

		data.hobbies.forEach(e => {
			cards.push(<Card img={process.env.PUBLIC_URL + `hobbies_img/${e.img}`} title={e.name} description={e.description}/>)
		});
		
		return <div className='container' id='hobbies'>
			<div className='container-left'>
					<div className='split-4'>
						{cards}	
					</div>
				
			</div>
			<div className='container-right'>
				<br/>
				<br/>
				<button onClick={this.diplome}><MaterialIcon icon='card_travel'/>Diplomes</button>
				<div className='center-right'>
					<h1 className='title text-underlined'>Centres d'interêts :</h1>
					<p>J'ai aussi d'autres centres d'intérets comme les jeux vidéos, les mangas/animations, ...</p>
				</div>
				<div className='bottom-right'>
					<button onClick={this.contact}><MaterialIcon icon='contacts'/>Contact</button>
				</div>
			</div>
		</div>
	}
}

export default Hobbies;

