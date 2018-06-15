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


doc = etree.parse("letters-" + city + ".xml")
root = doc.getroot()

letters = []

for letter_group_idx, letter_group in enumerate(root):
    curr_letter_group = {}
    curr_letter_group["slug"] = letter_group.find("slug").text
    curr_letter_group["name"] = {}
    curr_letter_group["name"]["de"] = letter_group.find("name").text
    curr_letter_group["name"]["en"] = letter_group.find("name_en").text
    curr_letter_group["letters"] = []
    sub_letters = letter_group.find("letters")
    group_has_english = False
    for letter_idx, letter in enumerate(sub_letters):
        curr_letter = {}
        curr_letter["de"] = {}
        curr_letter["de"]["title"] = letter.find("title").text
        curr_letter["de"]["content"] = split_paras(letter.find("content").text)

        curr_letter["en"] = {}
        curr_letter["en"]["title"] = letter.find("title_en").text
        curr_letter["en"]["content"] = split_paras(letter.find("content_en").text)
        curr_letter["source"] = letter.find("source").text
        curr_letter_group["letters"].append(curr_letter)

        curr_letter["has_en"] = node_has_english(letter)
        if curr_letter["has_en"]:
            group_has_english = True
    curr_letter_group["has_en"] = group_has_english

    letters.append(curr_letter_group)

# for letter in letters:
#     print(letter)

with open(os.path.join(VAR_DIR, "letters.ts"), "w+") as fh:
    fh.write("export const letters = ")
    fh.write(json.dumps(letters, ensure_ascii=False, indent=7))
