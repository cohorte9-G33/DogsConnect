import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';

import { sequelize } from './src/database/database.js';

//Routes
import usersRoutes from './src/routes/users.routes.js';
import authRoutes from './src/routes/auth.routes.js';
import dogsRoutes from './src/routes/dogs.routes.js';
import raceRoutes from './src/routes/race.routes.js';
import profileRoutes from './src/routes/profile.routes.js';
import LikesRoutes from './src/routes/likes.routes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import './src/models/users.js';
import './src/models/dogs.js';
import './src/models/images.js';
import './src/models/races.js';
import './src/models/profile.js';

const server = express();

const PORT = process.env.PORT || 4000;
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// Static Middleware
server.use(express.static(path.join(__dirname, 'public')));

//Middleware
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(cors({ origin:'*'}));

//use routes
server.use('/api/users', usersRoutes);
server.use('/api/auth', authRoutes);
server.use('/api/dogs', dogsRoutes);
server.use('/api/race', raceRoutes);
server.use('/api/profile', profileRoutes);
server.use('/api/likes', LikesRoutes);

const main = async () => {
  try {
    await sequelize.sync({ force: false });

    //await sequelize.authenticate();
    console.log('Database connected');
    server.listen(PORT);
    console.log(`server running on port ${PORT}`);
  } catch (error) {
    console.log(error);
  }
};

main();
