"""over all biographies and prints all entries that do not have a portrait
value in portrait-list"""

import os
import lxml.etree as etree



doc = etree.parse("biographies.xml")
root = doc.getroot()

error_cnt = 0
assigned_slugs = []

missing_names = []

for bio_idx, biographie in enumerate(root):
    name = biographie.find("name").text
    slug = biographie.find("slug").text
    if not os.path.exists("./portraits-peter/" + slug + ".jpg"):
        missing_names.append(name)

print("Found " + str(len(missing_names)) + " names")
for missing_name in missing_names:
    print(missing_name)
