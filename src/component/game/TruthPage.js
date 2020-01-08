import React, { Component } from 'react';

import TruthGame from './TruthGame'
import TruthSetting from './TruthSetting'

class TruthPage extends Component {
	state = {
		title: '',
		first: [''],
		second: [''],
		third: [''],

		setting: true
	}

	onStart = () => {
		this.setState((prevState) => {
			return {setting: !prevState.setting}})
	}

	onChange = (states) => {
		this.setState((prevState) => {
			return {...prevState, ...states}})
	}

	onSetting = () => {
		this.setState((prevState) => {
			return {setting: !prevState.setting}})
	}

	render() {
		return (
			<div className="page">
				{(this.state.setting) ? (
					<TruthSetting 
						onStart={this.onStart}
						onChange={this.onChange}
						title={this.state.title}
						first={this.state.first}
						second={this.state.second}
						third={this.state.third}
						alcohol={this.props.alcohol}
					/>
				) : (
					<TruthGame 
						onSetting={this.onSetting}
						title={this.state.title}
						first={this.state.first}
						second={this.state.second}
						third={this.state.third}
						alcohol={this.props.alcohol}
					/>
				)}
			</div>
		)
	}
}

export default TruthPage
