import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);

export default salt;
