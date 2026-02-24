import json
import re
import os

def clean_name(name):
    return re.sub(r'<[^>]+>', '', name).strip()

def merge():
    try:
        with open('data/products.ts', 'r', encoding='utf-8') as f:
            ts_content = f.read()
            # Match current array content
            match = re.search(r'export const products: Product\[\] = \[(.*)\];', ts_content, re.S)
            if not match:
                print("Could not find products array.")
                return
            
            # I'll just append to the array string before the ];
            # But let's load the new products first
            with open('new_products.json', 'r', encoding='utf-8') as f:
                new_products = json.load(f)
            
            new_entries = ""
            for p in new_products:
                # Basic template for the new entry
                entry = f"""
  {{
    "id": "{p['id']}",
    "name": "{clean_name(p['name'])}",
    "category": "{ "Industrial Services" if "Painting" in p['name'] else "Spindle Technology" if "Spindle" in p['name'] else "Precision Accessories" }",
    "price": "Inquiry Only",
    "shortDescription": "High-quality industrial component from Grindstone Machinery Industries.",
    "fullDescription": [
      "The {clean_name(p['name'])} is a high-performance solution designed for industrial precision and durability.",
      "Engineered by Grindstone Machinery Industries, this solution meets the highest standards of the manufacturing sector."
    ],
    "features": [
      "High Precision",
      "Durable Design",
      "Industrial Grade"
    ],
    "specifications": {json.dumps(p.get('specifications', []), indent=2)},
    "mainImage": "/images/high-res/{p['id']}-0.jpg",
    "gallery": []
  }},"""
                new_entries += entry
            
            # Find the last ];
            new_content = ts_content.replace('];', new_entries + '\n];')
            
            with open('data/products.ts', 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            print(f"Added {len(new_products)} products.")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    merge()
