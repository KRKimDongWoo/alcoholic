import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom'

import Header from './component/menu/Header'
import Footer from './component/menu/Footer'
import MainMenu from './component/menu/MainMenu'
import DrinkingPage from './component/game/DrinkingPage'
import TruthPage from './component/game/TruthPage'
import './App.css';


class App extends Component {

	render() {
    return (
			<div className="App">
				<BrowserRouter>
					<Header className="App-header"/>
					<div className="App-body">
						<Switch>
							<Route exact path="/truth" component={() => {return (<TruthPage alcohol={true}/>)}} />
							<Route exact path="/alcohol-free-truth" component={() => {return (<TruthPage alcohol={false}/>)}} />
							<Route exact path="/drinking" component={DrinkingPage} />
							<Route component={MainMenu} />
						</Switch>
					</div>
					<Footer className="App-footer"/>
				</BrowserRouter>
      </div>
    );
  }
}

export default App;

