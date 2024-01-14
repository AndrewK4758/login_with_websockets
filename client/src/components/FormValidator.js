export default function formValidator(values) {
	const { password, email, playerName } = values;

	const regexPlayer = /[a-zA-Z0-9\s]{2,32}/g;
	const regexEmail = /\S+@\S+\.\S+/g;
	const regexPassword =
		/^(?=.+[0-9])(?=.+[!@#$%^&*])[a-zA-Z0-9!@#$%?.^&*]{8,}$/gm;

	return playerName === ''
		? regexEmail.test(email) && regexPassword.test(password)
		: regexEmail.test(email) &&
				regexPassword.test(password) &&
				regexPlayer.test(playerName);
}
