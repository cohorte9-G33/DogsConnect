import { Races } from '../models/races.js';

export const RaceService = {
  create: async (data) => {
    try {
      const race = await Races.create({ ...data });

      return { success: true, race };
    } catch (error) {
      return { success: false, message: error.message };
    }
  },
  getAll: async () => {
    try {
      const races = await Races.findAll({
        order: [['name', 'ASC']],
      });
      if (!races) throw new Error('Not found');
      return { success: true, races };
    } catch (error) {
      return { success: false, message: error.message };
    }
  },
};
