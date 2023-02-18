import dotenv from 'dotenv';
dotenv.config();

import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
  process.env.DATABASE, // db name,
  process.env.USER_NAME, // username
  process.env.PASSWORD, // password
  {
    host: process.env.HOST,
    dialect: 'postgres',
    /* dialectOptions: {
      ssl: true,
    }, */
    logging: false,
  }
);

// postgres://jlml:3A58LsWSqgfuQaKLjZSw5Jw3pXmaytXb@dpg-cfeg4lhmbjsqnjmi2lkg-a.oregon-postgres.render.com/dogsconnect
//PGPASSWORD=3A58LsWSqgfuQaKLjZSw5Jw3pXmaytXb psql -h dpg-cfeg4lhmbjsqnjmi2lkg-a.oregon-postgres.render.com -U jlml dogsconnect
