import { useRouteError } from 'react-router-dom';
import NavBar from '../components/nav/NavBar';
import './root.css';

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<div id='error-page'>
			<NavBar />
			<div className='errorPage'>
				<h1>Uh Oh!</h1>
				<h3>Sorry, an unexpected error has occurred.</h3>
				<p>
					<i>{error.statusText || error.message}</i>
				</p>
			</div>
		</div>
	);
}
