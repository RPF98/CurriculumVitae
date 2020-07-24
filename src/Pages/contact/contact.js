import React, {Component} from 'react';
import '../../Common.css';
import MaterialIcon from 'material-icons-react';

class Contact extends Component {
	experience() {
		document.getElementById('experience').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
	}

	render () {
		return <div className='container'>
			<div className='container-left'>
				<div className='split-2-h' id='contact'>
					<div className='centered'>
						<div className='line'>
							<h3 className='title'>Je suis actuellement à la recherche de :</h3>
							<ul>
								<li>Stage</li>
								<li>Contrat de professionnalisation</li>
							</ul>
						</div>
					</div>
					<div className='centered-column'>
						<h2 className='text-underlined title'>Interessé par mon profil ? N'hésitez pas à me contacter</h2>

						<div className='card-line'>
							<img src={process.env.PUBLIC_URL + '/contact_img/linkedin.png'}/>
							Linkedin : <a href='https://www.linkedin.com/in/pierre-fran%C3%A7ois-rissel-b1a948155/'>Pierre-François Rissel</a>
						</div>
						<div className='card-line'>
							<img src={process.env.PUBLIC_URL + '/contact_img/mail.png'}/>
							Mail : 287854@supinfo.com
						</div>
						<div className='card-line'>
							<img src={process.env.PUBLIC_URL + '/contact_img/github.svg'}/>
							<a href='https://github.com/RPF98'>RPF98</a>
						</div>
					</div>
				</div>
			</div>
			<div className='container-right align-column'>
				<br/>
				<button onClick={this.experience}><MaterialIcon icon='science'/>Expériences</button>
				<h1 className='title text-underlined'>Contact :</h1>	
				<p>Si vous avez des questions, des offres de stages/ contrat de professionnalisation, contactez-moi</p>
			</div>
		</div>
	}
}

export default Contact;

