import React, {Component} from 'react';
import MaterialIcon from 'material-icons-react';
import './main.css';

class Menu extends Component {
	render() {
		return <div className='menu-container title'>
			<div className='menu-item'>
				<MaterialIcon icon='account_box'/>
				Présentation
			</div>	
			<div className='menu-item title'>
				<MaterialIcon icon='emoji_objects'/>
				Compétences
			</div>	
			<div className='menu-item title'>
				<MaterialIcon icon='school'/>
				Formations
			</div>	
		</div>
	}
}

export default Menu;

