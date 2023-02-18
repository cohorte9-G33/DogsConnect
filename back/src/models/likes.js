import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Likes = sequelize.define(
  'likes',
  {
    UserId: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    dogId: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
  },
  {
    timestamps: false,
  }
);
