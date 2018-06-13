"""Iterates biography.xml and checks for a name"""


import sys
import lxml.etree as etree

if len(sys.argv) == 1:
    print("You need to pass a name!")
    sys.exit(1)

target_name = sys.argv[1]

doc = etree.parse("biographies.xml")
root = doc.getroot()


for bio_idx, biographie in enumerate(root):
    name = biographie.find("name").text
    slug = biographie.find("slug").text
    title = biographie.find("title").text
    if name is not None:
        if name.lower() == target_name.lower():
            print("Found it!")
            print(etree.tostring(biographie).decode("utf8"))
            print(slug)
        if target_name.lower() in name.lower():
            print("Partly included in: ")
            print(name.lower())
            print(title)
            print(slug)
