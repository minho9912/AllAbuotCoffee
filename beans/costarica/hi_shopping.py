import json

import crawler as crawl
import pars as parse

pageString = crawl.crawl('')
products = parse.parse(pageString)


file = open("./costarica.json","w+")
file.write(json.dumps(products))