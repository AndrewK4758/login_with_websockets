import bcrypt from 'bcryptjs';
import userStore from '../../database/db.js';
import salt from '../../security/salt.js';

export default async function registerUser(req, res, next) {
	const user = req.body;
	const { email, password } = user;

	const alreadyRegistered = await userStore.findOne({ email: email });

	if (alreadyRegistered) {
		return res.status(400).send('Already Registered. Please Login');
	}

	user.password = await bcrypt.hash(password, salt);

	await userStore.insertOne(user);
	if (!user._id) {
		return res.status(400).send('Something Fucked Up');
	}

	req.session.user = user;
	req.session.authorized = true;
	res.send(req.session);
}
