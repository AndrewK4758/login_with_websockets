import PasswordRegister from './components/PasswordRegister';
import Button from './components/Button';
import InputField from './components/InputField';

export default function Form({
	register,
	playerName,
	email,
	password,
	setPlayerName,
	setEmail,
	setPassword,
	handleSubmit,
}) {
	const handleReset = () => {
		setEmail('');
		setPassword('');
	};

	return (
		<form
			className='form'
			method='post'
			name='registerPlayer'
			onSubmit={handleSubmit}>
			{register && (
				<div className='playerName'>
					<label htmlFor='playerName'>Preferred Player Name:</label>
					<InputField
						type={'text'}
						name={'playerName'}
						id={'playerName'}
						value={playerName}
						handleChange={setPlayerName}
					/>
				</div>
			)}
			<div className='email'>
				<label htmlFor='email'>Email:</label>
				<InputField
					autoComplete={'email'}
					type={'email'}
					name={'email'}
					id={'email'}
					value={email}
					handleChange={setEmail}
				/>
			</div>
			<PasswordRegister setPassword={setPassword} password={password} />
			<div className='buttons'>
				<Button type='reset' name={'Reset'} onclick={handleReset} />
				<Button type='Submit' name={'Submit'} />
			</div>
		</form>
	);
}
