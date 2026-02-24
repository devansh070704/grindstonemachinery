import json
import csv
import io
import re

products = []
product_id_counter = 1000

def next_id():
    global product_id_counter
    pid = f"GSM-{product_id_counter}"
    product_id_counter += 1
    return pid

def clean_price(price_str):
    """Clean price string"""
    if not price_str:
        return "On Inquiry Only"
    price_str = price_str.strip()
    if not price_str or price_str == "-":
        return "On Inquiry Only"
    return price_str

def make_product(name, category, price, short_desc="", full_desc=None, features=None, specs=None, main_image="", gallery=None, legacy_id=None):
    if not short_desc:
        short_desc = f"{name} - premium quality from Grindstone Machinery Industries."
    if not full_desc:
        full_desc = [f"{name} engineered for precision and reliability in industrial applications.", "Manufactured by Grindstone Machinery Industries, Ahmedabad with ISO 9001:2015 certification."]
    if not features:
        features = ["ISO 9001:2015 Certified", "Precision Engineering", "Industrial Durability"]
    if not specs:
        specs = []
    if not main_image:
        main_image = "https://source.unsplash.com/800x600/?machinery,industrial"
    if gallery is None:
        gallery = []
    
    p = {
        "id": next_id(),
        "legacyId": legacy_id,
        "name": name,
        "category": category,
        "price": clean_price(price),
        "shortDescription": short_desc,
        "fullDescription": full_desc,
        "features": features,
        "specifications": specs,
        "mainImage": main_image,
        "gallery": gallery
    }
    products.append(p)

# ===========================================
# 1. GRINDING MACHINE (32 products)
# ===========================================
grinding_data = [
    ("Manual Cylindrical Grinding Machine", "₹ 2,15,000/Piece"),
    ("Carbide Rod Cylindrical Grinding Machine", "₹ 4,27,000/Piece"),
    ("Stator Core Grinding Machine", "₹ 68,000/Piece"),
    ("Universal Cylindrical Grinding Machine", "₹ 7,45,000/Piece"),
    ("Hydraulic Universal Cylindrical Grinders", "₹ 7,50,000/Piece"),
    ("OD ID Grinding Machine", "₹ 8,98,000/Piece"),
    ("Centerless Grinding Machines", "₹ 5,80,000/Piece"),
    ("CNC Cylindrical Grinding Machine", "₹ 32,00,000/Piece"),
    ("Manual Cylindrical Grinding Machine (Alt Price)", "₹ 3,05,000/Piece"),
    ("External Cylindrical Grinding Machine", "₹ 8,98,000/Piece"),
    ("Hydraulic Centerless Grinding Machine", "₹ 7,25,000/Piece"),
    ("Cnc Cylindrical Grinding Machines", "₹ 28,000/Piece"),
    ("Hydraulic Cylindrical Grinding Machine", "₹ 8,76,000/Piece"),
    ("Internal Grinding Machine", "₹ 5,50,000/Piece"),
    ("Cylindrical Grinding Machine Job Work", "₹ 500/Square Inch"),
    ("Internal Cylindrical Grinding Machine", "₹ 6,98,000/Piece"),
    ("ID Grinding Machine", "₹ 7,75,000/Piece"),
    ("Cutter OD Grinding Machine", "₹ 18,00,000/Piece"),
    ("Angle Wheel Dresser", "₹ 28,000/Piece"),
    ("Hydraulic Internal Grinding Machine", "₹ 7,25,000/Piece"),
    ("Cylindrical Grinding Machine", "₹ 8,25,000/Piece"),
    ("Cot Grinding Machine", "₹ 4,25,000/Piece"),
    ("Scrubber Machine Roll Grinding Machine", "₹ 5,35,000/Piece"),
    ("Auto Cut Grinding Machine", "₹ 7,25,000/number"),
    ("Cot And Apron Grinding Machine", "₹ 6,25,000/Piece"),
    ("Carbide Rod Grinding Machine", "₹ 5,80,000/Piece"),
    ("Roll Grinder Machine", "₹ 18,00,000/Piece"),
    ("Rubber Roll Grinder", "₹ 12,45,000/Piece"),
    ("Hydraulic Roll Grinding Machine", "₹ 11,25,000/Piece"),
    ("Roll Grinders", "₹ 24,00,000/Piece"),
    ("Fan Shaft Grinding Machine", "₹ 4,90,000/Piece"),
]

for name, price in grinding_data:
    make_product(
        name=name, 
        category="Grinding Machine", 
        price=price,
        short_desc=f"{name} for high-precision industrial grinding applications.",
        features=["ISO 9001:2015 Certified", "Precision Engineering", "Industrial Durability", "Heavy-Duty Construction"]
    )

# ===========================================
# 2. MAGNETIC SEPARATOR (6 products)
# ===========================================
make_product(
    name="Magnetic Coolant Separator",
    category="Magnetic Separator",
    price="₹ 32,600/Piece",
    short_desc="High-capacity magnetic coolant separator with >200 L/min capacity and ferrite magnet technology.",
    full_desc=[
        "High-performance magnetic coolant separator designed for efficient removal of ferrous particles from coolant.",
        "Features a 120mm drum diameter with ferrite magnet technology. Drum length of 360mm ensures thorough coolant separation for extended tool and coolant life."
    ],
    features=["Ferrite Magnet Type", ">200 L/min Capacity", "120mm Drum Diameter", "360mm Drum Length", "Coolant Separation"],
    specs=[
        {"label": "Capacity", "value": ">200 L/min, 25"},
        {"label": "Drum Diameter", "value": "120 mm"},
        {"label": "Magnet Type", "value": "Ferrite"},
        {"label": "Drum Length", "value": "360 mm"}
    ],
    main_image="https://5.imimg.com/data5/SELLER/Default/2025/5/508465874/JO/QP/PO/180907397/magnetic-coolant-separator-250x250.png"
)

make_product(
    name="Industrial Magnetic Coolant Separator",
    category="Magnetic Separator",
    price="₹ 38,000/Piece",
    short_desc="Industrial-grade magnetic coolant separator with 50 LPM flow rate and 1000 Gauss magnet strength.",
    full_desc=[
        "Industrial magnetic coolant separator engineered for grinding applications requiring superior coolant filtration.",
        "Features 50 LPM flow rate and 1000 Gauss magnet strength with 150mm drum diameter for efficient separation."
    ],
    features=["1000 Gauss Magnet", "50 LPM Flow Rate", "150mm Drum Diameter", "Industrial Grade", "Grinding Application"],
    specs=[
        {"label": "Flow Rate", "value": "50 LPM"},
        {"label": "Drum Diameter", "value": "150 mm"},
        {"label": "Magnet Strength", "value": "1000 Gauss"},
        {"label": "Usage", "value": "Grinding"}
    ],
    main_image="https://5.imimg.com/data5/SELLER/Default/2026/2/585841472/QB/MC/MQ/180907397/industrial-magnetic-coolant-separator-250x250.jpeg"
)

make_product(
    name="Coolant Filter Paper Roll",
    category="Magnetic Separator",
    price="₹ 3,500/Roll",
    short_desc="High-quality coolant filter paper roll, 500m length, 600mm width, 0.5mm thickness.",
    full_desc=[
        "Premium coolant filter paper roll designed for use in grinding and machining coolant filtration systems.",
        "Paper material construction with 600mm width, 0.5mm thickness, and 500m length for long-lasting filtration."
    ],
    features=["500m Length", "600mm Width", "0.5mm Thickness", "Paper Material", "Coolant Filtration"],
    specs=[
        {"label": "Material", "value": "Paper"},
        {"label": "Width", "value": "600 mm"},
        {"label": "Thickness", "value": "0.5 mm"},
        {"label": "Length", "value": "500 m"}
    ],
    main_image="https://5.imimg.com/data5/SELLER/Default/2025/7/525657699/DC/LH/CT/180907397/coolant-filter-paper-roll-in-thane-250x250.jpeg"
)

make_product(
    name="Magnetic Separators For Coolant Purposes",
    category="Magnetic Separator",
    price="₹ 42,000/Piece",
    short_desc="Specialized magnetic separator designed for coolant filtration and separation purposes.",
    full_desc=[
        "Specialized magnetic separator designed for coolant filtration and separation in industrial grinding operations.",
        "Advanced separator design ensures efficient removal of ferrous contaminants from coolant systems."
    ],
    features=["Coolant Filtration", "Separation Technology", "Industrial Grade", "Specialized Design"]
)

make_product(
    name="Magnetic Coolant Separator 150LPM",
    category="Magnetic Separator",
    price="₹ 44,000/Piece",
    short_desc="High-capacity 150 LPM magnetic coolant separator for heavy-duty coolant separation.",
    full_desc=[
        "High-capacity magnetic coolant separator with 150 LPM flow rate for heavy-duty industrial applications.",
        "Designed for continuous operation in demanding manufacturing environments requiring superior coolant purity."
    ],
    features=["150 LPM Flow Rate", "Heavy-Duty Design", "Continuous Operation", "Industrial Grade"],
    specs=[
        {"label": "Flow Rate", "value": "150 LPM"},
        {"label": "Application", "value": "Heavy-Duty Coolant Separation"}
    ]
)

make_product(
    name="Coolant Filtration Systems",
    category="Magnetic Separator",
    price="₹ 23,000/Piece",
    short_desc="Complete integrated coolant filtration system for industrial grinding and machining operations.",
    full_desc=[
        "Complete coolant filtration system providing integrated coolant management for industrial operations.",
        "All-in-one solution for coolant filtration, ensuring clean coolant supply for grinding and machining processes."
    ],
    features=["Integrated System", "Complete Filtration", "Industrial Grade", "Easy Maintenance"]
)

# ===========================================
# 3. ANGLE DRESSER (2 products)
# ===========================================
make_product(
    name="Wheel Dresser Radius Angle",
    category="Angle Dresser",
    price="₹ 38,000/Piece",
    short_desc="Single point wheel dresser with 0–180° angle range, table mount for cylindrical grinders.",
    full_desc=[
        "Precision wheel dresser for radius and angle dressing of grinding wheels on cylindrical grinders.",
        "Features single point dresser type with 0–180° angle range and table mount installation for versatile dressing operations."
    ],
    features=["Single Point Dresser", "0–180° Angle Range", "Table Mount", "Cylindrical Grinder Compatible"],
    specs=[
        {"label": "Dresser Type", "value": "Single Point"},
        {"label": "Angle Range", "value": "0–180°"},
        {"label": "Mounting Type", "value": "Table Mount"},
        {"label": "Machine Type", "value": "Cylindrical Grinder"}
    ],
    main_image="https://5.imimg.com/data5/SELLER/Default/2025/12/567678205/JQ/ZY/MS/180907397/wheel-dresser-radius-angle-250x250.jpeg"
)

make_product(
    name="Wheel Angel Radius Dressing Device",
    category="Angle Dresser",
    price="₹ 22,000/Piece",
    short_desc="Semi-automatic wheel angel radius dressing device with 360° rotation and 100mm centre height.",
    full_desc=[
        "Semi-automatic wheel dressing device for precise angular and radius dressing of grinding wheels.",
        "Features 360-degree rotation angle, 100mm centre height, and robust 12kg construction for stable operation."
    ],
    features=["Semi-Automatic", "360° Rotation", "100mm Centre Height", "12 Kg Weight"],
    specs=[
        {"label": "Automation Grade", "value": "Semi-Automatic"},
        {"label": "Centre Height", "value": "100 mm"},
        {"label": "Weight", "value": "12 Kg"},
        {"label": "Rotation Angle", "value": "360 Degree"}
    ],
    main_image="https://5.imimg.com/data5/SELLER/Default/2025/5/508466792/IG/NT/YV/180907397/wheel-angel-radius-dressing-device-250x250.jpeg"
)

# ===========================================
# 4. JOB WORK (2 products)
# ===========================================
make_product(
    name="Cylindrical Grinding Services",
    category="Job Work",
    price="₹ 1,000/sq ft",
    short_desc="High precision cylindrical grinding services for stainless steel and electrical industry components.",
    full_desc=[
        "High precision tolerance cylindrical grinding services delivering smooth surface finish and tight dimensional accuracy.",
        "Versatile material handling suitable for a wide range of metals including hardened steel, alloy, and other ferrous/non-ferrous materials. Uses precision grinding wheels and hydraulic controls for consistent, repeatable results."
    ],
    features=["High Precision Tolerance", "Versatile Material Handling", "Advanced Grinding Technology", "Cost-Effective Solutions"],
    specs=[
        {"label": "Material", "value": "Stainless Steel"},
        {"label": "Industry", "value": "Electrical"}
    ]
)

make_product(
    name="CNC Wire Cutting Machine Job Work Service",
    category="Job Work",
    price="₹ 10/Square mm",
    short_desc="Precision CNC wire cutting machine job work service for intricate shapes and tight tolerances.",
    full_desc=[
        "High precision CNC wire cutting service achieving intricate shapes and tight tolerances ideal for complex components.",
        "Produces burr-free surfaces reducing the need for additional finishing. Compatible with various materials including mild steel, stainless steel, aluminum, brass, and other metals."
    ],
    features=["High Precision Cutting", "Smooth Edge Finish", "Material Versatility", "Quick Turnaround Time", "Expert Craftsmanship"],
    specs=[
        {"label": "Material", "value": "Steel (Versatile)"},
        {"label": "Industry", "value": "Manufacturing"}
    ]
)

# ===========================================
# 5. POLISHING MACHINE (2 products)
# ===========================================
make_product(
    name="Polishing Machine",
    category="Polishing Machine",
    price="₹ 90,000/Piece",
    short_desc="Fully automatic polishing machine at 2800 RPM with 2 HP power and aluminum construction.",
    full_desc=[
        "Compact fully automatic polishing machine ideal for polishing various metal components with consistent results.",
        "High-speed 2800 RPM operation ensures efficient material removal and superior surface finishing with minimal operator effort."
    ],
    features=["Fully Automatic", "2800 RPM Speed", "2 HP Power", "Aluminum Construction", "Compact Design"],
    specs=[
        {"label": "Speed", "value": "2800 RPM"},
        {"label": "Automation Grade", "value": "Fully Automatic"},
        {"label": "Power", "value": "2 HP"},
        {"label": "Material", "value": "Aluminum"}
    ]
)

make_product(
    name="Shaft Polishing Machine",
    category="Polishing Machine",
    price="₹ 2,80,000/Piece",
    short_desc="Industrial-grade shaft polishing machine designed for heavy-duty polishing of shafts and cylindrical components.",
    full_desc=[
        "Industrial-grade shaft polishing machine designed for heavy-duty applications in manufacturing environments.",
        "Suitable for polishing shafts, rods, and cylindrical components with robust construction for continuous operation."
    ],
    features=["Heavy-Duty Design", "Industrial Grade", "Continuous Operation", "Shaft & Rod Polishing", "Robust Construction"]
)

# ===========================================
# 6. WHEEL BALANCER (1 product)
# ===========================================
make_product(
    name="Wheel Balancing Stand",
    category="Wheel Balancer",
    price="₹ 17,500/Piece",
    short_desc="Dual-stand grinding wheel balancing stand, cast iron construction, 300mm size, 40 kg weight.",
    full_desc=[
        "Essential tool for balancing grinding wheels with dual-stand design for stability and safety.",
        "Features robust cast iron construction for durability. Ideal for industrial grinding operations to ensure precision wheel balance and extended wheel life."
    ],
    features=["Grinding Wheel Balancing", "Cast Iron Construction", "300mm Size", "40 Kg Weight", "Dual-Stand Design"],
    specs=[
        {"label": "Accessory Type", "value": "Grinding Wheel Balancing"},
        {"label": "Material", "value": "Cast Iron (CI)"},
        {"label": "Size", "value": "300 mm"},
        {"label": "Weight", "value": "40 kg"}
    ]
)

# ===========================================
# 7. BELT DRIVEN SPINDLE (1 product)
# ===========================================
make_product(
    name="Internal Grinding Spindles Quills Arbor",
    category="Belt Driven Spindle",
    price="₹ 6,000/Piece",
    short_desc="High-precision internal grinding spindle with EN24 steel construction and 0.002mm accuracy.",
    full_desc=[
        "High-precision internal grinding spindle component featuring EN24 steel construction for superior hardness and durability.",
        "Ultra-high accuracy of 0.002mm suitable for precision grinding applications. Fully customizable design based on client specifications and drawings. Ideal for internal grinding machines and portable grinding equipment."
    ],
    features=["EN24 Steel Construction", "0.002mm Accuracy", "Fully Customizable", "As Per Drawing Design", "Precision Grinding"],
    specs=[
        {"label": "Material", "value": "EN24 Steel"},
        {"label": "Accuracy", "value": "0.002 mm"},
        {"label": "Customization", "value": "Yes"},
        {"label": "Design", "value": "As per drawing"}
    ]
)


# ===========================================
# Generate TypeScript output
# ===========================================
ts_output = '''export interface Product {
  id: string;
  legacyId?: string | null;
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

export const products: Product[] = [\n'''

for i, p in enumerate(products):
    ts_output += '  {\n'
    ts_output += f'    "id": "{p["id"]}",\n'
    ts_output += f'    "legacyId": {json.dumps(p["legacyId"])},\n'
    ts_output += f'    "name": {json.dumps(p["name"])},\n'
    ts_output += f'    "category": {json.dumps(p["category"])},\n'
    ts_output += f'    "price": {json.dumps(p["price"])},\n'
    ts_output += f'    "shortDescription": {json.dumps(p["shortDescription"])},\n'
    ts_output += f'    "fullDescription": {json.dumps(p["fullDescription"])},\n'
    ts_output += f'    "features": {json.dumps(p["features"])},\n'
    ts_output += f'    "specifications": {json.dumps(p["specifications"])},\n'
    ts_output += f'    "mainImage": {json.dumps(p["mainImage"])},\n'
    ts_output += f'    "gallery": {json.dumps(p["gallery"])}\n'
    if i < len(products) - 1:
        ts_output += '  },\n'
    else:
        ts_output += '  }\n'

ts_output += '];\n'

with open('/home/yash-test/Downloads/grindstone new website/data/products.ts', 'w') as f:
    f.write(ts_output)

# Count by category
from collections import Counter
cat_counts = Counter(p["category"] for p in products)
print(f"Total products: {len(products)}")
for cat, count in cat_counts.items():
    print(f"  {cat}: {count}")
print("Done!")
