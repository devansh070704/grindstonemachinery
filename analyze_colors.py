import sys
import subprocess

def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])

try:
    from PIL import Image
except ImportError:
    print("PIL not found, installing pillow...")
    try:
        install("pillow")
        from PIL import Image
    except Exception as e:
        print(f"Failed to install pillow: {e}")
        sys.exit(1)

from collections import Counter

def get_palette(image_path, n=5):
    try:
        image = Image.open(image_path)
        image = image.convert('RGB')
        # Resize to speed up processing
        image = image.thumbnail((150, 150))
        # Image.thumbnail modifies in place and returns None, so refer to image
        # checking if thumbnail worked or if we need resize
        if image is None: # thumbnail returns None
             image = Image.open(image_path).convert('RGB').resize((150,150))
             
        pixels = list(image.getdata())
        counts = Counter(pixels)
        common = counts.most_common(n)
        return [c[0] for c in common]
    except Exception as e:
        print(f"Error analyzing image: {e}")
        return []

def rgb_to_hex(rgb):
    return '#{:02x}{:02x}{:02x}'.format(rgb[0], rgb[1], rgb[2])

if __name__ == "__main__":
    palette = get_palette('public/logo.png')
    hex_palette = [rgb_to_hex(c) for c in palette]
    print("Dominant Colors:", hex_palette)
