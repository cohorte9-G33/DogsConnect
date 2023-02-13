import { Profiles } from '../models/profile.js';
import { Users } from '../models/users.js';

export const UsersService = {
  getByUserName: async (email) => {
    try {
      const user = await Users.findOne({
        where: {
          email,
        },
        include: [{ model: Profiles }],
      });
      if (!user) throw new Error('Usuario no encontrado');
      return { success: true, user };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  },
  getById: async (id) => {
    try {
      const user = await Users.findByPk(id, {
        include: {
          model: Profiles,
        },
        attributes: {
          exclude: ['password'],
        },
      });
      if (!user) throw new Error('Not found');
      return { success: true, user };
    } catch (error) {
      return { success: false, message: error.message };
    }
  },
};
