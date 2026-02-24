import urllib.request
import re
import os

def download_and_scan(url, filename):
    headers = {'User-Agent': 'Mozilla/5.0'}
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response:
            content = response.read().decode('utf-8', errors='ignore')
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(content)
            # Find all proddetail links
            links = re.findall(r'/proddetail/([^\s<>"]+?\.html)', content)
            return set(links)
    except Exception as e:
        print(f"Error {url}: {e}")
        return set()

# Main categories to scan
cats = [
    "https://www.indiamart.com/grindstonemachineryindustries/products-and-services.html",
    "https://www.indiamart.com/grindstonemachineryindustries/grinding-machine.html"
]

all_links = set()
for i, url in enumerate(cats):
    print(f"Scanning {url}...")
    links = download_and_scan(url, f"cat_{i}.html")
    for l in links:
        all_links.add(f"https://www.indiamart.com/proddetail/{l}")

print(f"Found {len(all_links)} proddetail links.")
for l in sorted(list(all_links)):
    print(l)
