import React from 'react';
import NavBar from '../components/nav/NavBar';
import { Outlet } from 'react-router-dom';

import './root.css';

export default function Root() {
	return (
		<div className='rrRoot'>
			<NavBar />
			<div id='detail'>
				<Outlet />
			</div>
			<footer></footer>
		</div>
	);
}
