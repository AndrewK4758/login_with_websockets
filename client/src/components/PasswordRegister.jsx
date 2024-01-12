export default function PasswordRegister({ password }) {
	return (
		<div className='pass'>
			<label htmlFor='password'>Password:</label>
			<input
				type='password'
				id='password'
				autoComplete='new-password'
				ref={password}
			/>
		</div>
	);
}
