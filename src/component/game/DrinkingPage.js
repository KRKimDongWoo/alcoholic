import React, { Component } from 'react';

import DrinkingGame from './DrinkingGame'
import DrinkingSetting from './DrinkingSetting'

class DrinkingPage extends Component {
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
					<DrinkingSetting 
						onStart={this.onStart}
						onChange={this.onChange}
						title={this.state.title}
						first={this.state.first}
						second={this.state.second}
						third={this.state.third}
					/>
				) : (
					<DrinkingGame 
						onSetting={this.onSetting}
						title={this.state.title}
						first={this.state.first}
						second={this.state.second}
						third={this.state.third}
					/>
				)}
			</div>
		)
	}
}

export default DrinkingPage
