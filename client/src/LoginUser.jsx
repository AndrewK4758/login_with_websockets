import axios from 'axios';
import Banner from './components/Bannerer.jsx';
import Button from './components/Button.jsx';
import Form from './Form.jsx';
import socket from './socket.io.js';
import './App.css';

export default function LoginUser({ email, password, formValidator, setRegister }) {
	const handleLoginSubmit = (e) => {
		e.preventDefault();

		const emailRef = email.current.value;
		const passwordRef = password.current.value;

		if (!formValidator(emailRef, passwordRef))
			alert(
				'Email must be valid.\n Password must be minimum 8 characters; consisting of minumum: 1 Uppercase letter, 1 number, and 1 special character.'
			);
		else {
			const user = {
				email: emailRef,
				password: passwordRef,
			};

			axios
				.post('https://www.andrew-k.us/api/v1/login', user)
				.then((res) => {
					const { user_id, player, email, password } = res.data;
					console.log(`${player.playerName} is connected.`);
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
