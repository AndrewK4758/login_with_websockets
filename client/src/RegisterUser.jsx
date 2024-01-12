import axios from 'axios';
import Banner from './components/Bannerer.jsx';
import Form from './Form.jsx';
import { Player } from '../../project/src/player.js';
import './App.css';

export default function RegisterUser({
	register,
	playerName,
	email,
	password,
	setPlayerName,
	setEmail,
	setPassword,
	setRegister,
	formValidator,
}) {
	const handleRegisterSubmit = (e) => {
		e.preventDefault();

		const emailRef = email.current.value;
		const passwordRef = password.current.value;
		const playerNameRef = playerName.current.value;

		if (!formValidator(emailRef, passwordRef, playerNameRef)) {
			alert(
				'Player name must be 2 - 32 letters and numbers only.\nEmail must be valid.\n Password must be minimum 8 characters; consisting of minumum: 1 Uppercase letter, 1 number, and 1 special character.'
			);
		} else {
			const user = {
				player: new Player(playerNameRef),
				email: emailRef,
				password: passwordRef,
			};

			axios
				.post('https://127.0.0.1:4443/api/v1/register', user)
				.then((res) => {
					console.log(res.data);
					setRegister(!register);
				})
				.catch((err) => {
					const message = err.response.data;
					alert(message);
					console.log(err);
					setRegister(!register);
				});
		}
	};
	return (
		<div>
			<Banner
				className={'header'}
				title={'Welcome'}
				message={'Register to enter'}
			/>
			<Form
				register={register}
				playerName={playerName}
				email={email}
				password={password}
				setPlayerName={setPlayerName}
				setPassword={setPassword}
				setEmail={setEmail}
				handleSubmit={handleRegisterSubmit}
			/>
		</div>
	);
}
