import { useRef, useState } from 'react';
import './App.css';
import RegisterUser from './RegisterUser.jsx';
import LoginUser from './LoginUser.jsx';

const formValidator = (email, password, playerName) => {
	const regexPlayer = /[a-zA-Z0-9\s]{2,32}/g;
	const regexEmail = /\S+@\S+\.\S+/;
	const regexPassword = /([a-z])|([A-Z]+)|([0-9]+)|([\W]+)/gm;

	if (!regexPlayer.test(playerName)) {
		console.log('player name incorrect');
		return false;
	}

	if (!regexEmail.test(email)) {
		console.log('email incorrect');
		return false;
	}

	if (!regexPassword.test(password)) {
		console.log('password incorrect');
		return false;
	} else return true;
};

export default function App() {
	const email = useRef('');
	const password = useRef('');
	const playerName = useRef('');
	const [register, setRegister] = useState(false);

	return (
		<main>
			{!register && (
				<LoginUser
					email={email}
					password={password}
					formValidator={formValidator}
					setRegister={setRegister}
				/>
			)}
			{register && (
				<RegisterUser
					register={register}
					playerName={playerName}
					email={email}
					password={password}
					setRegister={setRegister}
					formValidator={formValidator}
				/>
			)}
		</main>
	);
}
