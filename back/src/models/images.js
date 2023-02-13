import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Images = sequelize.define('images', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  photo: {
    type: DataTypes.BLOB(),
  },
});
