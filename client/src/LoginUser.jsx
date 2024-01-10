import axios from 'axios';
import Header from './components/Header.jsx';
import Button from './components/Button.jsx';
import Form from './Form.jsx';
import socket from './socket.io.js';
import './App.css';

export default function LoginUser({
	email,
	password,
	setEmail,
	setPassword,
	formValidator,
	setRegister,
}) {
	const handleLoginSubmit = (e) => {
		e.preventDefault();

		if (!formValidator(email, password))
			alert(
				'Please check login fields. Enter valid email. Password is minimum of 8: characters, 1 upper, 1 special'
			);
		else {
			const user = {
				email: email,
				password: password,
			};

			axios
				.post('https://login-server-131l.onrender.com/api/v1/login', user)
				.then((res) => {
					console.log(res.data);
					socket.connect();
					console.log('attempt websocket');
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
			<Header
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
			<Header
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
