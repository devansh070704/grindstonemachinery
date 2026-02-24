import urllib.request
import re
import os
import json
import time

def get_html(url):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response:
            return response.read().decode('utf-8', errors='ignore')
    except Exception as e:
        print(f"Error {url}: {e}")
        return None

def parse_product(html, url):
    product = {}
    id_match = re.search(r'product-(\d+)\.html', url)
    product['id'] = id_match.group(1) if id_match else "unknown"
    
    name_match = re.search(r'<h1[^>]*>(.*?)</h1>', html, re.S)
    product['name'] = name_match.group(1).strip() if name_match else "Unknown Product"
    
    price_match = re.search(r'class="bo r-p[^>]*>([^<]+)', html)
    product['price'] = price_match.group(1).strip() if price_match else "Call for Price"
    
    desc_match = re.search(r'id="description"[^>]*>(.*?)</div>', html, re.S)
    if desc_match:
        product['fullDescription'] = [line.strip() for line in re.findall(r'<p[^>]*>(.*?)</p>', desc_match.group(1), re.S) if line.strip()]
    else:
        product['fullDescription'] = ["Quality industrial product from Grindstone Machinery Industries."]

    specs = []
    table_match = re.search(r'<table[^>]*class="table"[^>]*>(.*?)</table>', html, re.S)
    if table_match:
        rows = re.findall(r'<tr>(.*?)</tr>', table_match.group(1), re.S)
        for row in rows:
            cols = re.findall(r'<td[^>]*>(.*?)</td>', row, re.S)
            if len(cols) >= 2:
                label = re.sub('<[^>]+>', '', cols[0]).strip()
                value = re.sub('<[^>]+>', '', cols[1]).strip()
                specs.append({"label": label, "value": value})
    product['specifications'] = specs

    # Images
    imgs = re.findall(r'https://5.imimg.com/data5/[^"]+?\.(?:jpg|png|jpeg)', html)
    product['images'] = sorted(list(set(imgs)))
    
    return product

# IDs to scrape (the 11 new ones)
new_ids = [
    "2853081678055", "2856515549712", "2856515582697", "2856515656912",
    "2856515657055", "2856515699048", "2856515699130", "2856515699288",
    "2856869016597", "2856869062055", "2856893019055"
]

results = []
for i, pid in enumerate(new_ids):
    url = f"https://www.indiamart.com/proddetail/product-{pid}.html"
    print(f"[{i+1}/{len(new_ids)}] Scraping {url}...")
    html = get_html(url)
    if html:
        results.append(parse_product(html, url))
    time.sleep(1)

with open('new_products.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, indent=2)

print(f"Scraped {len(results)} items.")
