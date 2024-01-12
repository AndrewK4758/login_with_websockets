import axios from 'axios';
import bcrypt from 'bcryptjs';
import Banner from './components/Bannerer.jsx';
import Button from './components/Button.jsx';
import Form from './Form.jsx';
import socket from './socket.io.js';
import './App.css';

export default function LoginUser({
	salt,
	email,
	password,
	setEmail,
	setPassword,
	formValidator,
	setRegister,
}) {
	const handleLoginSubmit = (e) => {
		e.preventDefault();

		const hashPassword = bcrypt.hashSync(password, salt);

		if (!formValidator(email, password))
			alert(
				'Please check login fields. Enter valid email. Password is minimum of 8: characters, 1 upper, 1 special'
			);
		else {
			const user = {
				email: email,
				password: hashPassword,
			};
			console.log(user);

			axios
				.post('https://127.0.0.1:4443/api/v1/login', user)
				.then((res) => {
					const { user_id, player, email, password } = res.data;
					console.log(player.playerName);
					socket.connect();
					socket.on('connect', () => {
						console.log(socket.id);
					});
				})
				.catch((err) => {
					const message = err.response.data;
					alert(message);
					console.log(err);
				});
		}
	};

	return (
		<div>
			<Banner
				className={'header'}
				title={'Welcome'}
				message={'Login to enter'}
			/>
			<Form
				email={email}
				password={password}
				setPassword={setPassword}
				setEmail={setEmail}
				handleSubmit={handleLoginSubmit}
			/>
			<Banner
				className={'header'}
				additional={'If you are a new player, click to register'}
			/>
			<Button
				className='register'
				type={'button'}
				name={'Register'}
				onclick={() => setRegister(true)}
			/>
		</div>
	);
}
