export default function PasswordRegister({ handleInput }) {
	return (
		<div className='pass'>
			<label hidden={true} htmlFor='password'>
				Password:
			</label>
			<input
				type='password'
				id='password'
				autoComplete='new-password'
				name='password'
				placeholder='Password'
				onChange={handleInput}
			/>
		</div>
	);
}
