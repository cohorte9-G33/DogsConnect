import { DogsService } from '../services/dogs.service.js';

export const DogsControllers = {
  create: async (req, res) => {
    const { body, files } = req;
    const response = await DogsService.create(body, files);

    res.status(response.success ? 201 : 404).send(response);
  },
  getAll: async (_req, res) => {
    const response = await DogsService.getAll();
    res.status(response.success ? 200 : 404).send(response);
  },
  getByID: async (req, res) => {
    const { id } = req.params;
    const response = await DogsService.getByID(id);
    res.status(response.success ? 200 : 404).send(response);
  },
};
