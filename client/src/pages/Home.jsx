import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Banner from '../components/Banner.jsx';

export default function Home({ loggedIn }) {
	const navigate = useNavigate();

	const X = () => {
		if (loggedIn) {
			return (
				<div>
					{loggedIn.map((ele, idx) => {
						console.log(ele);
						return (
							<div key={idx} style={{ color: '#ffd300', textAlign: 'center' }}>
								{ele}
							</div>
						);
					})}
				</div>
			);
		}
	};

	const handleLogout = () => {
		const response = axios.get('https://www.andrew-k.us/api/v1/logout');
		response
			.then((res) => {
				console.log(res.data);
				navigate('/');
			})
			.catch((err) => console.log(err));
	};

	return (
		<main>
			<Banner
				className={'header'}
				title={'Home Page'}
				additional={'You are logged in'}
			/>
			{/* <X /> */}
			<button type='button' onClick={() => handleLogout()}>
				Logout
			</button>
		</main>
	);
}
/**
 */
