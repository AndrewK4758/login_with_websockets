import bcrypt from 'bcryptjs';
import { userStore } from '../../database/db.js';
import salt from '../../security/salt.js';

export default async function registerUser(req, res, next) {
	const user = {
		player: req.body.player,
		email: req.body.email,
		password: '',
	};

	const alreadyRegistered = await userStore.findOne({ email: user.email });

	if (alreadyRegistered) {
		return res.status(400).send('Already Registered. Please Login');
	}

	user.password = await bcrypt.hash(req.body.password, salt);

	await userStore.insertOne(user);
	if (!user._id) {
		return res.status(400).send('Something Fucked Up');
	}

	req.session.email = user.email;
	req.session.password = user.password;
	req.session.authorized = true;
	res.send(user);
	next();
}
