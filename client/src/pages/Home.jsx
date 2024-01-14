import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Banner from '../components/Banner.jsx';

export default function Home({ loggedIn }) {
	const X = () => {
		if (loggedIn) {
			return (
				<div>
					{loggedIn.map((ele, idx) => {
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

	return (
		<main>
			<Banner
				className={'header'}
				title={'Home Page'}
				additional={'You are logged in'}
			/>
			<X />
		</main>
	);
}
/**
 */
