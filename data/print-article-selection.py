
"""
Prints the article selection for each city
"""
import lxml.etree as etree

cities = ["trier", "bonnberlin", "koeln", "paris", "manchester", "bruessel", "london"]

with open("artikel-reihenfolge.txt", "w+") as fh:
	for city in cities:
		print(city)
		doc = etree.parse("city-portrait-" + city + ".xml")
		root = doc.getroot()
		for city_group in root:
			fh.write(40 * "#" + "\n")
			articles = city_group.find("city-articles")
			for article in city_group.find("city-articles"):
				fh.write(article.find("title").text + "\n")
