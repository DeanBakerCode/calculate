import React from 'react';
import './home.css';
import heroPic from '../../assets/original.jpg';
export default function Home() {
	return (
		<div className='home'>
			<div className='home_hero'>
				<div>
					<h2 className='home_hero_Banner'>
						Your
						<br /> calculations <br /> like <em>easy as!</em>
					</h2>
					<h2 className='home_hero_Banner-support'>
						Tools that will enable you to make good decisions at work and home. <br /> New calculators are being added all the time.
					</h2>
				</div>
				<div className='home_hero_img'>
					<img src={heroPic} alt='' />
				</div>
			</div>
		</div>
	);
}
