import { Router } from 'express';
import {
  getPokemonCards,
  getPokemonCardById,
  createPokemonCard,
  updatePokemonCard,
  deletePokemonCard,
} from './pokemonCard.controller';
import { verifyJWT } from '../common/jwt.middleware';

export const pokemonCardRouter = Router();

// - `GET:/pokemons-cards` : permet d'obtenir la liste de tous les pokémons
pokemonCardRouter.get('/', getPokemonCards);

// - `GET:/pokemons-cards/:pokemonCardId` : permet d'obtenir un pokémon spécifique en fonction de la clé `pokemonCardId` passé en paramètre.
pokemonCardRouter.get('/:pokemonCardId', getPokemonCardById);

// - `POST:/pokemon-cards` : permet d'enregistrer le pokémon dont les propriétés sont passées dans le body de la requête

pokemonCardRouter.post('/', verifyJWT, createPokemonCard);

// - `PATCH:/pokemon-cards/:pokemonCardId` : permet de modifier le pokémon donc le `pokemonCardId` est passé en paramètre et les propriétés passées dans le body.
pokemonCardRouter.patch('/:pokemonCardId', verifyJWT, updatePokemonCard);


// - `DELETE:/pokemon-cards/:pokemonCardId:` : permet de supprimer le pokémon renseigné avec son `pokemonCardId`.
pokemonCardRouter.delete('/:pokemonCardId', verifyJWT, deletePokemonCard);
