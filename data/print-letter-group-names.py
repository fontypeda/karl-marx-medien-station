
"""
Prints the article selection for each city
"""
import lxml.etree as etree

cities = ["trier", "bonnberlin", "koeln", "paris", "manchester", "bruessel", "london"]

with open("briefgruppen-namen.txt", "w+") as fh:
	for city in cities:
		fh.write(40 * "#" + "\n")
		fh.write(city + "\n")
		fh.write(40 * "#" + "\n")
		doc = etree.parse("letters-" + city + ".xml")
		root = doc.getroot()
		for letter_group in root:
			fh.write(letter_group.find("name").text + "\n")
