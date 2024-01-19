import axios from 'axios';
import Banner from '../components/Banner';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import connectWS from '../socket.io';

//ADD USEEFFECT TO CHECK FOR SESSION AND AUTOMATIC LOGIN

export default function LandingPage({ setLoggedIn }) {
	const navigate = useNavigate();

	useEffect(() => {
	const x = async () => {
		await axios
			.get('https://www.andrew-k.us/api/v1/session')
			.then((res) => {
				console.log(res.data);
				if (res.data.authorized) {
					connectWS();
					setLoggedIn([res.data.player, res.data.email]);
					navigate('/home');
				} else {
					console.log(res.data);
					navigate(res.data.redirect);
				}
			})
			.catch((err) => console.log(err));
	};
	x();
	}, []);

	return (
		<main className='landing'>
			<Banner
				className={'landing-banner'}
				title={'Welcome'}
				message={'Please login or register to continue'}
			/>
			<button
				type='button'
				id='landing-button'
				onClick={() => navigate('/login')}>
				Login
			</button>
		</main>
	);
}
