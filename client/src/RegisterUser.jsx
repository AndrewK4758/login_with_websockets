import axios from 'axios';
import bcrypt from 'bcryptjs';
import Banner from './components/Bannerer.jsx';
import Form from './Form.jsx';
import { Player } from '../../project/src/player.js';
import './App.css';

export default function RegisterUser({
	salt,
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

		const hashPassword = bcrypt.hashSync(password, salt);

		if (!formValidator(email, password, playerName)) {
			alert(
				'Player Name must be 2-32 letters or numbers. Email must be valid. Password is minimum of 8 characters'
			);
		} else {
			const user = {
				player: new Player(playerName),
				email: email,
				password: hashPassword,
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
