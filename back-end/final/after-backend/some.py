import requests

url = "https://api.atra.io/prod/v1"

headers = {
    'Content-Type': 'application/json',
    'x-api-key': 'bckXY2gM1r7GUXjUtOztaayJsGjPmcKw68nrHw7V',
    
}

response = requests.post(url,  headers = headers)
data = response.json()
print(data)
