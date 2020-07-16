import React, {Component} from 'react';
import './main.css';
import '../../Common.css'

class ClickList extends Component {
	render() {
		const onclk = el => {
			console.log(el);
			this.props.change(<div className='card'></div>);
			setTimeout(() => this.props.change(React.createElement(this.props.model, {data: this.props.data[parseInt(el)]})), 10);	
		}

		const el = this.props.children.map(child => {
			return React.cloneElement(child, { onClick: e => {
				if (e.target.tagName === 'I')
				{
					return onclk(e.target.parentNode.getAttribute('data'))
				}
				
				else {
					return onclk(e.target.getAttribute('data'))
				}
			}});
		})
		console.log(this.props);
		return <div className='clicklist'>
			{el}
		</div>
	}
}

export default ClickList;

