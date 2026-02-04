import { Request, Response } from 'express';
import { Prisma } from '@prisma/client'

import prisma from '../client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

export const getUsers = async (req: Request, res: Response) => {
    // res.status(200).send(req.query);
    // const users = await prisma.user.findMany();
    res.status(200).send('Liste des utilisateurs');
    // res.status(200).send(users);
}

export const getUserById = async (req: Request, res: Response) => {
    const { userId } = req.params;

    try {
        const user = await prisma.user.findUnique({
            where: { id: Number(userId) },
        });
        if (!user) {
            res.status(404).send(`Utilisateur non trouvé`);
            return
        }
        res.status(200).send(`Utilisateur ${userId} : ` + user?.name);
    } catch (error) {
        res.status(500).send({ error: 'Une erreur est survenue' });
    }
}

export const login = async (req: Request, res: Response) => {
    // const { username, password } = req.body;

    // if (username !== 'admin' || password !== 'password') {
    //     res.status(401).send('Identifiants invalides');
    //     return;
    // }

    const { email, password } = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: { email: email },
        });

        if (!user) {
            res.status(401).send({ error: 'Email incorrect' });
            return;
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            res.status(401).send({ error: 'Mot de passe incorrect' });
            return;
        }

        const token = jwt.sign(
            // { username: username }, // Payload
            { username: email }, // Payload
            process.env.JWT_SECRET as jwt.Secret, // Secret
            // { expiresIn: process.env.JWT_EXPIRES_IN } // Expiration
            { expiresIn: '1d' } // Expiration
        );

        res.status(200).send({
            myToken: token,
        });
    } catch (error) {
        res.status(500).send({ error: 'Une erreur est survenue' });
    }
};



export const postUser = async (req: Request, res: Response) => {
    const { email, name, password } = req.body;
    try {
        const user = await prisma.user.create({
            data: {
                email: email,
                name: name,
                password: await bcrypt.hash(password, 10),
            },
        });
        res.status(201).send(`User ${user.id} créé`);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            res.status(500).send({ message: 'Une erreur ' + `${error.code} / ${error.meta}` + ' est survenue', details: `${error.message}` });
        }
        if (error instanceof Prisma.PrismaClientUnknownRequestError) {
            res.status(500).send({ message: 'Une erreur est survenue', details: `${error.message}` });
        }
        res.status(500).send({ message: 'Une erreur  est survenue', details: `${error}` });
    }
}