import userStore from '../../database/db.js';

export default async function registerUser(req, res, next) {
	const user = req.body;

	const { player, email, password } = user;
	const alreadyRegistered = await userStore.findOne({ email, password });

	if (alreadyRegistered) {
		return res.status(400).send('Already Registered. Please Login');
	}

	await userStore.insertOne(user);
	console.log(user);

	if (!user._id) {
		return res.status(400).send('Something Fucked Up');
	}

	res.status(200).send({ message: 'Register Successful', user: user });
}
