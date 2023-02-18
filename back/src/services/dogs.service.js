import sharp from 'sharp';
import { Dogs } from '../models/dogs.js';
import { Images } from '../models/images.js';

const resizeImage = async (file) => await sharp(file.buffer).resize(200).webp().toBuffer();

/* 
, 300, {
      kernel: sharp.kernel.nearest,
      fit: 'contain',
      position: 'top',
      background: { r: 255, g: 255, b: 255 },
    }
*/

export const DogsService = {
  create: async (data, files) => {
    try {
      const { age, ...restData } = data;
      const dogs = await Dogs.create({ ...restData, age: +age });
      files.length &&
        files.forEach((file) =>
          resizeImage(file).then(async (photo) => {
            await Images.create({ dogId: dogs.id, photo });
          })
        );
      return { success: true, dogs };
    } catch (error) {
      return { success: false, message: error.message };
    }
  },
  getAll: async () => {
    try {
      const dogs = await Dogs.findAll({
        include: [{ model: Images }],
      });
      if (!dogs) throw new Error('No se encontraron registros');
      return { success: true, dogs };
    } catch (error) {
      return { success: false, message: error.message };
    }
  },
  getByID: async (id) => {
    try {
      const dog = await Dogs.findOne({
        where: { id },
        include: [{ model: Images }],
      });

      if (!dog) throw new Error('Not found');
      return { success: true, dog };
    } catch (error) {
      return { success: false, message: error.message };
    }
  },
};
