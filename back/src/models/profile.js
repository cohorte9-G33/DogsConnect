import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Users } from './users.js';

export const Profiles = sequelize.define('profiles', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING(20),
    defaultValue: '',
  },
  lastName: {
    type: DataTypes.STRING(20),
    defaultValue: '',
  },
  phone: {
    type: DataTypes.STRING(15),
    defaultValue: '',
  },

  photo: {
    type: DataTypes.BLOB,
  },
});

Users.hasOne(Profiles, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
Profiles.belongsTo(Users);
/* Users.hasOne(Profiles, {
  foreinkey: { name: 'profileId', allowNull: false },
  sourceKey: 'id',
});
Profiles.belongsTo(Users, { foreinkey: 'profileId', targetId: 'id' });
 */
