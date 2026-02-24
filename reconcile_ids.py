import re
import os

def get_ts_ids(file_path):
    ids = set()
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            ids = set(re.findall(r'"id": "(\d{13})"', content))
    return ids

def get_scraped_ids(file_path):
    ids = set()
    if os.path.exists(file_path):
        try:
            # Try UTF-16 first as we saw before
            with open(file_path, 'rb') as f:
                content = f.read().decode('utf-16')
        except:
            with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
        ids = set(re.findall(r'(\d{13})', content))
    return ids

ts_file = 'data/products.ts'
scraped_file = 'all_ids.txt'

ts_ids = get_ts_ids(ts_file)
scraped_ids = get_scraped_ids(scraped_file)

new_ids = scraped_ids - ts_ids

print(f"IDs in products.ts: {len(ts_ids)}")
print(f"IDs found in scans: {len(scraped_ids)}")
print(f"New IDs identified: {len(new_ids)}")

if new_ids:
    print("\nListing New Product URLs for Scraping:")
    for nid in sorted(list(new_ids)):
        print(f"https://www.indiamart.com/proddetail/product-{nid}.html")
