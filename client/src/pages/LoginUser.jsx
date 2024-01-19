import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import formValidator from '../components/FormValidator.js';
import Banner from '../components/Banner.jsx';
import PasswordRegister from '../components/PasswordRegister.jsx';
import InputField from '../components/InputField.jsx';
import { connectWS } from '../socket.io.js';

export default function LoginUser({ setLoggedIn }) {
	const [values, setValues] = useState({
		email: '',
		password: '',
	});
	const navigate = useNavigate();

	const handleInput = (e) => {
		setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleLoginSubmit = async (e) => {
		e.preventDefault();

		if (!formValidator(values))
			alert(
				'Email must be valid.\n Password must be minimum 8 characters; consisting of minumum: 1 Uppercase letter, 1 number, and 1 special character.'
			);
		else {
			const request = axios.post(
				'https://www.andrew-k.us/api/v1/login',
				values
			);

			request
				.then((res) => {
					console.log(`${res.data.player.playerName} is connected.`);
					connectWS();
					return res;
				})
				.then((res) => {
					setLoggedIn([res.data.player.playerName, res.data.email]);
					navigate('/home');
				})
				.catch((err) => {
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
			<form
				className='form'
				method='post'
				name='authenticate'
				onSubmit={handleLoginSubmit}>
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
					<button
						type='button'
						name={'Create Acount'}
						onClick={() => navigate('/register')}>
						Create Account
					</button>
				</div>
			</form>
		</div>
	);
}
