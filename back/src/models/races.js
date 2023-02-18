import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Races = sequelize.define(
  'race',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.ENUM,
      values: ['Pequeño', 'Mediano', 'Grande'],
      defaultValue: 'Mediano',
    },
  },
  {
    timestamps: false,
  }
);
