from itertools import product
from lib2to3.pgen2.token import AT
from bs4 import BeautifulSoup


def getProductInfo(li):
  # print(li)
  img = li.find("img")
  alt = img['alt']
  imgSrc = img['src']
  aTag = li.find("a", {"class":"prdLink"})
  aHref = aTag['href']

  priceNum = li.find("span", {"class":"discountPrice"})


  return {"img":imgSrc, "alt": alt, 'link': aHref , 'price': priceNum.text.replace(",","")}


def parse(pageString):
  bs0bj = BeautifulSoup(pageString, "html.parser")
  ul = bs0bj.find("ul", {"class":"thumnailType"})
  lis = ul.findAll("li")

  products = []
  for li in lis[:5]:
      product = getProductInfo(li)
      products.append(product)

  return products
