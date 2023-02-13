import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Dogs } from './dogs.js';

export const Users = sequelize.define('users', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Users.hasMany(Dogs, {
  foreinkey: 'userId',
  sourceKey: 'id',
});
Dogs.belongsTo(Users, { foreinkey: 'userId', targetId: 'id' });

Users.belongsToMany(Dogs, { through: 'Likes' });
Dogs.belongsToMany(Users, { through: 'Likes' });
