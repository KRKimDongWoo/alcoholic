import React, { Component } from 'react';
import './Game.css';

class TruthGame extends Component {
	state = {
		title: '',

		first: '',
		second: '',
		third: '',

		counter: 0,
	}

  componentDidMount() {
		this.interval = setInterval(this.doRandom, 100)
	}	
	
	componentWillUnmount() {
		clearInterval(this.interval)
	}

  doRandom = () => {
    if(this.state.counter < 10) {
			this.setState({
				first: this.props.first[
				Math.floor(Math.random()*this.props.first.length)]})
    }
    else if(this.state.counter < 20) {
			this.setState({
				second: this.props.second[
				Math.floor(Math.random()*this.props.second.length)]})
    }
    else if(this.state.counter < 30) {
			this.setState({
				third: this.props.third[
				Math.floor(Math.random()*this.props.third.length)]})
    }
    this.setState(prevState => {
       return {counter: prevState.counter + 1}})
  }

  render() {
    return (
			<div className="game">
				<div className="game-header">
					<h1>
						{this.props.title}
					</h1>
				</div>
				<div className="game-body">
          <div className="game-sentence">
            <p className="game-text">
              [{this.state.first}]
            </p>
            <p className="game-text">
              [{this.state.second}] 
            </p>
            <p className="game-text">
             물어본다.
            </p>
					</div>
					{(this.props.alcohol) ? (
	          <div className="game-sentence">
		          <p className="game-text">
			          술은
				      </p>
					    <p className="game-text">
						    [{this.state.third}] 
							</p>
					    <p className="game-text">
						    마신다
	            </p>
		        </div>
					) : (
						null
					)}
				</div>
				<button className="game-button" 
					onClick={(e) => this.setState({counter: 0})}>
					돌리기
				</button>
				<button className="game-button" 
					onClick={this.props.onSetting}
					style={{background: '#3333ff'}}>
					수정하기
				</button>
			</div>
    );
  }
}

export default TruthGame;
