import { Profiles } from '../models/profile.js';

export const ProfileService = {
  updateProfile: async (id, data) => {
    try {
      const profile = await Profiles.update(data, {
        where: {
          userId: id,
        },
      });
      if (!profile) throw new Error('Usuario no encontrado');
      return { success: true, profile };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  },
};
