export default async function sessionUserLogin(req, res, next) {
	if (req.session.authorized) {
		console.log('logged in');
		await res.send(req.session);
	} else {
		console.log('NO SESSION');
		await res.send(false);
	}
}
