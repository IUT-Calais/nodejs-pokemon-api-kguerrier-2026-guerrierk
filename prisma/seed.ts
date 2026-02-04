import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt'

const prisma = new PrismaClient();

async function main() {
    // Suppression de tous les éléments
    await prisma.user.deleteMany();

    await prisma.pokemonCard.deleteMany();

    await prisma.type.deleteMany();
    await prisma.user.createMany({
        data: [
            {
                name: "Kevin Guerrier",
                email: "kevin.guerrier@fakemail.com",
                // password: "passkevin1"
                password:  await bcrypt.hash("passkevin1", 10),
            },
            {
                name: "Jean Martin",
                email: "jean.martin@fakemail.com",
                // password: "passjean2"
                password:  await bcrypt.hash("passjean2", 10),
            },
            {
                name: "Sophie Laurent",
                email: "sophie.laurent@fakemail.com",
                // password: "passsophie3"
                password:  await bcrypt.hash("passsophie3", 10),
            },
            {
                name: "Pierre Bernard",
                email: "pierre.bernard@fakemail.com",
                // password: "passpierre4"
                password:  await bcrypt.hash("passpierre4", 10),
            },
            {
                name: "Camille Rousseau",
                email: "camille.rousseau@fakemail.com",
                // password: "passcamille5"
                password:  await bcrypt.hash("passcamille5", 10),
            },
            {
                name: "Lucas Moreau",
                email: "lucas.moreau@fakemail.com",
                // password: "passlucas6"
                password:  await bcrypt.hash("passlucas6", 10),
            },
            {
                name: "Emma Petit",
                email: "emma.petit@fakemail.com",
                // password: "passemma7"
                password:  await bcrypt.hash("passemma7", 10),
            },
            {
                name: "Antoine Simon",
                email: "antoine.simon@fakemail.com",
                // password: "passantoine8"
                password:  await bcrypt.hash("passantoine8", 10),
            },
            {
                name: "Chloé Robert",
                email: "chloe.robert@fakemail.com",
                // password: "passchloe9"
                password:  await bcrypt.hash("passchloe9", 10),
            },
            {
                name: "Hugo Lambert",
                email: "hugo.lambert@fakemail.com",
                // password: "passhugo10"
                password:  await bcrypt.hash("passhugo10", 10),
            }
        ]
    });

    // Ajout des nouveaux éléments
    await prisma.type.createMany({
        data: [
            { name: 'Normal' },
            { name: 'Fire' },
            { name: 'Water' },
            { name: 'Grass' },
            { name: 'Electric' },
            { name: 'Ice' },
            { name: 'Fighting' },
            { name: 'Poison' },
            { name: 'Ground' },
            { name: 'Flying' },
            { name: 'Psychic' },
            { name: 'Bug' },
            { name: 'Rock' },
            { name: 'Ghost' },
            { name: 'Dragon' },
            { name: 'Dark' },
            { name: 'Steel' },
            { name: 'Fairy' },
        ],
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Bulbasaur',
            pokedexId: 1,
            type: { connect: { name: 'Water' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
            lifePoints: 45,
            size: 0.7,
            weight: 6.9,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Ivysaur',
            pokedexId: 2,
            type: { connect: { name: 'Water' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
            lifePoints: 60,
            size: 1.0,
            weight: 13.0,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Venusaur',
            pokedexId: 3,
            type: { connect: { name: 'Water' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
            lifePoints: 80,
            size: 2.0,
            weight: 100.0,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Charmander',
            pokedexId: 4,
            type: { connect: { name: 'Fire' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
            lifePoints: 39,
            size: 0.6,
            weight: 8.5,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Charmeleon',
            pokedexId: 5,
            type: { connect: { name: 'Fire' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png',
            lifePoints: 58,
            size: 1.1,
            weight: 19.0,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Charizard',
            pokedexId: 6,
            type: { connect: { name: 'Fire' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
            lifePoints: 78,
            size: 1.7,
            weight: 90.5,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Squirtle',
            pokedexId: 7,
            type: { connect: { name: 'Water' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
            lifePoints: 44,
            size: 0.5,
            weight: 9.0,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Wartortle',
            pokedexId: 8,
            type: { connect: { name: 'Water' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png',
            lifePoints: 59,
            size: 1.0,
            weight: 22.5,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Blastoise',
            pokedexId: 9,
            type: { connect: { name: 'Water' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png',
            lifePoints: 79,
            size: 1.6,
            weight: 85.5,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Caterpie',
            pokedexId: 10,
            type: { connect: { name: 'Bug' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png',
            lifePoints: 45,
            size: 0.3,
            weight: 2.9,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Metapod',
            pokedexId: 11,
            type: { connect: { name: 'Bug' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png',
            lifePoints: 50,
            size: 0.7,
            weight: 9.9,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Butterfree',
            pokedexId: 12,
            type: { connect: { name: 'Bug' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png',
            lifePoints: 60,
            size: 1.1,
            weight: 32.0,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Weedle',
            pokedexId: 13,
            type: { connect: { name: 'Bug' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png',
            lifePoints: 40,
            size: 0.3,
            weight: 3.2,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Kakuna',
            pokedexId: 14,
            type: { connect: { name: 'Bug' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png',
            lifePoints: 45,
            size: 0.6,
            weight: 10.0,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Beedrill',
            pokedexId: 15,
            type: { connect: { name: 'Bug' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png',
            lifePoints: 65,
            size: 1.0,
            weight: 29.5,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Pidgey',
            pokedexId: 16,
            type: { connect: { name: 'Normal' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png',
            lifePoints: 40,
            size: 0.3,
            weight: 1.8,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Pidgeotto',
            pokedexId: 17,
            type: { connect: { name: 'Normal' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png',
            lifePoints: 63,
            size: 1.1,
            weight: 30.0,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Pidgeot',
            pokedexId: 18,
            type: { connect: { name: 'Normal' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png',
            lifePoints: 83,
            size: 1.5,
            weight: 39.5,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Rattata',
            pokedexId: 19,
            type: { connect: { name: 'Normal' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png',
            lifePoints: 30,
            size: 0.3,
            weight: 3.5,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Raticate',
            pokedexId: 20,
            type: { connect: { name: 'Normal' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png',
            lifePoints: 55,
            size: 0.7,
            weight: 18.5,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Spearow',
            pokedexId: 21,
            type: { connect: { name: 'Normal' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png',
            lifePoints: 40,
            size: 0.3,
            weight: 2.0,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Fearow',
            pokedexId: 22,
            type: { connect: { name: 'Normal' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png',
            lifePoints: 65,
            size: 1.2,
            weight: 38.0,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Ekans',
            pokedexId: 23,
            type: { connect: { name: 'Poison' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png',
            lifePoints: 35,
            size: 2.0,
            weight: 6.9,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Arbok',
            pokedexId: 24,
            type: { connect: { name: 'Poison' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png',
            lifePoints: 60,
            size: 3.5,
            weight: 65.0,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Pikachu',
            pokedexId: 25,
            type: { connect: { name: 'Electric' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
            lifePoints: 35,
            size: 0.4,
            weight: 6.0,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Raichu',
            pokedexId: 26,
            type: { connect: { name: 'Electric' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png',
            lifePoints: 60,
            size: 0.8,
            weight: 30.0,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Sandshrew',
            pokedexId: 27,
            type: { connect: { name: 'Ground' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png',
            lifePoints: 50,
            size: 0.6,
            weight: 12.0,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Sandslash',
            pokedexId: 28,
            type: { connect: { name: 'Ground' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png',
            lifePoints: 75,
            size: 1.0,
            weight: 29.5,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Nidoran♀',
            pokedexId: 29,
            type: { connect: { name: 'Poison' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png',
            lifePoints: 55,
            size: 0.4,
            weight: 7.0,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Nidorina',
            pokedexId: 30,
            type: { connect: { name: 'Poison' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png',
            lifePoints: 70,
            size: 0.8,
            weight: 20.0,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Nidoqueen',
            pokedexId: 31,
            type: { connect: { name: 'Poison' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png',
            lifePoints: 90,
            size: 1.3,
            weight: 60.0,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Nidoran♂',
            pokedexId: 32,
            type: { connect: { name: 'Poison' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png',
            lifePoints: 46,
            size: 0.5,
            weight: 9.0,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Nidorino',
            pokedexId: 33,
            type: { connect: { name: 'Poison' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png',
            lifePoints: 61,
            size: 0.9,
            weight: 19.5,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Nidoking',
            pokedexId: 34,
            type: { connect: { name: 'Poison' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png',
            lifePoints: 81,
            size: 1.4,
            weight: 62.0,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Clefairy',
            pokedexId: 35,
            type: { connect: { name: 'Normal' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png',
            lifePoints: 70,
            size: 0.6,
            weight: 7.5,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Clefable',
            pokedexId: 36,
            type: { connect: { name: 'Normal' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png',
            lifePoints: 95,
            size: 1.3,
            weight: 40.0,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Vulpix',
            pokedexId: 37,
            type: { connect: { name: 'Fire' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png',
            lifePoints: 38,
            size: 0.6,
            weight: 9.9,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Ninetales',
            pokedexId: 38,
            type: { connect: { name: 'Fire' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png',
            lifePoints: 73,
            size: 1.1,
            weight: 19.9,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Jigglypuff',
            pokedexId: 39,
            type: { connect: { name: 'Normal' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png',
            lifePoints: 115,
            size: 0.5,
            weight: 5.5,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Wigglytuff',
            pokedexId: 40,
            type: { connect: { name: 'Normal' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png',
            lifePoints: 140,
            size: 1.0,
            weight: 12.0,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Zubat',
            pokedexId: 41,
            type: { connect: { name: 'Poison' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png',
            lifePoints: 40,
            size: 0.8,
            weight: 7.5,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Golbat',
            pokedexId: 42,
            type: { connect: { name: 'Poison' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png',
            lifePoints: 75,
            size: 1.6,
            weight: 55.0,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Oddish',
            pokedexId: 43,
            type: { connect: { name: 'Water' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png',
            lifePoints: 45,
            size: 0.5,
            weight: 5.4,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Gloom',
            pokedexId: 44,
            type: { connect: { name: 'Water' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png',
            lifePoints: 60,
            size: 0.8,
            weight: 8.6,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Vileplume',
            pokedexId: 45,
            type: { connect: { name: 'Water' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png',
            lifePoints: 75,
            size: 1.2,
            weight: 18.6,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Paras',
            pokedexId: 46,
            type: { connect: { name: 'Bug' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png',
            lifePoints: 35,
            size: 0.3,
            weight: 5.4,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Parasect',
            pokedexId: 47,
            type: { connect: { name: 'Bug' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png',
            lifePoints: 60,
            size: 1.0,
            weight: 29.5,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Venonat',
            pokedexId: 48,
            type: { connect: { name: 'Bug' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png',
            lifePoints: 60,
            size: 1.0,
            weight: 30.0,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Venomoth',
            pokedexId: 49,
            type: { connect: { name: 'Bug' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png',
            lifePoints: 70,
            size: 1.5,
            weight: 12.5,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Diglett',
            pokedexId: 50,
            type: { connect: { name: 'Ground' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png',
            lifePoints: 10,
            size: 0.2,
            weight: 0.8,
        },
    });
    await prisma.pokemonCard.create({
        data: {
            name: 'Dugtrio',
            pokedexId: 51,
            type: { connect: { name: 'Ground' } },
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png',
            lifePoints: 35,
            size: 0.7,
            weight: 33.3,
        },
    });

    console.log('Seed completed!');
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
