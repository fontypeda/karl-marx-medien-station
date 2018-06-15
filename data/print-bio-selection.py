
"""
Prints the biography selection for each city
"""
import lxml.etree as etree

slug_dict = {}
doc = etree.parse("biographies.xml")
root = doc.getroot()

for bio_idx, biographie in enumerate(root):
    slug = biographie.find("slug").text
    name = biographie.find("name").text
    slug_dict[slug] = name

cities = ["trier", "bonnberlin", "koeln", "paris",
    "manchester", "bruessel", "london"]

with open("biographie-reihenfolge.txt", "w+") as fh:
    for city_id in cities:
        print(city_id)
        doc = etree.parse("biography-selection-" + city_id + ".xml")
        root = doc.getroot()
        for city in root:
            print(city)
            fh.write(80 * "#" + "\n")
            fh.write(city.find("name").text + "\n")
            slugs = city.find("slugs")
            if slugs is not None:
                for slug in city.find("slugs"):
                    fh.write(slug_dict[slug.text] + "\n")
            else:
                print("Keine Biographien ausgewählt")
