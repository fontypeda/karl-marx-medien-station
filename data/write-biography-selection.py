
import json
import sys
import lxml.etree as etree


def node_has_english(biographie):
    # if biographie.find("title_en").text is None:
    #     return False
    if biographie.find("content_en").text is None:
        return False
    return True


if len(sys.argv) == 1:
    print("You have to pass an argument (city)")
    sys.exit(1)

city = sys.argv[1]


doc = etree.parse("biographies.xml")
root = doc.getroot()

bio_dict = {}

biographies = []

for bio_idx, biographie in enumerate(root):
    curr_bio = {}

    slug = biographie.find("slug").text
    name = biographie.find("name").text
    # check for english name, if non existing use german
    try:
        name_en = biographie.find("name_en").text
        if name_en is None:
            name_en = name
    except Exception:
        name_en = name

    has_english = node_has_english(biographie)
    bio_dict[slug] = {
        "slug": slug,
        "name": {
            "de": name,
            "en": name_en
        },
        "has_en": has_english
    }


bio_selection = []

doc = etree.parse("biography-selection-" + city + ".xml")
root = doc.getroot()

for city in root:
    curr_city_bios = {}
    curr_city_bios["city_name"] = city.find("name").text
    curr_city_bios["city_slug"] = city.find("slug").text
    curr_city_bios["bios"] = []
    for slug in city.find("slugs"):
        slug_val = slug.text.strip()
        curr_city_bios["bios"].append(bio_dict[slug_val])
    bio_selection.append(curr_city_bios)

with open("../src/app/vars/biographies-selection.ts", "w+") as fh:
    fh.write("export const bioSelection = ")
    fh.write(json.dumps(bio_selection, ensure_ascii=False, indent=7))
