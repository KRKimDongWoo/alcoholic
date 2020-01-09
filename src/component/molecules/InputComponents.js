import React, { Component } from 'react';
import './InputComponents.css'

class InputLine extends Component {
	render() {
		return (
			<div className="input-line">
				<input value={this.props.value} onChange={this.props.onChange}>
				</input>
				<button className="input-button" style={{color: 'green'}}
					onClick={this.props.onAdd}>
					+
				</button>
				<button className="input-button" style={{color: 'red'}}
					onClick={this.props.onDelete}>
					-
				</button>
			</div>
		)
	}
}

export class InputList extends Component {

	addItem = () => {
		this.props.onChange([...this.props.value, ''])
	}

	deleteItem = (index) => (e) => {
		if(this.props.value.length === 1) {
			this.props.onChange([''])
		} else {
			this.props.onChange(
				[...this.props.value.slice(0, index),
					...this.props.value.slice(index + 1, this.props.value.length)])
		}
	}

	changeItem = (index) => (e) => {
		let value = e.target.value
		this.props.onChange(
			[...this.props.value.slice(0, index),
				value,
				...this.props.value.slice(index + 1, this.props.value.length)])
	}

	render() {
		return (
			<div className="input-list">
				{this.props.value.map((data, index) => {
					return (
						<InputLine 
							onAdd={this.addItem}
							onDelete={this.deleteItem(index)}
							onChange={this.changeItem(index)}
							value={this.props.value[index]}
							key={index}
						/>
					)
				})}
			</div>
		)
	}
}

export class InputListCard extends Component {

	render() {
		return (
			<div className="input-list-card">
				<h3>
					{this.props.title}
				</h3>
				<InputList onChange={(state) => this.props.onChange(state)} value={this.props.value}/>
			</div>
		)
	}
}
