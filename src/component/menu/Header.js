import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends Component {
	render() {
		return (
			<nav className="header">
				<div className="spacer">
				</div>
				<div className="header-title">
					<h1>
						음주가무
					</h1>
				</div>
				<div className="spacer" style={{justifyContent: 'flex-end'}}>
					<Link to='/' className="header-link">
						홈으로
					</Link>
				</div>
			</nav>
		)
	}
}

export default Header
