"""Iterate over all biographies and make a slug list
check portraits-peter for any images not used by the application
(to find spell errors)"""

import glob
import os

import lxml.etree as etree


doc = etree.parse("biographies.xml")
root = doc.getroot()

error_cnt = 0
assigned_slugs = []

all_pics = glob.glob("portraits-peter/*jpg")
all_pics = [os.path.basename(pic).replace(".jpg", "") for pic in all_pics]

for bio_idx, biographie in enumerate(root):
    name = biographie.find("name").text
    slug = biographie.find("slug").text
    assigned_slugs.append(slug)


unused_pics = []
for pic in all_pics:
    if pic not in assigned_slugs:
        unused_pics.append(pic)

print("Found " + str(len(unused_pics)) + " unused pics")
for unused_pic in unused_pics:
    print(unused_pic)
