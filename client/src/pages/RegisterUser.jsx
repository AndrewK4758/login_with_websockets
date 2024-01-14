import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import formValidator from '../components/FormValidator.js';
import Banner from '../components/Banner.jsx';
import PasswordRegister from '../components/PasswordRegister.jsx';
import InputField from '../components/InputField.jsx';
import { Player } from '../../../project/src/player.js';

export default function RegisterUser() {
	const [values, setValues] = useState({
		player: '',
		email: '',
		password: '',
	});
	const nav = useNavigate('');

	useEffect(() => {
		const x = async () => {
			const response = axios.get('https://www.andrew-k.us/api/v1/session');
			response
				.then((res) => {
					console.log(res, 'effect');
					if (res.data === true) {
						navigate('/home');
					}
				})
				.catch((err) => console.log(err));
		};
		x();
	}, []);

	const handleInput = (e) => {
		setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleRegisterSubmit = (e) => {
		e.preventDefault();

		if (!formValidator(values)) {
			alert(
				'Player name must be 2 - 32 letters and numbers only.\nEmail must be valid.\n Password must be minimum 8 characters; consisting of minumum: 1 Uppercase letter, 1 number, and 1 special character.'
			);
		} else {
			values.player = new Player(values.player);

			const response = axios.post(
				'https://https://www.andrew-k.us/api/v1/register',
				values
			);
			response
				.then((res) => {
					console.log(res.data);
					if (res.data.authorized) {
						nav('/');
					} else {
						nav('/register');
					}
				})
				.catch((err) => {
					const message = err.response.data;
					alert(message);
					console.log(err);
					nav('/');
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
			<form
				className='form'
				method='post'
				name='authenticate'
				onSubmit={handleRegisterSubmit}>
				<div className='playerName'>
					<label hidden={true} htmlFor='playerName'>
						Preferred Player Name:
					</label>
					<InputField
						type={'text'}
						name={'player'}
						id={'playerName'}
						value={'Player Name'}
						handleInput={handleInput}
					/>
				</div>
				<div className='email'>
					<label hidden={true} htmlFor='email'>
						Email:
					</label>
					<InputField
						autoComplete={'email'}
						type={'email'}
						name={'email'}
						id={'email'}
						value={'Email'}
						handleInput={handleInput}
					/>
				</div>
				<PasswordRegister handleInput={handleInput} />
				<div className='buttons'>
					<button type='Submit'>Log In</button>
				</div>
			</form>
		</div>
	);
}
