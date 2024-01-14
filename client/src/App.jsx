import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import LoginUser from './pages/LoginUser.jsx';
import RegisterUser from './pages/RegisterUser.jsx';

export default function App() {
	const [loggedIn, setLoggedIn] = useState([]);
	return (
		<main>
			<Router>
				<Routes>
					<Route path='/home' element={<Home loggedIn={loggedIn} />} />
					<Route
						path='/register'
						element={<RegisterUser setLoggedIn={setLoggedIn} />}
					/>
					<Route path='/' element={<LoginUser setLoggedIn={setLoggedIn} />} />
				</Routes>
			</Router>
		</main>
	);
}
