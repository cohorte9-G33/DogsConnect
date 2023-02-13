import { ProfileService } from './../services/profile.service.js';

export const ProfileControllers = {
  update: async (req, res) => {
    const { id } = req.params;
    const response = await ProfileService.update(id, req.body);
    res.status(response.success ? 200 : 404).send(response);
  },
};
