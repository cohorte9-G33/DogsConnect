import { LikesService } from '../services/likes.service.js';

export const LikesControllers = {
  addLike: async (req, res) => {
    const response = await LikesService.addLike(req.body);
    res.status(response.success ? 200 : 400).send(response);
  },
  getLikes: async (req, res) => {
    const response = await LikesService.getLikes(req.params?.userId);
    res.status(response.success ? 200 : 400).send(response);
  },
  deleteLike: async (req, res) => {
    const response = await LikesService.deleteLike(req.body);
    res.status(response.success ? 200 : 400).send(response);
  },
};
