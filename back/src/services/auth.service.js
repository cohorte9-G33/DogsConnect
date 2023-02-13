import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Profiles } from '../models/profile.js';
import { Users } from './../models/users.js';

export const AuthService = {
  register: async (data) => {
    try {
      const encryptedPassword = await bcrypt.hash(data.password, 10);
      const user = await Users.create({
        ...data,
        password: encryptedPassword,
      });

      await Profiles.create({ userId: user.id });

      const { id, location, email } = user;

      return { success: true, user: { id, location, email } };
    } catch (error) {
      console.log({ error: error.message });
      return {
        success: false,
        message: error.message,
      };
    }
  },
  login: async (email) => {
    const SECRET = process.env.SECRET || '';
    return jwt.sign({ email }, SECRET, {
      expiresIn: '12h',
    });
  },
};
