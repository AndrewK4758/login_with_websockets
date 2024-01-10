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
				'Email and/or Password not recognized, Please try again or register to continue'
			);
	}

	const correctPassword = await validatatePassword(user, password);

	if (!correctPassword) {
		return res.status(404).send('Incorrect Password');
	}
	res.send('Logged in');
}
