import bcrypt from 'bcryptjs';
import userStore from '../../database/db.js';
import salt from '../../security/salt.js';

export default async function registerUser(req, res, next) {
	const user = req.body;

	const { player, email, password } = user;
	const alreadyRegistered = await userStore.findOne({ email });

	if (alreadyRegistered) {
		return res.status(400).send('Already Registered. Please Login');
	}

	user.password = await bcrypt.hash(password, salt);

	await userStore.insertOne(user);
	console.log(user);

	if (!user._id) {
		return res.status(400).send('Something Fucked Up');
	}

	res.status(200).send({ message: 'Register Successful', user: user });
}
