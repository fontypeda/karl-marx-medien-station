"""Iterates and validates the generated biography.xml for possible errors
(duplicate slug/names) missing titles etc."""

import lxml.etree as etree


def log_error(msg, biographie, bio_idx):
    print(80 * "#")
    print("FATAL ERROR")
    print(msg)
    print(80 * "*")
    print("Name: " + biographie.find("name").text)
    # print(etree.tostring(biographie).decode("utf8"))
    print(80 * "#")
    print("Bio-Index: " + str(bio_idx))
    print()


doc = etree.parse("biographies.xml")
root = doc.getroot()

error_cnt = 0
assigned_slugs = []

for bio_idx, biographie in enumerate(root):
    name = biographie.find("name").text
    slug = biographie.find("slug").text
    if slug is None:
        log_error("No slug in the following biography: ", biographie, bio_idx)
        error_cnt += 1
        continue

    if slug not in assigned_slugs:
        assigned_slugs.append(slug)

    else:
        log_error("Slug already assigned: " + slug, biographie, bio_idx)
        error_cnt += 1

    if name is None:
        log_error("No name in the following biography: ", biographie, bio_idx)
        error_cnt += 1

print("Parsed " + str(len(root.getchildren())) + " biographies")
print("Found " + str(error_cnt) + " errors.")
