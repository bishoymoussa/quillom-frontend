import React, { Component } from 'react';

import './Title.css';
import quilloIcon from '../../images/quillo.png'
class Title extends Component {
	constructor(props) {
		super(props);
		this.state = {
			postreq: '',
			postres: ''
		}
	}

	render() {
		return (
			<div className="title">
				<div className="main-title card-panel blue lighten-3 center">
					<div className='quillo-icon'>
					<img src={quilloIcon} ></img>
					</div>
					<h3 className="center"><b>Create Your Own Custom Font</b></h3>
					<h5 className="center">A Handwritten Font Will be Generated From a Single Drawn Character</h5>
				</div>
				<div className="title-sub">
					
				</div>
			</div>
		)
	}
}

export default Title