"""Iterates biography.xml and write all portraits slugs to
human readable file names"""


import os
import lxml.etree as etree

TMP_PIC_PATH = "/tmp/pics"

PIC_BASE_PATH = "../src/assets/portraits/"
EXT = ".jpg"

doc = etree.parse("biographies.xml")
root = doc.getroot()

if not os.path.exists(TMP_PIC_PATH):
    os.makedirs(TMP_PIC_PATH)

for bio_idx, biographie in enumerate(root):
    slug = biographie.find("slug").text
    name = biographie.find("name").text.strip().replace(" ", "_")
    if slug is not None:
        pic_path = os.path.join(PIC_BASE_PATH, slug + EXT)
        print(pic_path)
        if os.path.exists(pic_path):
            with open(pic_path, "rb") as fh:
                cont = fh.read()
                with open(os.path.join(
                    TMP_PIC_PATH,
                    name + EXT
                ), "wb+") as fh_out:
                    fh_out.write(cont)
