import json
import os
import re

# Load IndiaMART data for ID mapping
INDIAMART_DATA = []
try:
    with open('new_products.json', 'r', encoding='utf-8') as f:
        INDIAMART_DATA = json.load(f)
except:
    pass

def find_legacy_id(name):
    # Try exact match
    for item in INDIAMART_DATA:
        if item['name'].lower() == name.lower():
            return item['id']
    # Try partial match (first 15 chars)
    for item in INDIAMART_DATA:
        if name.lower()[:15] in item['name'].lower():
            return item['id']
    return None

# Strategic Content Dictionary
STRATEGIC_DATA = {
    "Cylindrical Grinding": {
        "context": "Cylindrical grinding is the backbone of our offering. This process is critical for producing precision shafts, rollers, and pins where tolerances are measured in single-digit microns.",
        "hydraulic": "Hydraulic systems in our grinding machines drive the longitudinal traverse of the table, ensuring a consistent, smooth motion impossible to achieve by hand, resulting in superior surface finish values (Ra). Includes sophisticated 'Dwell at Reversals' feature for perfect shoulder perpendicularity.",
        "manual": "Our manual range prioritizes tactile feedback and mechanical simplicity, giving operators granular control over cutting forces, essential for delicate or thin-walled parts."
    },
    "Specialized": {
        "stator": "Designed for electric motor and ceiling fan manufacturing. Features a unique 'Both Slide Movable Table' design to achieve perfect concentricity on stator stacks.",
        "roll": "Designed for D2 Steel, known for extreme wear resistance. Capable of delivering a 'Mirror Finish' non-negotiable for textile and steel rolling surfaces.",
        "carbide": "Optimized for Tungsten Carbide rod grinding using specialized diamond wheels and a vibration-free base for aerospace-grade precision."
    },
    "Filtration": {
        "magnetic": "Utilizes a rotating magnetic drum to extract ferrous contamination. Features heavy-duty Ferrite magnets and double reduction worm gear drive for 24/7 industrial filtration.",
        "paper": "Non-woven filtration fabric trapping particles down to 10-20 microns, essential for non-ferrous materials."
    },
    "Spindles": {
        "belt_driven": "Capable of up to 35,000 RPM with 2-micron runout accuracy. Features NSK Matched Pair Angular Contact Bearings for aerospace-grade precision.",
        "external": "High-rigidity spindles for surface and cylindrical grinders, customizable to client drawings."
    }
}

# Product List Mapping (Expanded to 67+)
PRODUCTS_LIST = []

# 1. Hydraulic Cylindrical (15 items)
for size in [300, 450, 600, 800, 1000, 1200, 1500, 2000, 2500, 3000]:
    PRODUCTS_LIST.append({"name": f"Hydraulic Cylindrical Grinding Machine ({size}mm)", "category": "Hydraulic Cylindrical Grinding", "type": "hydraulic", "base_name": "Hydraulic Cylindrical Grinding Machine"})
PRODUCTS_LIST.append({"name": "Semi-Automatic Cylindrical Grinder (Standard)", "category": "Hydraulic Cylindrical Grinding", "type": "hydraulic", "base_name": "Hydraulic Cylindrical Grinding Machine"})
PRODUCTS_LIST.append({"name": "Hydraulic Cylindrical Grinder with DRO", "category": "Hydraulic Cylindrical Grinding", "type": "hydraulic", "legacy_id": "2852426644148"})
PRODUCTS_LIST.append({"name": "600x3000mm Heavy Duty Cylindrical Grinder", "category": "Hydraulic Cylindrical Grinding", "type": "hydraulic"})
PRODUCTS_LIST.append({"name": "Hydraulic Cylindrical Grinder (Special Edition)", "category": "Hydraulic Cylindrical Grinding", "type": "hydraulic"})
PRODUCTS_LIST.append({"name": "Precision Hydraulic Cylindrical Grinder", "category": "Hydraulic Cylindrical Grinding", "type": "hydraulic"})

# 2. Hydraulic Universal (10 items)
for size in [300, 450, 600, 800, 1000, 1500, 2000]:
    PRODUCTS_LIST.append({"name": f"Hydraulic Universal Cylindrical Grinder ({size}mm)", "category": "Hydraulic Cylindrical Grinding", "type": "universal_hydraulic", "base_name": "Hydraulic Universal Cylindrical Grinders"})
PRODUCTS_LIST.append({"name": "Universal Hydraulic Grinder with ID Attachment", "category": "Hydraulic Cylindrical Grinding", "type": "universal_hydraulic", "legacy_id": "2856515513488"})
PRODUCTS_LIST.append({"name": "Heavy Duty Universal Hydraulic Grinder", "category": "Hydraulic Cylindrical Grinding", "type": "universal_hydraulic"})
PRODUCTS_LIST.append({"name": "Universal Hydraulic Cylindrical Grinder (Tool Room Expert)", "category": "Hydraulic Cylindrical Grinding", "type": "universal_hydraulic"})

# 3. Manual Cylindrical (10 items)
for size in [300, 450, 600, 800, 1000]:
    PRODUCTS_LIST.append({"name": f"Manual Cylindrical Grinding Machine ({size}mm)", "category": "Manual Cylindrical Grinding", "type": "manual", "base_name": "Manual Cylindrical Grinding Machine"})
for swing in [150, 200, 250, 300]:
    PRODUCTS_LIST.append({"name": f"Manual Cylindrical Grinder (Heavy Duty {swing}mm Swing)", "category": "Manual Cylindrical Grinding", "type": "manual_heavy"})
PRODUCTS_LIST.append({"name": "Universal Manual Cylindrical Grinding Machine", "category": "Manual Cylindrical Grinding", "type": "manual"})

# 4. Specialized Application (10 items)
PRODUCTS_LIST.append({"name": "Stator Core Grinding Machine (Ceiling Fan)", "category": "Specialized Application Grinders", "type": "specialized_stator", "legacy_id": "2856515512733"})
PRODUCTS_LIST.append({"name": "Stator Core Grinder (Industrial Motor)", "category": "Specialized Application Grinders", "type": "specialized_stator"})
PRODUCTS_LIST.append({"name": "Scrubber Machine Roll Grinding Machine", "category": "Specialized Application Grinders", "type": "specialized_roll", "legacy_id": "2856495352330"})
PRODUCTS_LIST.append({"name": "Roll Grinding Machine (Textile Industry)", "category": "Specialized Application Grinders", "type": "specialized_roll"})
PRODUCTS_LIST.append({"name": "Steel Mill Roll Grinding Machine", "category": "Specialized Application Grinders", "type": "specialized_roll"})
PRODUCTS_LIST.append({"name": "Carbide Rod Cylindrical Grinding Machine", "category": "Specialized Application Grinders", "type": "specialized_carbide"})
PRODUCTS_LIST.append({"name": "Carbide Rod Grinder (Lab Scale)", "category": "Specialized Application Grinders", "type": "specialized_carbide"})
PRODUCTS_LIST.append({"name": "Slitting Cutter Grinding Machine", "category": "Specialized Application Grinders", "type": "specialized", "legacy_id": "2856515513073"})
PRODUCTS_LIST.append({"name": "Auto Cut Grinding Machine", "category": "Specialized Application Grinders", "type": "specialized", "legacy_id": "2856515513197"})
PRODUCTS_LIST.append({"name": "Bush Grinding Machine", "category": "Specialized Application Grinders", "type": "specialized", "legacy_id": "2856868378955"})

# 5. Internal & Centerless (7 items)
PRODUCTS_LIST.append({"name": "Dedicated Internal Grinding Machine (Deep Bore)", "category": "Internal (ID) & Universal Grinders", "type": "internal"})
PRODUCTS_LIST.append({"name": "Small Bore Internal Grinder", "category": "Internal (ID) & Universal Grinders", "type": "internal"})
PRODUCTS_LIST.append({"name": "Internal Cylindrical Grinder (500mm Depth)", "category": "Internal (ID) & Universal Grinders", "type": "internal"})
PRODUCTS_LIST.append({"name": "OD ID Combination Grinding Machine", "category": "Internal (ID) & Universal Grinders", "type": "internal"})
PRODUCTS_LIST.append({"name": "Hydraulic Centerless Grinding Machine", "category": "Centerless Grinders", "type": "centerless", "legacy_id": "2852657400891"})
PRODUCTS_LIST.append({"name": "Through-Feed Centerless Grinder", "category": "Centerless Grinders", "type": "centerless"})
PRODUCTS_LIST.append({"name": "In-Feed Centerless Grinding Machine", "category": "Centerless Grinders", "type": "centerless"})

# 6. CNC & Advanced (5 items)
PRODUCTS_LIST.append({"name": "CNC Cylindrical Grinding Machine (300mm)", "category": "CNC & Advanced Technology", "type": "cnc", "legacy_id": "2852750146112"})
PRODUCTS_LIST.append({"name": "CNC Cylindrical Grinding Machine (600mm)", "category": "CNC & Advanced Technology", "type": "cnc"})
PRODUCTS_LIST.append({"name": "CNC Cylindrical Grinder (1000mm Precision)", "category": "CNC & Advanced Technology", "type": "cnc"})
PRODUCTS_LIST.append({"name": "External Cylindrical Grinding Machine", "category": "CNC & Advanced Technology", "type": "cnc", "legacy_id": "2856515582162"})
PRODUCTS_LIST.append({"name": "Advanced Programmed Cylindrical Grinder", "category": "CNC & Advanced Technology", "type": "cnc"})

# 7. Coolant Filtration (10 items)
for lpm in [25, 50, 100, 150, 200, 500, 1000]:
    PRODUCTS_LIST.append({"name": f"Magnetic Coolant Separator ({lpm} LPM)", "category": "Coolant Filtration", "type": "filtration_magnetic", "base_name": "Magnetic Coolant Separator"})
PRODUCTS_LIST.append({"name": "Coolant Filter Paper Rolls (500m)", "category": "Coolant Filtration", "type": "filtration_paper", "legacy_id": "2855776120988"})
PRODUCTS_LIST.append({"name": "Paper Band Filter (Non-Ferrous)", "category": "Coolant Filtration", "type": "filtration_paper"})
PRODUCTS_LIST.append({"name": "High-Efficiency Magnetic Filtration System", "category": "Coolant Filtration", "type": "filtration_magnetic"})

# 8. Accessories & Services (10 items)
PRODUCTS_LIST.append({"name": "Wheel Dresser Radius Angle (0-180°)", "category": "Precision Accessories", "type": "accessory_dresser", "legacy_id": "2856893019055"})
PRODUCTS_LIST.append({"name": "360° Wheel Angle Radius Dressing Device", "category": "Precision Accessories", "type": "accessory_dresser"})
PRODUCTS_LIST.append({"name": "Static Wheel Balancing Stand (Standard)", "category": "Precision Accessories", "type": "accessory_balancing", "legacy_id": "2853138579433"})
PRODUCTS_LIST.append({"name": "Heavy Duty Wheel Balancing Stand (1200mm)", "category": "Precision Accessories", "type": "accessory_balancing"})
PRODUCTS_LIST.append({"name": "Internal Grinding Spindle (40mm Dia)", "category": "Spindle Technology", "type": "spindle_belt", "legacy_id": "2856869062055"})
PRODUCTS_LIST.append({"name": "Internal Grinding Spindle (100mm Dia High Speed)", "category": "Spindle Technology", "type": "spindle_belt"})
PRODUCTS_LIST.append({"name": "Precision Quills and Arbors", "category": "Spindle Technology", "type": "spindle_external", "legacy_id": "2856870223088"})
PRODUCTS_LIST.append({"name": "Shaft Polishing Machine (Fully Auto)", "category": "Surface Finishing", "type": "surface", "legacy_id": "2856869316262"})
PRODUCTS_LIST.append({"name": "Industrial CNC Wire Cutting Service", "category": "Industrial Services", "type": "service", "legacy_id": "2854363693930"})
PRODUCTS_LIST.append({"name": "Precision Cylindrical Grinding Job Work", "category": "Industrial Services", "type": "service", "legacy_id": "2854443682312"})

def generate():
    products = []
    for i, p in enumerate(PRODUCTS_LIST):
        pid = f"GSM-{1000 + i}"
        
        # Determine legacyId if not provided
        legacy_id = p.get('legacy_id')
        if not legacy_id:
            legacy_id = find_legacy_id(p.get('base_name', p['name']))
        
        # Determine description based on type
        full_desc = []
        features = ["ISO 9001:2015 Certified", "Precision Engineering", "Industrial Durability"]
        specs = []
        
        if "hydraulic" in p['type']:
            full_desc = [STRATEGIC_DATA["Cylindrical Grinding"]["context"], STRATEGIC_DATA["Cylindrical Grinding"]["hydraulic"]]
            features += ["Hydraulic Table Traverse", "Dwell at Reversals", "Zero-Backlash Design"]
            specs = [{"label": "Automation", "value": "Semi-Automatic"}, {"label": "Lubrication", "value": "Centralized Oil Tank"}]
        elif "manual" in p['type']:
            full_desc = [STRATEGIC_DATA["Cylindrical Grinding"]["context"], STRATEGIC_DATA["Cylindrical Grinding"]["manual"]]
            features += ["Tactile Handwheel Feed", "Direct Mechanical Drive", "Low Maintenance"]
        elif "specialized_stator" in p['type']:
            full_desc = [STRATEGIC_DATA["Specialized"]["stator"]]
            features += ["Both Slide Movable Table", "Concentricity Control", "Batch Processing ready"]
        elif "specialized_roll" in p['type']:
            full_desc = [STRATEGIC_DATA["Specialized"]["roll"]]
            features += ["D2 Steel Capability", "Mirror Finish Achievement", "High Static Stiffness"]
        elif "specialized_carbide" in p['type']:
            full_desc = [STRATEGIC_DATA["Specialized"]["carbide"]]
            features += ["Diamond Wheel Optimization", "Vibration-Free Base", "Aerospace Tolerance"]
        elif "filtration_magnetic" in p['type']:
            full_desc = [STRATEGIC_DATA["Filtration"]["magnetic"]]
            features += ["Ferrite Magnetic Core", "Stainless Steel Housing", "24/7 Operational Capacity"]
            specs = [{"label": "Flow Capacity", "value": "25 LPM to 200 LPM"}]
        elif "spindle_belt" in p['type']:
            full_desc = [STRATEGIC_DATA["Spindles"]["belt_driven"]]
            features += ["NSK Matched Pair Bearings", "35,000 RPM Capacity", "2-Micron Accuracy"]
        else:
            full_desc = [f"The {p['name']} is a high-performance industrial solution engineered by Grindstone Machinery Industries.", 
                         "Meeting international standards for accuracy and durability.",
                         "Optimized for high-throughput manufacturing environments."]

        products.append({
            "id": pid,
            "legacyId": legacy_id,
            "name": p['name'],
            "category": p['category'],
            "price": "On Inquiry Only",
            "shortDescription": p['name'] + " for high-precision manufacturing.",
            "fullDescription": full_desc,
            "features": features,
            "specifications": specs,
            "mainImage": f"https://source.unsplash.com/800x600/?machinery,{p['type']}" if not "service" in p['type'] else "https://source.unsplash.com/800x600/?industrial",
            "gallery": []
        })

    # Header
    header = """export interface Product {
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

export const products: Product[] = """

    with open('data/products.ts', 'w', encoding='utf-8') as f:
        f.write(header)
        json.dump(products, f, indent=2)
        f.write(";")

    print(f"Generated {len(products)} products with legacyId mapping.")

if __name__ == "__main__":
    generate()
