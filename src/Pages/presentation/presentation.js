import React, {Component} from 'react';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import '../../Common.css';

/*
*	importing profile picture
* */
import profile_picture from './img/profil_picture.jpg';

class Presentation extends Component {
	competences() {
		document.getElementById('competences').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
	}

	render() {
		return <div className='container' id='presentation'>
			<div className='container-left'>
				<img src={profile_picture}/>
			</div>
			<div className='container-right'>
				<div className='center-right'>
					<h1 className='title'>Rissel Pierre-François</h1>
					<p className='detail'>Je m'appelle Pierre François Rissel. Je suis actuellement en 3ème année à <a href='https://www.supinfo.com/'>SUPINFO international University</a>, pour me permettre d'évoluer dans le secteur de l'informatique (programmation, conception de systèmes informatiques ...)</p>
					<p className='listenning'><span className='bolded'>Actuellement je suis à la recherche :</span><br/> D'un stage et/ou Contrat de professionnalisation</p>

				</div>
				<div className='bottom-right'>
					<button onClick={this.competences}><MaterialIcon icon='architecture'/> Compétences</button>
				</div>
			</div>
		</div>
	}
}

export default Presentation;

