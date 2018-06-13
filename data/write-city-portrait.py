"""Writes the biography file to the vars
directory"""

import json
import os
import sys

import lxml.etree as etree


def node_has_english(node):
    if node.find("title_en").text is None:
        return False
    if node.find("content_en").text is None:
        return False
    return True


def split_paras(text_content):
    if text_content is None:
        return []
    paras = text_content.split("\n")
    paras = [para.strip() for para in paras]
    paras = [para for para in paras if para != ""]
    return paras


VAR_DIR = "../src/app/vars/"

if len(sys.argv) == 1:
    print("You have to pass an argument (city)")
    sys.exit(1)

city = sys.argv[1]


doc = etree.parse("city-portrait-" + city + ".xml")
root = doc.getroot()

cities = []

for city_group_idx, city_group in enumerate(root):
    curr_city_group = {}
    curr_city_group["slug"] = city_group.find("slug").text
    curr_city_group["name"] = city_group.find("city-name").text
    curr_city_group["articles"] = []
    sub_cities = city_group.find("city-articles")
    for city_idx, city in enumerate(sub_cities):
        curr_city = {}
        curr_city["de"] = {}
        curr_city["de"]["title"] = city.find("title").text
        curr_city["de"]["content"] = split_paras(city.find("content").text)

        curr_city["en"] = {}
        curr_city["en"]["title"] = city.find("title_en").text
        curr_city["en"]["content"] = split_paras(city.find("content_en").text)
        curr_city_group["articles"].append(curr_city)

    curr_city["has_english"] = node_has_english(city)

    cities.append(curr_city_group)

# for city in citys:
#     print(city)

with open(os.path.join(VAR_DIR, "city-portrait.ts"), "w+") as fh:
    fh.write("export const cities = ")
    fh.write(json.dumps(cities, ensure_ascii=False, indent=7))
