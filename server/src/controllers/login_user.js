import bcrypt from 'bcryptjs';
import userStore from '../../database/db.js';

const validatatePassword = async (user, password) => {
	return (await user.password) === password;
};

export default async function loginUser(req, res, next) {
	const { email, password } = req.body;

	const user = await userStore.findOne({ email: email });

	if (!user) {
		return res
			.status(404)
			.send(
				'Email not recognized, Please corrent email or register to continue'
			);
	}

	const correctPassword = bcrypt.compare(password, user.password);
	// const correctPassword = await validatatePassword(user, hashPassword);

	if (!correctPassword) {
		return res.status(404).send('Incorrect Password');
	}

	const cookie = {
		'Player Name': user.player.playerName,
		id: user._id,
		email: email,
		password: password,
	};
	res.cookie('user', cookie, { secure: true });
	res.send(user);
}
