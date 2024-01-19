import { sessionDB } from '../../database/db.js';

export default async function sessionUserLogin(req, res, next) {
	console.log(req.session);
	const email = req.session.email;
	const authorized = req.session.authorized;
	console.log(email, authorized);
	if (email && authorized) {
		const hasSession = await sessionDB.findOne({ 'session.email': email });
		console.log(email, authorized, hasSession);
		if (hasSession && authorized) {
			await res.send({ email: email, authorized: authorized });
			next();
		}
	} else {
		res.send({ message: 'no session in db' }).status(200);
		next();
	}
}
