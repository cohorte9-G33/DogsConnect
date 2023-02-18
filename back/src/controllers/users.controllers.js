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
  addLike: async (req, res) => {
    const response = await UsersService.addLike(req.body);
    res.status(response.success ? 200 : 400).send(response);
  },
  getLikes: async (req, res) => {
    const response = await UsersService.getLikes(req.params?.userId);
    res.status(response.success ? 200 : 400).send(response);
  },
  deleteLike: async (req, res) => {
    console.log({ userId: req.params?.userId, dogId: req.body });

    const response = await UsersService.deleteLike(req.params?.userId, req.body);
    res.status(response.success ? 200 : 400).send(response);
  },
};
