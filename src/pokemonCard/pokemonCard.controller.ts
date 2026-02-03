import {Request, Response} from 'express';
import prisma from '../client';

export const getPokemonCards = async (req: Request, res: Response) => {
    try {
        const pokemonCards = await prisma.pokemonCard.findMany({
            include: {
                type: true
            }
        });
        res.status(200).json(pokemonCards);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch pokemonCards'});
    }
};

export const getPokemonCardById = async (req: Request, res: Response) => {
    const { pokemonCardId } = req.params;
    try {
        const pokemonCard = await prisma.pokemonCard.findUnique({
            where: {
                id: Number(pokemonCardId)
            }
        });
        if (!pokemonCard) {
            res.status(404).json({ error: `Failed to find pokemonCard ${pokemonCardId}` });
            return;
        }
        res.status(200).json(pokemonCard);
    } catch (error) {
        res.status(500).json({ error: `Failed to fetch pokemonCard` });
    }
};

export const createPokemonCard = async (req: Request, res: Response) => {
    const {name, pokedexId, typeName, imageUrl, lifePoints, size, weight} =
        req.body;
    try {
        // Vérifie si le Type existe
        const existingType = await prisma.type.findUnique({
            where: {name: typeName},
        });

        if (!existingType) {
            res.status(404).json({error: `Type not found with name ${typeName}`});
            return;
        }
        const pokemonCard = await prisma.pokemonCard.create({
            data: {
                name,
                pokedexId,
                type: {connect: {name: typeName}},
                lifePoints,
                size,
                weight,
                imageUrl,
            },
        });
        res.status(201).json(pokemonCard);
    } catch (error) {
        res.status(500).json({error: 'Failed to create the PokemonCard'});
    }
};

export const updatePokemonCard = async (req: Request, res: Response) => {
    const {pokemonCardId} = req.params;
    const {name, pokedexId, typeName, imageUrl, lifePoints} =
        req.body;

    try {
        // Vérifie si le Pokémon existe
        const existingPokemonCard = await prisma.pokemonCard.findUnique({
            where: {id: Number(pokemonCardId)},
        });

        if (!existingPokemonCard) {
            res.status(404).json({error: 'PokemonCard not found'});
            return;
        }

        // Vérifie si le Type existe
        const existingType = await prisma.type.findUnique({
            where: {name: typeName},
        });

        if (!existingType) {
            res.status(404).json({error: `Type not found with name ${typeName}`});
            return;
        }
        // Construire dynamiquement l'objet `data`
        const data: any = {};
        if (name) data.name = name;
        if (pokedexId) data.pokedexId = pokedexId;
        if (typeName) data.type = {connect: {name: typeName}};
        if (imageUrl) data.imageUrl = imageUrl;
        if (lifePoints) data.lifePoints = lifePoints;

        // Met à jour le Pokémon
        const updatedPokemonCard = await prisma.pokemonCard.update({
            where: {id: Number(pokemonCardId)},
            data,
        });
        res.status(200).json(updatedPokemonCard);
    } catch (error) {
        res.status(500).json({error: 'Failed to update the PokemonCard'});
    }
};

export const deletePokemonCard = async (req: Request, res: Response) => {
    const {pokemonCardId} = req.params;

    try {
        await prisma.pokemonCard.delete({where: {id: Number(pokemonCardId)}});
        res.status(204).send();
    } catch (error) {
        res.status(500).json({error: 'Failed to delete the PokemonCard'});
    }
};