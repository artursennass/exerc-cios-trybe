def print_ladder_name (name):
    final_print = ''
    for position in range(1, len(name) + 1):
        to_print = ''
        
        size = len(name) - position
        
        for letter in range(0, size + 1):
            to_print += name[letter]
        
        to_print += '\n'
        final_print += to_print

    return final_print


name = input("Digite um nome: ")

print(print_ladder_name(name))