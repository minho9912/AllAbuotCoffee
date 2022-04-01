import requests

def crawl(keyworld):
  url = "http://www.e-himart.co.kr/app/search/totalSearch?query=%EB%93%9C%EB%A6%AC%ED%8D%BC&optChk=&FROM=WEBTOP"
  data = requests.get(url)
  print(data.status_code, url)
  return data.content
