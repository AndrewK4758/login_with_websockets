import { sessionStore } from '../../database/db.js';

export default async function sessionUserLogin(req, res, next) {
	const email = req.session.email;
	const authorized = req.session.authorized;

	const hasSession = await sessionStore.findOne({ 'session.email': email });
	console.log(email, authorized, hasSession);

	if (hasSession && authorized) {
		await res.send({ email: email, authorized: authorized });
	} else {
		await res.send(req.session.authorized);
	}
	next();
}
