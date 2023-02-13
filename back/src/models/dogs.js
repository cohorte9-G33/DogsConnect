import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Images } from './images.js';

export const Dogs = sequelize.define('dogs', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  typeAge: {
    type: DataTypes.ENUM,
    values: ['meses', 'años'],
    defaultValue: 'años',
  },
  sex: {
    type: DataTypes.ENUM,
    values: ['Macho', 'Hembra'],
    defaultValue: 'Macho',
  },
  size: {
    type: DataTypes.ENUM,
    values: ['Pequeño', 'Mediano', 'Grande'],
    defaultValue: 'Mediano',
  },
  race: {
    type: DataTypes.STRING,
    defaultValue: 'undefined',
  },
  color: {
    type: DataTypes.STRING,
  },
  hairStyle: {
    type: DataTypes.ENUM,
    values: ['Corto', 'Largo'],
    defaultValue: 'Largo',
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  condition: {
    type: DataTypes.ENUM,
    values: ['Adopción', 'Pareja'],
    defaultValue: 'Adopción',
  },
  description: {
    type: DataTypes.STRING(2000),
  },
});

Dogs.hasMany(Images, {
  foreinkey: 'dogId',
  sourceKey: 'id',
});
Images.belongsTo(Dogs, { foreinkey: 'dogId', targetId: 'id' });
