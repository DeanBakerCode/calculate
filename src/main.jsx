import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//component imports
import './index.css';
// import Sales from './routes/index';
import Root from './routes/root';
// import ErrorPage from './routes/error-page';
import { ErrorPage, Sales, Inventory, Home } from './routes';
import { Margin, Discount } from './routes/cat-sales';
import { ReOrderPoint } from './routes/cat-inventory';
// router
const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/sales',
				element: <Sales />,
				children: [
					{
						path: '/sales/margin',
						element: <Margin />,
					},
					{
						path: '/sales/discount',
						element: <Discount />,
					},
				],
			},
			{
				path: '/inventory',
				element: <Inventory />,
				children: [
					{
						path: '/inventory/reorderpoint',
						element: <ReOrderPoint />,
					},
				],
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
