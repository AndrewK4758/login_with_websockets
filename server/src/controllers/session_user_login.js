//SAVE THE ID OF THE USER WHEN THE USER REGISTERS, THIS WILL BE HOW I SEARCH THE DB FOR A SESSION WHEN SOMEONE LOGS IN SO NO DUPLICATE SESSIONS ARE CREATED

export default async function sessionUserLogin(req, res, next) {
	if (req.session.authorized) {
		res.send(req.session);
		next();
	} else {
		res.send({ message: 'no session for user', redirect: '/login' });
		next();
	}
}
