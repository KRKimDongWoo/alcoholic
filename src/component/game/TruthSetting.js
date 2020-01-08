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
							{(this.props.alcohol)
									? '[질문자] [답변자] 물어본다. 술은 [음주자] 마신다.'
									: '[질문자] [답변자] 물어본다.'
							}
						</p>
						<p>
							{(this.props.alcohol)
									? '[내가] [왼쪽 사람에게] 물어본다. 술은 [답변자 빼고] 마신다.'
									: '[내가] [왼쪽 사람에게] 물어본다.'
							}
						</p>
					</div>
					<div className="setting-body-select">	
						<InputListCard 
							title='질문자'
							onChange={(state) => this.props.onChange({first: state})}
							value={this.props.first}
						/>
						<InputListCard 
							title='답변자'
							onChange={(state) => this.props.onChange({second: state})}
							value={this.props.second}
						/>
						{(this.props.alcohol) ? (
							<InputListCard 
								title='음주자'
								onChange={(state) => this.props.onChange({third: state})}
								value={this.props.third}
							/>
							) : null
						}
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
