import urllib.request
import gzip
import re
import io

def get_html_decompressed(url):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept-Encoding': 'gzip, deflate, br'
    }
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response:
            encoding = response.info().get('Content-Encoding')
            content = response.read()
            
            if encoding == 'gzip':
                content = gzip.decompress(content)
            elif encoding == 'br':
                try:
                    import brotli
                    content = brotli.decompress(content)
                except ImportError:
                    print("Brotli not installed, skipping decompression.")
            
            return content.decode('utf-8', errors='ignore')
    except Exception as e:
        print(f"Error {url}: {e}")
        return ""

# Test with main page
url = "https://www.indiamart.com/grindstonemachineryindustries/products-and-services.html"
html = get_html_decompressed(url)
if html:
    print(f"Successfully downloaded and decompressed {url}")
    # Extract IDs
    ids = set(re.findall(r'(\d{13})', html))
    print(f"Found {len(ids)} unique 13-digit IDs.")
    with open('debug_ps.html', 'w', encoding='utf-8') as f:
        f.write(html)
else:
    print("Failed to get HTML.")
