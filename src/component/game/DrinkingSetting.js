import React, { Component } from 'react';
import './Setting.css'

import { InputListCard } from '../molecules/InputComponents'

class DrinkingSetting extends Component {
	state = {
		title: '',
		first: [],
		second: [],
		third: []
	}

	componentDidMount() {
		this.setState({
			title: this.props.title,
			first: this.props.first,
			second: this.props.second,
			third: this.props.third
		})
	}


	handleOnClick = (e) => {
		e.preventDefault();
		this.props.onStart();
	}

	render() {
		return (
			<div className="setting">
				<div className="setting-header">
					<h1>
						제목
					</h1>
					<input value={this.props.title}
						onChange={(e)=>this.props.onChange({title: e.target.value})}
					/>
				</div>	
				<div className="setting-body">
					<div className="setting-body-explanation">
						<p> 
							[주어] [목적어] [수식어] 마신다.
						</p>
						<p>
							ex) [내가] [소맥을] [두 잔] 마신다.
						</p>
					</div>
					<div className="setting-body-select">	
						<InputListCard 
							title='주어'
							onChange={(state) => this.props.onChange({first: state})}
							value={this.props.first}
						/>
						<InputListCard 
							title='목적어'
							onChange={(state) => this.props.onChange({second: state})}
							value={this.props.second}
						/>
						<InputListCard 
							title='수식어'
							onChange={(state) => this.props.onChange({third: state})}
							value={this.props.third}
						/>
					</div>
					<button className="setting-button" 
						onClick={this.handleOnClick}>
						시작하기
					</button>
				</div>
			</div>
		)
	}
}

export default DrinkingSetting 
