"""Writes the biography file to the vars
directory"""

import json
import os
import sys

import lxml.etree as etree


def split_paras(text_content):
    if text_content is None:
        return []
    paras = text_content.split("\n")
    paras = [para.strip() for para in paras]
    paras = [para for para in paras if para != ""]
    return paras


VAR_DIR = "../src/app/vars/"
XML_DIR = "archive/"
if len(sys.argv) == 1:
    print("You have to pass an argument (city)")
    sys.exit(1)

city = sys.argv[1]


doc = etree.parse(XML_DIR + "archive-" + city + ".xml")
root = doc.getroot()

sources = []

for source_idx, source in enumerate(root):
    curr_source = {}
    curr_source["zoomFile"] = source.find("zoom-file").text
    curr_source["sourceInfo"] = source.find("source-info").text
    curr_source["transcription"] = split_paras(source.find("transcription").text)
    sources.append(curr_source)

with open(os.path.join(VAR_DIR, "sources.ts"), "w+") as fh:
    fh.write("export const sources = ")
    fh.write(json.dumps(sources, ensure_ascii=False, indent=7))
