import { Router } from 'express';
// import { getUsers, getUserById, login, postUser } from './user.controller';
import { getUsers, getUserById, login, postUser } from './user.controller';

export const userRouter = Router();

// Route pour obtenir la liste des utilisateurs 
// userRouter.get('/', getUsers);
// Route pour obtenir un utilisateur en particulier 
userRouter.get('/:userId', getUserById);
// Route pour permettre la connexion utilisateur 
userRouter.post('/login', login);
// Route pour permettre la création d'un nouvel utilisateur 
userRouter.post('/', postUser);
userRouter.post('/create', postUser);
// Route pour permettre la création d'un nouvel utilisateur 
// userRouter.post('/createEtudiant', createEtudiant);