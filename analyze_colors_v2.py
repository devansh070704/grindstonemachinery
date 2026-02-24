import sys
import subprocess
import colorsys

try:
    from PIL import Image
    from collections import Counter
except ImportError:
    print("PIL not installed")
    sys.exit(1)

def is_greyscale(rgb):
    # Check if R, G, B are close to each other
    return max(rgb) - min(rgb) < 20

def get_palette(image_path, n=20):
    try:
        image = Image.open(image_path)
        image = image.convert('RGB')
        image.thumbnail((150, 150))
        pixels = list(image.getdata())
        counts = Counter(pixels)
        common = counts.most_common(n)
        
        print("--- Top Colors ---")
        for c in common:
            print(f"{rgb_to_hex(c[0])} (Count: {c[1]})")

        print("\n--- Non-Greyscale Colors ---")
        non_grey = [c for c in counts.most_common(50) if not is_greyscale(c[0])]
        for c in non_grey[:5]:
             print(f"{rgb_to_hex(c[0])} (Count: {c[1]})")
             
        return [c[0] for c in common]

    except Exception as e:
        print(f"Error: {e}")
        return []

def rgb_to_hex(rgb):
    return '#{:02x}{:02x}{:02x}'.format(rgb[0], rgb[1], rgb[2])

if __name__ == "__main__":
    get_palette('public/logo.png')
