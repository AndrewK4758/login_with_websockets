export default async function logoutUser(req, res, next) {
	req.session.destroy();
	res.send({ message: 'session destroyed' });
	next();
}
