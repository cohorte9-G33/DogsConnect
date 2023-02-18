import sharp from 'sharp';
import { Profiles } from '../models/profile.js';
import { UsersService } from './users.service.js';

export const ProfileService = {
  update: async (id, data, filePhoto) => {
    const resizeImage = async (file) => {
      if (file) return await sharp(file.buffer).resize(200, 200).webp().toBuffer();
      else return null;
    };
    const userId = id;
    try {
      const photoResized = await resizeImage(filePhoto);
      photoResized && (data.photo = photoResized);

      const profile = await Profiles.update(data, {
        where: {
          userId,
        },
      });
      if (!profile) throw new Error('Usuario no encontrado');

      const { user } = await UsersService.getById(userId);

      const {
        id,
        location,
        profile: { firstName, lastName, phone, photo },
      } = user;

      return {
        success: true,
        user: { id, location, firstName, lastName, phone, photo },
      };
    } catch (error) {
      console.log({ error });

      return {
        success: false,
        message: error.message,
      };
    }
  },
};
