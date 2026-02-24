import re
import json

def fix_ts():
    file_path = 'data/products.ts'
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract all JSON-like objects that look like products
    # We look for objects with "id": "..."
    # This regex is a bit loose but should work for our structure
    product_blocks = re.findall(r'\{\s+"id": "(285\d{10})".*?\s+\}', content, re.S)
    
    unique_products = {}
    
    # Let's try to parse each identified block
    # We use regex to extract fields since the blocks might not be perfect JSON inside TS
    for block in re.findall(r'\{[^{}]*?"id":\s*"(285\d{10})"[^{}]*?\}', content, re.S):
        try:
            # Clean up the block to make it valid JSON if possible
            # Or just extract fields via regex
            pid = re.search(r'"id":\s*"(285\d{10})"', block).group(1)
            if pid in unique_products: continue
            
            name = re.search(r'"name":\s*"(.*?)"', block).group(1)
            cat = re.search(r'"category":\s*"(.*?)"', block).group(1)
            # Use "On Inquiry Only" for price as per user request
            price = "On Inquiry Only"
            
            shortDesc = re.search(r'"shortDescription":\s*"(.*?)"', block)
            shortDesc = shortDesc.group(1) if shortDesc else "Precision industrial solution."
            
            # Full description
            fullDesc_match = re.search(r'"fullDescription":\s*\[(.*?)\]', block, re.S)
            fullDesc = []
            if fullDesc_match:
                fullDesc = re.findall(r'"(.*?)"', fullDesc_match.group(1))
            
            # Features
            features_match = re.search(r'"features":\s*\[(.*?)\]', block, re.S)
            features = []
            if features_match:
                features = re.findall(r'"(.*?)"', features_match.group(1))
                
            # Specs
            specs_match = re.search(r'"specifications":\s*(\[.*?\])', block, re.S)
            specs = []
            if specs_match:
                try:
                    specs = json.loads(specs_match.group(1))
                except:
                    specs = []
            
            # Images
            mainImage = re.search(r'"mainImage":\s*"(.*?)"', block)
            mainImage = mainImage.group(1) if mainImage else f"/images/high-res/{pid}-0.jpg"
            
            gallery_match = re.search(r'"gallery":\s*\[(.*?)\]', block, re.S)
            gallery = []
            if gallery_match:
                gallery = re.findall(r'"(.*?)"', gallery_match.group(1))
            
            unique_products[pid] = {
                "id": pid,
                "name": name,
                "category": cat,
                "price": price,
                "shortDescription": shortDesc,
                "fullDescription": fullDesc,
                "features": features,
                "specifications": specs,
                "mainImage": mainImage,
                "gallery": gallery
            }
        except Exception as e:
            # print(f"Error parsing block: {e}")
            pass

    # Sort products by category and name
    sorted_products = sorted(unique_products.values(), key=lambda x: (x['category'], x['name']))

    header = """export interface Product {
    id: string;
    name: string;
    category: string;
    price: string;
    shortDescription: string;
    fullDescription: string[];
    features: string[];
    specifications: { label: string; value: string }[];
    mainImage: string;
    gallery: string[];
    brochureUrl?: string;
}

export const products: Product[] = """

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(header)
        json.dump(sorted_products, f, indent=2)
        f.write(";")

    print(f"File rebuilt with {len(sorted_products)} unique products.")

if __name__ == "__main__":
    fix_ts()
