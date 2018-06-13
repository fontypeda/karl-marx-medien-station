"""Iterates biography.xml and checks for all slugs if bio-pic exists"""


import os
import lxml.etree as etree


PIC_BASE_PATH = "../src/assets/portraits/"
EXT = ".jpg"


doc = etree.parse("biographies.xml")
root = doc.getroot()


for bio_idx, biographie in enumerate(root):
    slug = biographie.find("slug").text
    if slug is not None:
        pic_path = os.path.join(PIC_BASE_PATH, slug + EXT)
        print(pic_path)
        if not os.path.exists(pic_path):
            print(80 * "#")
            print("FATAL: No portrait for " + slug)
            print()
