import bcrypt from 'bcryptjs';
import { userStore } from '../../database/db.js';

export default async function loginUser(req, res, next) {
	const { email, password } = req.body;

	const user = await userStore.findOne({ email: email });

	if (!user) {
		return res.send({ error: 'Email not found, please Register' });
	}

	const correctPassword = bcrypt.compare(password, user.password);

	if (!correctPassword) {
		return res.status(400).send('Incorrect Password');
	}

	req.session.player = user.player;
	req.session.email = user.email;
	req.session.password = user.password;
	req.session.authorized = true;
	res.send(user).status(200);
	next();
}
                                                                                                                                                                                     