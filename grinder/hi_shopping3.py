import json

import crawler3 as crawl3
import pars3 as parse3

pageString = crawl3.crawl('')
products = parse3.parse(pageString)

print(products)
print(len(products))

file = open("./himart3.json","w+")
file.write(json.dumps(products))