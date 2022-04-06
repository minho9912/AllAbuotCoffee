import requests

def crawl(keyworld):
  url = "http://www.e-himart.co.kr/app/search/totalSearch?query=%EC%BD%94%EC%8A%A4%ED%83%80%EB%A6%AC%EC%B9%B4%20%EC%9B%90%EB%91%90&optChk=&FROM=WEBTOP"
  data = requests.get(url)
  print(data.status_code, url)
  return data.content
