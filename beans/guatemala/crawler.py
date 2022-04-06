import requests

def crawl(keyworld):
  url = "http://www.e-himart.co.kr/app/search/totalSearch?query=%EA%B3%BC%ED%85%8C%EB%A7%90%EB%9D%BC%20%EC%9B%90%EB%91%90&optChk=&FROM=WEBTOP"
  data = requests.get(url)
  print(data.status_code, url)
  return data.content
