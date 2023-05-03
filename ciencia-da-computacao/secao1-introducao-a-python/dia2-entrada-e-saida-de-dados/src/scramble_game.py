import random

with open("words.txt", "r") as file:
    words_txt = file.read()
    words_list = words_txt.split('\n')


def scrambled_word_game ():
    word = random.choice(words_list)
    
    scrambled_word = "".join(random.sample(word, len(word)))

    print(scrambled_word)

    guess = input("(tentativa 1) Qual palavra é essa? ")

    tries = 2

    while (tries <= 3):
        if guess == word:
            print('Palavra certa!')
            tries = 10
        else:
            guess = input(f"(tentativa {tries}) Qual palavra é essa? ")
            tries += 1

    if tries == 4:
        print(f'You failed! The word is: {word}')


scrambled_word_game()