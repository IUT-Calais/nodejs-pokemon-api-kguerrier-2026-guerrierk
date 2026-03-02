import request from 'supertest';
import { app } from '../src';
import { prismaMock } from './jest.setup';

describe('PokemonCard API', () => {
  describe('GET /pokemon-cards', () => {
    it('should fetch all PokemonCards', async () => {
      const mockPokemonCards = [
        {
          id: 1,
          name: 'Pikachu',
          pokedexId: 25,
          typeId: 1,
          imageUrl: 'pikachu.png',
          lifePoints: 60,
          weight: 85,
          size: 6,
          attackId: 2,
          weaknessId: 2,
        },
        {
          id: 2,
          name: 'Charmander',
          pokedexId: 4,
          typeId: 1,
          imageUrl: 'charmander.png',
          lifePoints: 50,
          weight: 85,
          size: 6,
          attackId: 2,
          weaknessId: 2,
        },
      ];

      prismaMock.pokemonCard.findMany.mockResolvedValue(mockPokemonCards);

      const response = await request(app).get('/pokemon-cards');
      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockPokemonCards);
    });


    it('should return 500 if fetching fails', async () => {
      prismaMock.pokemonCard.findMany.mockRejectedValue(
        new Error('Database error')
      );

      const response = await request(app).get('/pokemon-cards');
      expect(response.status).toBe(500);
      expect(response.body).toEqual({ error: 'Failed to fetch pokemonCards' });
    });
  });

  describe('GET /pokemon-cards/:pokemonCardId', () => {
    it('should fetch a PokemonCard by ID', async () => {
      const mockPokemonCard = {
        id: 1,
        name: 'Pikachu',
        pokedexId: 25,
        typeId: 1,
        imageUrl: 'pikachu.png',
        lifePoints: 60,
        weight: 85,
        size: 6,
        attackId: 2,
        weaknessId: 2,
      };

      prismaMock.pokemonCard.findUnique.mockResolvedValue(mockPokemonCard);

      const response = await request(app).get('/pokemon-cards/1');
      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockPokemonCard);
    });

    it('should return 404 if PokemonCard is not found', async () => {
      prismaMock.pokemonCard.findUnique.mockResolvedValue(null);

      const response = await request(app).get('/pokemon-cards/999');
      expect(response.status).toBe(404);
      expect(response.body).toEqual({ error: 'Failed to find pokemonCard 999' });
    });

    it('should return 500 if fetching fails', async () => {
      prismaMock.pokemonCard.findUnique.mockRejectedValue(
        new Error('Database error')
      );

      const response = await request(app).get('/pokemon-cards/1');
      expect(response.status).toBe(500);
      expect(response.body).toEqual({ error: 'Failed to fetch pokemonCard' });
    });
  });

  describe('POST /pokemon-cards', () => {
    it('should create a new PokemonCard', async () => {
      const newPokemonCard = {
        name: 'Bulbasaur',
        pokedexId: 1,
        typeName: 'Neunoeil',
        imageUrl: 'bulbasaur.png',
        lifePoints: 45,
        attackId: 1,
        weight: 85,
        size: 6,
        weaknessId: 2,
      };

      prismaMock.type.findUnique.mockResolvedValue(null);

      const response = await request(app)
        .post('/pokemon-cards')
        .set('Authorization', 'Bearer mockedToken')
        .send(newPokemonCard);

      expect(response.status).toBe(404);
      expect(response.body).toEqual({ error: `Type not found with name Neunoeil` });
    });
    it('should create a new PokemonCard', async () => {
      const newPokemonCard = {
        name: 'Bulbasaur',
        pokedexId: 1,
        typeName: 'Grass',
        imageUrl: 'bulbasaur.png',
        lifePoints: 45,
        attackId: 1,
        weight: 85,
        size: 6,
        weaknessId: 2,
      };
      const foundType = { id: 3, name: 'Grass' };
      const createdPokemonCard = { id: 1, typeId: 3, ...newPokemonCard };

      prismaMock.type.findUnique.mockResolvedValue(foundType);
      prismaMock.pokemonCard.create.mockResolvedValue(createdPokemonCard);

      const response = await request(app)
        .post('/pokemon-cards')
        .set('Authorization', 'Bearer mockedToken')
        .send(newPokemonCard);

      expect(response.status).toBe(201);
      expect(response.body).toEqual(createdPokemonCard);
    });

    it('should return 500 if creation fails', async () => {
      prismaMock.pokemonCard.create.mockRejectedValue(
        new Error('Database error')
      );
      const foundType = { id: 3, name: 'Grass' };
      prismaMock.type.findUnique.mockResolvedValue(foundType);
      const response = await request(app)
        .post('/pokemon-cards')
        .set('Authorization', 'Bearer mockedToken')
        .send({ name: 'Bulbasaur' });

      expect(response.status).toBe(500);
      expect(response.body).toEqual({
        error: 'Failed to create the PokemonCard',
      });
    });
  });

  // describe('PATCH /pokemon-cards/:pokemonCardId', () => {
  //   it('should update an existing PokemonCard', async () => {
  //     const updatedPokemonCard = {};

  //     expect(response.status).toBe(200);
  //     expect(response.body).toEqual(updatedPokemonCard);
  //   });
  // });

  // describe('DELETE /pokemon-cards/:pokemonCardId', () => {
  //   it('should delete a PokemonCard', async () => {
  //     expect(response.status).toBe(204);
  //   });
  // });
});
