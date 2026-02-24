import urllib.request
import re
import os

def get_ids(url):
    headers = {'User-Agent': 'Mozilla/5.0'}
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8', errors='ignore')
            # Look for 13 digit IDs starting with 285
            return set(re.findall(r'285\d{10}', html))
    except Exception as e:
        print(f"Error {url}: {e}")
        return set()

cats = [
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

all_ids = set()
for cat in cats:
    print(f"Scanning {cat} for IDs...")
    ids = get_ids(cat)
    for i in ids: all_ids.add(i)

print(f"\nFound {len(all_ids)} unique product IDs.")
for i in sorted(list(all_ids)):
    # Construct a probe URL (IndiaMART allows ID only proddetail)
    print(f"https://www.indiamart.com/proddetail/product-{i}.html")
