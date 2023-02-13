import bcrypt from 'bcrypt';
import { UsersService } from '../services/users.service.js';

export const verifyPassword = async (req, res, next) => {
  const { password, email } = req.body;

  const { success, user, message } = await UsersService.getByUserName(email);
  if (!success) {
    res.status(203).send({ success: false, error: message });
    return;
  }
  const matchPassword = await bcrypt.compare(password, user?.password || '');
  if (!matchPassword) {
    res.status(203).send({ success: false, error: 'Password inválido' });
    return;
  }
  req.user = {
    email: user?.email,
  };

  next();
};
