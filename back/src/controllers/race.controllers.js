import { RaceService } from './../services/race.service.js';

export const RaceControllers = {
  create: async (req, res) => {
    const { body } = req;
    const response = await RaceService.create(body);

    res.status(response.success ? 201 : 404).send(response);
  },
  getAll: async (_req, res) => {
    const response = await RaceService.getAll();
    res.status(response.success ? 200 : 404).send(response);
  },
};
