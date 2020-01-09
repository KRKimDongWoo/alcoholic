import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Menu.css'

const quotes = [
	{
		content: '맥주는 건강의 근원이다.',
		from: '독일 속담'
	},
	{
		content: '책은 고통을 주지만 맥주는 우리를 즐겁게 한다. 영원한 것은 맥주 뿐!',
		from: '괴테',
	},
	{
		content: '양조장의 맥주 한 잔과 목숨의 보증서를 손에 넣을 수 있다면 명예같은 건 버려도 괜찮다.',
		from: '윌리엄 셰익스피어',
	},
	{
		content: '맥주는 인간관계의 윤활유 역할을 한다. 그 맛은 쓰지만 마음을 여는데는 묘약이다.',
		from: '후꾸자 유기찌',
	},
	{
		content: '죽은 후 백두성에 닿을 만한 돈을 남기더라도 생전의 한 잔 술만 못하다.',
		from: '백거이/권주',
	},
	{
		content: '술이 내게서 앗아간 것보다 내가 술로부터 얻은 것이 더 많다.',
		from: '윈스턴 처칠',
	},
	{
		content: '진실은 술 속에 있다. 오늘날 진실을 이야기할 기분이 되기 위해서는 취해야 한다.',
		from: '리케르트',
	},
	{
		content: '술 마시는 시간을 낭비하는 시간이라고 생각하지 말라. 그 시간에 당신의 마음은 쉬고 있으니까.',
		from: '탈무드',
	},
	{
		content: '술은 차를 대신할 수 있지만 차는 술을 대신할 수 없다.',
		from: '장조 (중국 문인)',
	},
	{
		content: '술을 마시지 않는 사람에게서 사리분별을 기대하기는 어렵다.',
		from: '키케로',
	},
	{
		content: '한 잔의 술은 재판관보다 더 빨리 분쟁을 해결해준다.',
		from: '에우리피데스',
	},
	{
		content: '3년동안 술을 마셨더니 돈이 없어졌다. 3년동안 술을 안 마셨는데도 돈은 없어졌다.',
		from: '중국의 격언',
	},
	{
		content: '술은 비와 같다. 비가 내리면 진흙은 진창이 되지만, 양질의 토지는 꽃을 피운다.',
		from: '존 헤이 (미국 정치가)',
	},
	{
		content: '나는 술을 마실 때 생각하고, 생각할 때 술을 마신다.',
		from: '프랑수와 러브레이 (프랑스의 작가)',
	},
	{
		content: '술은 지금까지 인간이 만들어낸 것 중 가장 큰 행복을 만들어 내는 것이다.',
		from: '새뮤얼 존슨',
	},
	{
		content: '술이 사람을 취하게 하는 것이 아니라 사람이 스스로 취하는 것이다.',
		from: '명심보감',
	},
	{
		content: '이거 만들다 밤샜다.',
		from: '김동우 (제작자)'
	}
]

const Quote = () => {
	let q = quotes[Math.floor(Math.random()*quotes.length)];
	return (
		<p className="quote">
			{q.content} <br/> <strong> - {q.from} - </strong>
		</p>
	);
}

class MainMenu extends Component {
	state = {
		value: [''],
	}

	render() {
		return (
			<div className='main_menu'>
				<div className='main_menu-header'>
					<h1>
						Choose game
					</h1>
				</div>
				<div className='main_menu-quote'>
					{
						Quote()
					}
				</div>
				<div className='main_menu-body'>
					<ul className='main_menu_select'>
						<li className='main_menu_select-item'>
							<Link to='/drinking' className='main_menu_select-link'>
								음주 슬롯머신
							</Link>
						</li>						
						<li className='main_menu_select-item'>
							<Link to='/dice' className='main_menu_select-link'>
								주사위 (개발중)
							</Link>
						</li>
						<li className='main_menu_select-item'>
							<Link to='/alcohol-free-truth' className='main_menu_select-link'>
								순수한 진실게임
							</Link>
						</li>
						<li className='main_menu_select-item'>
							<Link to='/truth' className='main_menu_select-link'>
								술과 함께하는 진실게임
							</Link>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default MainMenu
