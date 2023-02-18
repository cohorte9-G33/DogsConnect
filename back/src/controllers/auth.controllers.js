import { AuthService } from '../services/auth.service.js';
import { UsersService } from '../services/users.service.js';

export const AuthControllers = {
  register: async (req, res) => {
    const response = await AuthService.register(req.body);

    res.status(response.success ? 201 : 401).send(response);
  },
  login: async (req, res) => {
    const { email } = req.user;
    const token = await AuthService.login(email);
    const { user } = await UsersService.getByUserName(email);

    const {
      id,
      location,
      profile: { firstName, lastName, phone, photo },
    } = user;

    res.status(200).send({
      success: true,
      token,
      user: { id, location, firstName, lastName, phone, photo },
    });
  },
};
