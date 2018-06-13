
import csv
import re
import sys

with open("bio-text.txt") as fh:
    cont = fh.read()

slug_dict = {}
with open("slug-translation.csv") as fh:
    reader = csv.reader(fh)
    for row in reader:
        slug_dict[row[0].strip()] = row[1].strip()

all_jpgs = re.findall(">.*?\.jpg<", cont)
all_slugs = [jpg.rpartition("/")[2].rpartition(".")[0] for jpg in all_jpgs]

print(slug_dict)
missing_slugs = []
has_missing = False
for slug in all_slugs:
    if slug.lower() not in slug_dict:
        print("Missing Slug")
        print(slug.lower())
        has_missing = True

if not has_missing:
    for slug in all_slugs:
        print("<slug>" + slug_dict[slug] + "</slug>")
