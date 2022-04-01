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

  # aImg = li.findAll("a", {"class":"thumbnail_thumb__3Agq6"})


  # aSrc = aImg['img']
  # asrcCode = aSrc['src']

  # priceNum = li.find("span", {"class":"price_num__2WUXn"})
  # aTit = li.find("a",{"class":"basicList_link__1MaTN"})
  # aHref = aTit['href']
  # return {"img":aImg,"brand":alt, "name":aTit.text.replace(",",""),"price":priceNum.text.replace(",",""),"link":aHref}
  return {"img":imgSrc, "alt": alt, 'link': aHref , 'price': priceNum.text.replace(",","")}


def parse(pageString):
  bs0bj = BeautifulSoup(pageString, "html.parser")
  # ul = bs0bj.find("ul", {"class":"list_basis"})
  ul = bs0bj.find("ul", {"class":"thumnailType"})
  # lis = ul.findAll("li", {"class":"basicList_item__2XT81"})
  lis = ul.findAll("li")

  products = []
  for li in lis[:5]:
      product = getProductInfo(li)
      products.append(product)

  return products
