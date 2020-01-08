import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
	render() {
		return(
			<div className='footer'>
				<p className='footer-content'>
					<strong> 음주가무 </strong> for drinking
				</p>
				<p className='footer-content'>
					본 웹페이지는 컴퓨터공학부 김동우가 술 마시려고 만든 웹페이지로, 언론정보학과 조예은 양과 화학생물공학부 이기범 군의 재촉으로 완성되었습니다.
				</p>
				<p className='footer-content'>
					source code not available yet.
				</p>
			</div>
		)
	}
}

export default Footer
