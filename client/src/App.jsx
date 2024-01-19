import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import LoginUser from './pages/LoginUser.jsx';
import RegisterUser from './pages/RegisterUser.jsx';
import LandingPage from './pages/Landing.jsx';

export default function App() {
	const [loggedIn, setLoggedIn] = useState([]);
	return (
		<main>
			<Router>
				<Routes>
					<Route path='/' element={<LandingPage setLoggedIn={setLoggedIn} />} />
					<Route path='/register' element={<RegisterUser />} />
					<Route
						path='/login'
						element={<LoginUser setLoggedIn={setLoggedIn} />}
					/>
					<Route path='/home' element={<Home loggedIn={loggedIn} />} />
				</Routes>
			</Router>
		</main>
	);
}
