import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//
import './navBar.css';

//
import { navItems } from './map';

export default function NavBar() {
	return (
		<header className='navBar'>
			<div>
				<div>
					<Link to='/'>
						<h1 className='logo'>Calculate</h1>
					</Link>
				</div>
			</div>
			<nav>
				<ul className='categoryNav'>
					{navItems.map((category, index) => {
						return (
							<li className='catItem' key={index}>
								{category.categoryName}
								<ul className='subNav'>
									{category.items.map((eachItem, index) => {
										return (
											<Link to={eachItem.ref} key={index}>
												<li className='subNavItem'>{eachItem.calcName}</li>
											</Link>
										);
									})}
								</ul>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
}
