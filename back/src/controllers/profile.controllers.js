import { ProfileService } from './../services/profile.service.js';

export const ProfileControllers = {
  update: async (req, res) => {
    const { id } = req.params;
    const { body, file } = req;

    const response = await ProfileService.update(id, body, file);
    res.status(response.success ? 200 : 404).send(response);
  },
};
