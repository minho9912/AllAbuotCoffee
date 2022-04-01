import json

import crawler4 as crawl4
import pars4 as parse4

pageString = crawl4.crawl('')
products = parse4.parse(pageString)

print(products)
print(len(products))

file = open("./himart4.json","w+")
file.write(json.dumps(products))