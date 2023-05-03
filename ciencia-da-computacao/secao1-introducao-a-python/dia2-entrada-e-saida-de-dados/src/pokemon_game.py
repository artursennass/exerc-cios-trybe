import json
import random


def retrieve_books(file):
    return json.load(file)["results"]


def pokemons_names (pokemons):
    names = []

    for pokemon in pokemons:
        names.append(pokemon['name'])
    
    return names


def pokemon_partial_name (pokemon, index):
    name = ''
    enumerate_pokemon = enumerate(pokemon)
    for i, pokemon_name in enumerate_pokemon:
        if i <= index:
            name += pokemon[i]

    return name


def pokemon_game (pokemons):
    pokemon = random.choice(pokemons)

    guess = input("Quem é esse pokemon? ")

    tries = 0

    while (tries < len(pokemon)):
        if guess == pokemon:
            print('Acertou!')
            tries = 100
        else:
            guess = input(f"(dica: '{pokemon_partial_name(pokemon, tries)}') Quem é esse pokemon? ")
            tries += 1

    if tries == len(pokemon):
        print(f'Não foi dessa vez! O pokemon era: {pokemon}')




if __name__ == "__main__":
    with open("pokemon.json") as file:
        pokemons = retrieve_books(file)


pokemon_game(pokemons_names(pokemons))