import bcrypt from 'bcryptjs';
import userStore from '../../database/db.js';

export default async function loginUser(req, res, next) {
	const { email, password } = req.body;

	const user = await userStore.findOne({ email: email }, (err) => {
		if (err) return res.status(404).json({ Message: err });
	});

	const correctPassword = await bcrypt.compare(password, user.password);

	if (!correctPassword) {
		return res.status(400).send('Incorrect Password');
	}

	req.session.user = user;
	req.session.authorized = true;
	res.send(user).status(200);
}
                                                                                                                                                                                     