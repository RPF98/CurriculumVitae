import React, {Component} from 'react';
import './main.css';
import MaterialIcon, {colorPalette} from 'material-icons-react';

/*
*	importing profile picture
* */
import profile_picture from './img/profil_picture.jpg';

class Presentation extends Component {
	render() {
		return <div className='container'>
			<div className='container-left'>
				<img src={profile_picture}/>
			</div>
			<div className='container-right'>
				<div class='center-right'>
					<h1 className='title'>Rissel Pierre-François</h1>
					<p className='detail'>Je m'appelle Pierre François Rissel je suis actuelement en 3éme année à <a href='https://www.supinfo.com/'>SUPINFO internationnal Univertity</a>, me préparant vers le secteur de l'informatique (programmation, conception de systemes informatique)</p>
					<p className='listenning'><span className='bolded'>Actuellement je suis à la recherche :</span><br/> D'un stage / Contrat de professionalistation</p>

				</div>
				<div className='bottom-right'>
					<button><MaterialIcon icon='arrow_downward'/> Next</button>
				</div>
			</div>
		</div>
	}
}

export default Presentation;

