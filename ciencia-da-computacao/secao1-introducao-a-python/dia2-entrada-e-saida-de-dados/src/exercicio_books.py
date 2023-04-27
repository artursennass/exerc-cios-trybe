import csv
import json

with open("data.books.json", "r") as file:
    content = file.read()
    books = json.loads(content)


books_categories_total = {}


for book in books:
    for categorie in book['categories']:
        no_space_categorie = categorie.replace(" ", "_")
        if no_space_categorie not in books_categories_total:
            books_categories_total[no_space_categorie] = 0
        books_categories_total[no_space_categorie] += 1


books_categories_percentage = {}


for categorie in books_categories_total:
    books_categories_percentage[categorie] = books_categories_total[categorie] / len(books)


with open("books.csv", "w",  encoding = "utf-8") as file:
    writer = csv.writer(file)
    headers = [
        "Categoria",
        "Porcentagem",
    ]
    writer.writerow(headers)
    for categorie, percentage in books_categories_percentage.items():
        spaced_categorie = categorie.replace("_", " ")

        row = [
            spaced_categorie,
            percentage,
        ]
        writer.writerow(row)
