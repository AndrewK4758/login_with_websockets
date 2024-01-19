import Banner from '../components/Banner';
import { useNavigate } from 'react-router-dom';

//ADD USEEFFECT TO CHECK FOR SESSION AND AUTOMATIC LOGIN

export default function LandingPage() {
	const navigate = useNavigate();
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
