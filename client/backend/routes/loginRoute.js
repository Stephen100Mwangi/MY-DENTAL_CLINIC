import express from 'express';
import loginController from '../controllers/loginController.js';

export const loginRouter = express.Router ();

loginRouter.post ('/login', loginController);
