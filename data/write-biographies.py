"""Writes the biography file to the vars
directory"""

import json
import os
import lxml.etree as etree


def node_has_english(biographie):
    # if biographie.find("title_en").text is None:
    #     return False
    if biographie.find("content_en").text is None:
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

doc = etree.parse("biographies.xml")
root = doc.getroot()

biographies = []

for bio_idx, biographie in enumerate(root):
    curr_bio = {}
    curr_bio["slug"] = biographie.find("slug").text
    curr_bio["name"] = biographie.find("name").text
    curr_bio["lifespan"] = biographie.find("lifespan").text
    curr_bio["birth"] = biographie.find("birth").text
    curr_bio["death"] = biographie.find("death").text

    curr_bio["de"] = {}
    curr_bio["de"]["title"] = biographie.find("title").text
    curr_bio["de"]["content"] = split_paras(biographie.find("content").text)

    curr_bio["en"] = {}
    curr_bio["en"]["title"] = biographie.find("title_en").text
    curr_bio["en"]["content"] = split_paras(biographie.find("content_en").text)

    curr_bio["has_english"] = node_has_english(biographie)

    biographies.append(curr_bio)


with open(os.path.join(VAR_DIR, "biographies.ts"), "w+") as fh:
    fh.write("export const biographies = ")
    fh.write(json.dumps(biographies, ensure_ascii=False))
