import requests

def crawl(keyworld):
  url = "http://www.e-himart.co.kr/app/search/totalSearch?query=%EC%BC%80%EB%83%90%20%EC%9B%90%EB%91%90&optChk=&FROM=WEBTOP"
  data = requests.get(url)
  print(data.status_code, url)
  return data.content
