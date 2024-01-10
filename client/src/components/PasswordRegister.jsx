export default function PasswordRegister({ setPassword, password }) {
	return (
		<div className='pass'>
			<label htmlFor='password'>Password:</label>
			<input
				type='password'
				id='password'
				autoComplete='new-password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
		</div>
	);
}
