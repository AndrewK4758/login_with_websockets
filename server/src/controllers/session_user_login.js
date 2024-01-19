import { sessionDB } from '../../database/db.js';

//SAVE THE ID OF THE USER WHEN THE USER REGISTERS, THIS WILL BE HOW I SEARCH THE DB FOR A SESSION WHEN SOMEONE LOGS IN SO NO DUPLICATE SESSIONS ARE CREATED


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
		} else {
			res.send('/login');
			next();
		}
	} else {
		res.send({ message: 'no session in db' }).status(200);
		next();
	}
}
