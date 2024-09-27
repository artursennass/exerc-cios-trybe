def get_bigger_number (x, y):
    if x > y:
        return x
    elif y > x:
        return y
    else:
        return 'they are equal'


# print(get_bigger_number(2, 3))
# print(get_bigger_number(6, 4))
# print(get_bigger_number(2, 2))


def mean_value (list):
    return sum(list) / len(list)


# print(mean_value([1, 2, 3, 4, 5]))


def print_asterisk_piramid (n):
    final_square = ''

    for line in range(1, n+1):
        final_square += (line * '*') + '\n'
    
    return final_square


def print_asterisk (n):
    final_square = ''

    for line in range(1, n+1):
        final_square += (n * '*') + '\n'
    
    return final_square


# print(print_asterisk(4))
# print(print_asterisk_piramid(5))

def get_bigger_name (name_list):
    bigger_name = ''

    for name in name_list:
        if len(name) > len(bigger_name):
            bigger_name = name

    return bigger_name


# print(get_bigger_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))

import math

def total_paint_amount (area):
    l_needed = math.ceil(area / 3)

    cans_needed = math.ceil(l_needed / 18)

    total_price = cans_needed * 80

    return (cans_needed, total_price)

# print(total_paint_amount(60))


def is_triangle (a, b, c):
    a_plus_b = a + b

    if a_plus_b > c:
        if a == b == c:
            return 'Equilátero'
        if a == b != c:
            return 'Isósceles'
        if a != b != c:
            return 'Escaleno'
    else:
        return 'Não é um triângulo'

# print(is_triangle(2, 3, 6))
# print(is_triangle(2, 2, 2))
# print(is_triangle(2, 2, 3))
# print(is_triangle(2, 3, 4))


def get_smaller_number (x, y):
    if x < y:
        return x
    elif y < x:
        return y
    else:
        return 'they are equal'


# print(get_smaller_number(2, 3))
# print(get_smaller_number(6, 4))
# print(get_smaller_number(2, 2))


def sum_all_until (n):
    total = 0
    for number in range(1, n + 1):
        total += number
    
    return total

# print(sum_all_until(5))


def descount_fuel (liters, fuel):
    a_price = 1.9
    g_price = 2.5

    if fuel == 'A':
        if liters < 20:
            return round((a_price * 0.97) * liters, 2)
        else:
            return round((a_price * 0.95) * liters, 2)
    
    if fuel == 'G':
        if liters < 20:
            return round((g_price * 0.96) * liters, 2)
        else:
            return round((g_price * 0.94) * liters, 2)
        
# print(descount_fuel(10, 'A'))
# print(descount_fuel(22, 'A'))
# print(descount_fuel(10, 'G'))
# print(descount_fuel(22, 'G'))