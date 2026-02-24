import urllib.request
import re
import os

def get_links(url):
    headers = {'User-Agent': 'Mozilla/5.0'}
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8', errors='ignore')
            # Extract proddetail links
            return re.findall(r'https?://www.indiamart.com/proddetail/[^\s<>"]+?\.html', html)
    except Exception as e:
        print(f"Error {url}: {e}")
        return []

categories = [
    "https://www.indiamart.com/grindstonemachineryindustries/grinding-machine.html",
    "https://www.indiamart.com/grindstonemachineryindustries/magnetic-separator.html",
    "https://www.indiamart.com/grindstonemachineryindustries/angle-dresser.html",
    "https://www.indiamart.com/grindstonemachineryindustries/job-work.html",
    "https://www.indiamart.com/grindstonemachineryindustries/polishing-machine.html",
    "https://www.indiamart.com/grindstonemachineryindustries/wheel-balancer.html",
    "https://www.indiamart.com/grindstonemachineryindustries/belt-driven-spindle.html",
    "https://www.indiamart.com/grindstonemachineryindustries/painting-services.html",
    "https://www.indiamart.com/grindstonemachineryindustries/industrial-painting-service.html",
    "https://www.indiamart.com/grindstonemachineryindustries/machine-brush.html",
    "https://www.indiamart.com/grindstonemachineryindustries/products-and-services.html"
]

all_links = set()
for cat in categories:
    print(f"Scanning {cat}...")
    links = get_links(cat)
    for l in links: all_links.add(l)

print(f"\nFound {len(all_links)} unique product links:")
for l in sorted(list(all_links)):
    print(l)
