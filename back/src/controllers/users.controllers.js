import { UsersService } from '../services/users.service.js';

export const UsersControllers = {
  getUserById: async (req, res) => {
    const { id } = req.params;
    const response = await UsersService.getById(id);
    res.status(response.success ? 200 : 404).send(response);
  },
  getUserByUsername: async (req, res) => {
    const { email } = req.query;
    const response = await UsersService.getByUserName(email);
    res.status(response.success ? 200 : 404).send(response);
  },
};
