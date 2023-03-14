import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import {createBrowserRouter, RouterProvider, Route, Link} from 'react-router-dom';
import App from './App';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/pokemon',
		element: <App />,
	},
	{
		path: 'about',
		element: <div>About</div>,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
