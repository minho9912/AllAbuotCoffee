import json

import crawler2 as crawl2
import pars2 as parse2

pageString = crawl2.crawl('')
products = parse2.parse(pageString)

print(products)
print(len(products))

file = open("../himart2.json","w+")
file.write(json.dumps(products))