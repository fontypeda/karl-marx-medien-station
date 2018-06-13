"""Iterates and validates the generated biography.xml for possible errors
(duplicate slug/names) missing titles etc."""

import csv
import lxml.etree as etree


def log_error(msg, biographie, bio_idx):
    print(80 * "#")
    print("FATAL ERROR")
    print(msg)
    print(80 * "*")
    print(etree.tostring(biographie).decode("utf8"))
    print(80 * "#")
    print("Bio-Index: " + str(bio_idx))
    print()


doc = etree.parse("biographies.xml")
root = doc.getroot()

error_cnt = 0
assigned_slugs = []

with open("slug-name-list.csv", "w+") as fh:
    writer = csv.writer(fh)
    for bio_idx, biographie in enumerate(root):
        name = biographie.find("name").text
        slug = biographie.find("slug").text
        writer.writerow([name, slug])
