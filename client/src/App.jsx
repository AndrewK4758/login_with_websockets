import { useState } from 'react';
import './App.css';
import RegisterUser from './RegisterUser.jsx';
import LoginUser from './LoginUser.jsx';

const formValidator = (email, password, playerName) => {
	const regexPlayer = /[a-zA-Z0-9\s]{2,32}/g;
	const regexEmail = /\S+@\S+\.\S+/;
	const regexPassword = /^\d||\w{8,}$/;

	if (!regexEmail.test(email)) return 'Please check email';
	else if (!regexPassword.test(password)) return 'Please check Password';
	else if (!regexPlayer.test(playerName)) return 'Please check Player Name';
	else return true;
};

export default function App() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [playerName, setPlayerName] = useState('');
	const [register, setRegister] = useState(false);

	return (
		<main>
			{!register && (
				<LoginUser
					email={email}
					password={password}
					setEmail={setEmail}
					setPassword={setPassword}
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
					setPlayerName={setPlayerName}
					setEmail={setEmail}
					setPassword={setPassword}
					setRegister={setRegister}
					formValidator={formValidator}
				/>
			)}
		</main>
	);
}
