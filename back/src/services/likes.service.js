import { Likes } from '../models/likes.js';

export const LikesService = {
  addLike: async ({ UserId, dogId }) => {
    try {
      const res = await Likes.create({ UserId, dogId });
      return { success: true, res };
    } catch (error) {
      return { success: false, error };
    }
  },
  getLikes: async (UserId) => {
    try {
      const likes = await Likes.findAll({ where: { UserId } });
      return { success: true, likes };
    } catch (error) {
      return { success: false, error };
    }
  },
  deleteLike: async ({ UserId, dogId }) => {
    try {
      const res = await Likes.destroy({ where: { UserId, dogId } });
      return { success: true, res };
    } catch (error) {
      return { success: false, error };
    }
  },
};
