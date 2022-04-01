import requests

def crawl(keyworld):
  url = "http://www.e-himart.co.kr/app/search/totalSearch?query=%EC%BB%A4%ED%94%BC%EB%A9%94%EC%9D%B4%EC%BB%A4&optChk=&FROM=WEBTOP"
  data = requests.get(url)
  print(data.status_code, url)
  return data.content
