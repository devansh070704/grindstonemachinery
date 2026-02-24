export interface Product {
  id: string;
  slug: string;
  legacyId?: string | null;
  name: string;
  category: string;
  price: string;
  shortDescription: string;
  fullDescription: string[];
  features: string[];
  mainImage: string;
  gallery: string[];
  brochureUrl?: string;
  specifications?: Record<string, string>;
  applications?: string[];
}

export const products: Product[] = [
  {
    "id": "GSM-1000",
    "slug": "manual-cylindrical-grinding-machine",
    "legacyId": null,
    "name": "Manual Cylindrical Grinding Machine",
    "category": "Grinding Machine",
    "price": "₹ 8,25,000/Piece",
    "shortDescription": "Manual Cylindrical Grinding Machine for high-precision industrial grinding applications.",
    "fullDescription": [
      "The Manual Cylindrical Grinding Machine from Grindstone Machinery Industries is a cornerstone of precision engineering in Ahmedabad, Gujarat. Engineered for high-accuracy industrial grinding, this machine is specifically designed to meet the rigorous demands of tool rooms and production lines in the Vatva GIDC industrial belt. It offers unparalleled control for operators requiring micron-level tolerances on cylindrical workpieces, making it an essential asset for manufacturing precision shafts, rollers, and spindles.",
      "As a leading manufacturer in Ahmedabad, we have optimized this manual model for long-term durability and ease of maintenance. The machine features a robust bed casting that dampens vibrations, ensuring a superior surface finish that meets international quality standards like IS: 2368. Whether you are performing OD (Outer Diameter) grinding or intricate taper grinding, our manual cylindrical grinders provide the stability and repeatability needed for small-batch production and specialized prototyping. With over 15 years of industry experience, our engineering team ensures that every component—from the high-precision spindle to the smooth-sliding table—is calibrated for peak performance in diverse industrial applications across India and global markets."
    ],
    "features": [
      "High Precision and Fine Surface Finish: Achieves very tight tolerances and excellent surface finishes on cylindrical workpieces.",
      "Versatility for Low-Volume and Specialized Jobs: Suitable for small batch production, prototypes, and one-off jobs.",
      "Lower Initial Investment and Maintenance Costs: Simpler mechanical design means lower purchase price and maintenance."
    ],
    "specifications": {
      "Type": "Cylindrical Grinding Machine",
      "Grinding Material": "Metal",
      "Grinding Wheel Diameter": "300 mm",
      "Max Grinding Length": "300 mm",
      "Max Wheel Speed": "1900 RPM",
      "Spindle Motor Power": "3 HP",
      "Max Table Travel": "300 mm",
      "Min Table Travel": "10 mm",
      "Max Table Load": "10 Kg",
      "Table Swivel": "4°",
      "Admit Between Centers": "300 mm"
    },
    "applications": [
      "OD Cylindrical Grinding",
      "Tool Room Jobs",
      "Small Batch Production",
      "Prototype Components",
      "Shaft Grinding"
    ],
    "mainImage": "/images/products/manual-cylindrical-grinding-machine-500x500.webp",
    "gallery": []
  },
  {
    "id": "GSM-1001",
    "slug": "carbide-rod-cylindrical-grinding-machine",
    "legacyId": null,
    "name": "Carbide Rod Cylindrical Grinding Machine",
    "category": "Grinding Machine",
    "price": "₹ 4,27,000/Piece",
    "shortDescription": "Carbide Rod Cylindrical Grinding Machine for high-precision industrial grinding applications.",
    "fullDescription": [
      "The Carbide Rod Cylindrical Grinding Machine is a specialized high-precision solution developed by Grindstone Machinery Industries to cater to the growing demand for hard-material processing in India's manufacturing hubs. Based in Ahmedabad's Vatva GIDC, our facility produces these machines with the structural rigidity required to grind extremely hard materials like tungsten carbide rods with extreme accuracy. This machine is widely used in the production of precision cutting tools, end mills, and drills where diamond-wheel compatibility and thermal stability are critical.",
      "Our design incorporates advanced lubrication systems and reinforced spindle housings to handle the high speeds and forces associated with carbide grinding. As a premier exporter and manufacturer in Gujarat, we understand the nuances of grinding brittle yet hard materials. This model features precise manual or semi-automatic controls that allow operators to achieve mirror-like finishes and tight dimensional tolerances consistently. By integrating our machines into your production line, you benefit from reduced cycle times and enhanced tool longevity, backed by our 15+ years of expertise in precision grinding technology and industrial fabrication standards."
    ],
    "features": [
      "High Accuracy for Carbide Rod Grinding: Precision grinding to tight tolerances for hard carbide material.",
      "Excellent Surface Finish: Diamond/CBN wheel compatible for superior surface quality.",
      "Maintains Roundness and Straightness: Consistent geometry along full rod length."
    ],
    "specifications": {
      "Max Table Travel": "320 mm",
      "Max Workpiece Weight": "10 Kg",
      "Workbench Speed": "4 r/min",
      "Grinding Wheel Speed": "35 m/sec",
      "Workbench Rotation": "9°",
      "Total Motor Power": "3.16 kW",
      "Machine Weight": "950 Kg",
      "Machine Size": "1360 x 1240 x 1000 mm"
    },
    "applications": [
      "Carbide Rod Grinding",
      "Cutting Tool Manufacturing",
      "Wear Part Finishing",
      "Tool Room Production"
    ],
    "mainImage": "/images/products/carbide-rod-cylindrical-grinding-machine-500x500.webp",
    "gallery": []
  },
  {
    "id": "GSM-1002",
    "slug": "stator-core-grinding-machine",
    "legacyId": null,
    "name": "Stator Core Grinding Machine",
    "category": "Grinding Machine",
    "price": "₹ 68,000/Piece",
    "shortDescription": "Stator Core Grinding Machine for high-precision industrial grinding applications.",
    "fullDescription": [
      "The Stator Core Grinding Machine is a custom-engineered solution by Grindstone Machinery Industries, designed specifically for the electrical and motor manufacturing industries. In the competitive industrial landscape of Ahmedabad and across Gujarat, achieving perfect roundness and surface uniformity on stator cores is vital for motor efficiency. This machine is optimized to grind the outer or inner diameters of laminated stator stacks, ensuring minimal burr formation and maximum magnetic performance in electric motors and generators.",
      "Built with a focus on high-volume production and repeatability, the Stator Core Grinder features specialized work-holding fixtures that prevent distortion during the grinding process. Our engineering team in Vatva GIDC has refined this model to offer quick changeover times, making it suitable for varying frame sizes. As a trusted manufacturer and exporter, we ensure that every machine is built to withstand the abrasive nature of laminated steel while maintaining micron-level precision. This commitment to quality has made us a preferred partner for electrical engineering firms seeking reliable, high-performance machinery that meets IS and ISO international standards for precision and durability."
    ],
    "features": [
      "Ensures Precise Dimensional Accuracy and Flatness: Stator cores require very tight dimensional tolerances and a high degree of flatness to ensure proper alignment within the motor or generator and optimal electromagnetic performance. These grinding machines are designed to achieve this precision, leading to improved efficiency and reduced noise and vibration.",
      "Delivers a High-Quality Surface Finish for Optimal Performance: A smooth surface finish on the stator core laminations minimizes air gap variations and eddy current losses, contributing to increased efficiency and reduced heat generation in the electrical machine. Grinding provides this critical surface quality.",
      "Capable of Handling Delicate and Complex Geometries: Stator cores are often made of stacked, thin laminations, making them somewhat delicate. Specialized grinding machines are designed to handle these complex geometries and fragile structures without causing damage, ensuring the integrity of the core's magnetic properties.",
      "Available in different sizes and models as per customer requirements."
    ],
    "mainImage": "/images/products/stator-core-grinding-machine-500x500.webp",
    "applications": [
      "Electric Motor Manufacturing",
      "Generator Stator Finishing",
      "Laminated Core Precision Grinding",
      "Industrial Fan Motor Production",
      "Electrical Component Fabrication"
    ],
    "gallery": []
  },
  {
    "id": "GSM-1003",
    "slug": "universal-cylindrical-grinding-machine",
    "legacyId": null,
    "name": "Universal Cylindrical Grinding Machine",
    "category": "Grinding Machine",
    "price": "₹ 7,45,000/Piece",
    "shortDescription": "1250mm Heavy Duty Hydraulic Universal Cylindrical Grinding Machine for submersible pump rotor grinding.",
    "fullDescription": [
      "Heavy Duty Hydraulic Universal Cylindrical Grinding Machine with 1250mm grinding length.",
      "Center height available from 150mm to 500mm for heavy diameter OD grinding.",
      "Work head with AC Motor and VFD for variable speed operation."
    ],
    "features": [
      "Heavy Duty Hydraulic Model: Suitable for large and heavy workpieces.",
      "Suitable for Submersible Pump Rotor Grinding: Handles long and heavy rotors.",
      "Work Head with VFD: Variable speed AC motor for flexible operations."
    ],
    "specifications": {
      "Grinding Length": "1250 mm (Between Centers)",
      "Center Height": "150 mm to 500 mm",
      "Grinding Wheel Size": "450 x 50 x 127 mm",
      "Wheel Speed": "1900 / 2100 RPM",
      "Minimum Order Quantity": "1 Piece"
    },
    "applications": [
      "Submersible Pump Rotor Grinding",
      "Heavy OD Grinding",
      "Shaft Grinding",
      "Tool Room Applications"
    ],
    "mainImage": "/images/products/universal-cylindrical-grinding-machine-500x500.webp",
    "gallery": []
  },
  {
    "id": "GSM-1004",
    "slug": "hydraulic-universal-cylindrical-grinders",
    "legacyId": null,
    "name": "Hydraulic Universal Cylindrical Grinders",
    "category": "Grinding Machine",
    "price": "₹ 7,50,000/Piece",
    "shortDescription": "Hydraulic Universal Cylindrical Grinders for high-precision industrial grinding applications.",
    "fullDescription": [
      "Our Hydraulic Universal Cylindrical Grinders represent the pinnacle of fluid-power precision, specifically designed for high-volume manufacturing sectors in Ahmedabad's industrial corridors. This machine utilizes advanced hydraulic systems for table traversing and in-feed movements, providing the smooth, vibration-free motion essential for achieving micron-level tolerances and superior surface aesthetics. It is a preferred choice for industries in Gujarat that require consistent performance over extended production cycles, such as component manufacturing for the power and construction sectors.",
      "The hydraulic design allows for variable table speeds and automatic in-feed cycles, which significantly reduces operator fatigue while increasing throughput. Manufactured at our state-of-the-art facility in Vatva GIDC, every unit undergoes rigorous testing to ensure hydraulic stability and thermal resistance. As a leading manufacturer with 15+ years of experience, we incorporate high-grade components that ensure long-term reliability and minimal maintenance. Whether you are dealing with large industrial rollers or precision mechanical parts, our hydraulic universal grinders offer the power and precision needed to stay competitive in the global engineering market."
    ],
    "features": [
      "ISO 9001:2015 Certified",
      "Precision Engineering",
      "Industrial Durability",
      "Heavy-Duty Construction"
    ],
    "mainImage": "/images/products/hydraulic-universal-cylindrical-grinders-500x500.webp",
    "applications": [
      "Precision Component Manufacturing",
      "Hydraulic Cylinder Rod Grinding",
      "Automotive Parts Finishing",
      "Tool Room Operations",
      "General Engineering Projects"
    ],
    "gallery": []
  },
  {
    "id": "GSM-1005",
    "slug": "od-id-grinding-machine",
    "legacyId": null,
    "name": "OD ID Grinding Machine",
    "category": "Grinding Machine",
    "price": "₹ 7,75,000/Piece",
    "shortDescription": "OD ID Grinding Machine for high-precision industrial grinding applications.",
    "fullDescription": [
      "The OD & ID Grinding Machine from Grindstone Machinery Industries is an innovative dual-purpose solution tailored for the precision-oriented engineering firms of Ahmedabad and Gujarat. This machine is expertly engineered to perform both Outer Diameter (OD) and Inner Diameter (ID) grinding on a single setup, drastically reducing machine-time and improving the concentricity of finished components. It is an ideal asset for manufacturing items like bearing races, bushings, and gear hubs where the relationship between internal and external surfaces is critical.",
      "As a dominant manufacturer in the Vatva GIDC region, we have focused on a rigid machine architecture that supports multi-functional grinding without compromising on precision. The transition between ID and OD grinding is managed through a precisely balanced wheel-head, ensuring that operators can switch modes with minimal adjustment. Our 15+ years of industry experience are reflected in the machine's ergonomics and its ability to maintain tight tolerances under continuous load. By choosing our OD & ID grinders, industrial units can optimize their floor space and capital investment while delivering export-quality components that meet the highest international precision benchmarks."
    ],
    "features": [
      "ISO 9001:2015 Certified",
      "Precision Engineering",
      "Industrial Durability",
      "Heavy-Duty Construction"
    ],
    "mainImage": "/images/products/od-id-grinding-machine-500x500.webp",
    "applications": [
      "Bearing Race Manufacturing",
      "Gear Hub Precision Grinding",
      "Bushings and Sleeves Finishing",
      "Concentricity-Critical Parts",
      "Multi-Operation Machine Components"
    ],
    "gallery": []
  },
  {
    "id": "GSM-1006",
    "slug": "centerless-grinding-machines",
    "legacyId": null,
    "name": "Centerless Grinding Machines",
    "category": "Grinding Machine",
    "price": "₹ 5,80,000/Piece",
    "shortDescription": "Rigid centerless grinding machine with nickel chrome steel spindle, oil bath lubrication, and ±5° regulating wheel swivel.",
    "fullDescription": [
      "Centerless Grinding Machines by Grindstone Machinery Industries are engineered for high-speed, high-volume production of cylindrical components without the need for centering or work-holding between centers. This makes them exceptionally efficient for manufacturing hubs in Ahmedabad and Gujarat that produce massive quantities of bolts, pins, valves, and automotive shafts. The through-feed or in-feed capabilities of our centerless grinders allow for the continuous processing of materials, resulting in significant improvements in production throughput and cost-per-part efficiency.",
      "Our facility in Vatva GIDC utilizes premium materials to construct machines that offer superior damping and thermal stability, crucial for maintaining accuracy during high-speed operations. As a leading manufacturer and exporter with over 15 years of industry experience, we ensure that our centerless grinders provide consistent roundness and diameter control even for long or thin workpieces. The machine's design simplifies the grinding process while offering high levels of automation. Whether you are supplying the global automotive market or local industrial sectors, our centerless grinding solutions provide the reliability and precision required to maintain a dominant market position."
    ],
    "features": [
      "Rigid and Sturdy Construction: Maximum rigidity for consistent grinding accuracy.",
      "Hardened Nickel Chrome Steel Spindle: Long life precision and minimal runout.",
      "Oil Bath Lubrication: Automatic lubrication for smooth and continuous operation.",
      "Adjustable Taper Bush Bearings: Precision bearing system with double acting thrust ball bearing.",
      "Regulating Wheel Head Swivel ±5°: Suitable for taper and angled grinding."
    ],
    "specifications": {
      "Max Grinding Diameter": "100 mm",
      "Spindle Material": "Nickel Chrome Steel (Hardened)",
      "Lubrication": "Oil Bath (Splash System)",
      "Drive": "V-Belts",
      "Regulating Wheel Swivel": "±5°"
    },
    "applications": [
      "Centerless OD Grinding",
      "High Production Grinding",
      "Pin and Rod Grinding",
      "Bearing Component Grinding",
      "Precision Shaft Grinding"
    ],
    "mainImage": "/images/products/centerless-grinding-machines-500x500.webp",
    "gallery": []
  },
  {
    "id": "GSM-1007",
    "slug": "cnc-cylindrical-grinding-machine",
    "legacyId": null,
    "name": "CNC Cylindrical Grinding Machine",
    "category": "Grinding Machine",
    "price": "₹ 28,00,000/Piece",
    "shortDescription": "Heavy duty CNC Cylindrical Grinding Machine with angular head for OD & Face grinding in one setup.",
    "fullDescription": [
      "The CNC Cylindrical Grinding Machine from Grindstone Machinery Industries is the definitive choice for high-precision, automated manufacturing in the industrial clusters of Ahmedabad and Gujarat. Equipped with state-of-the-art Computer Numerical Control (CNC) systems, this machine is designed to deliver exceptional accuracy, repeatability, and efficiency for complex grinding tasks across automotive, aerospace, and medical sectors. Its heavy-duty base, cast from high-grade CI, provides the vibration-dampening foundation necessary for achieving micron-level tolerances and superior surface finishes on the most demanding workpieces.",
      "As a leading manufacturer and exporter in Vatva GIDC, we've optimized our CNC models to feature high-precision ground ball screws (P4 grade) and advanced software interfaces that simplify complex programming. This allows for seamless transitions between OD, face, and shoulder grinding in a single setup, significantly increasing production throughput and reducing operator error. Backed by 15+ years of engineering expertise, our CNC grinders are built to withstand continuous industrial use while maintaining rigorous export-quality standards. We provide comprehensive technical support and training, ensuring that your facility can leverage the full potential of our advanced grinding technology to stay ahead in the global market."
    ],
    "features": [
      "High Precision CNC Control: Automated cycles with tight tolerances and consistent accuracy.",
      "Multiple Grinding Operations: Straight, taper, plunge, profile, and face grinding in one setup.",
      "Programmable and Repeatable Production: Stored programs reduce setup time for repeat jobs."
    ],
    "specifications": {
      "Between Centers": "600 mm",
      "Grinding Wheel Size": "600 x 100 x 254 mm",
      "Ball Screw Grade": "P4 (High Precision)",
      "Head Configuration": "Angular (OD & Face)",
      "Spindle Speed": "500 RPM",
      "Minimum Order Quantity": "1 Piece"
    },
    "applications": [
      "OD Cylindrical Grinding",
      "Face Grinding",
      "Taper Grinding",
      "Profile Grinding",
      "High-Volume Production"
    ],
    "mainImage": "/images/products/cnc-cylindrical-grinding-machine-500x500.webp",
    "gallery": []
  },
  {
    "id": "GSM-1008",
    "slug": "manual-cylindrical-grinding-machine-alt-price",
    "legacyId": null,
    "name": "Manual Cylindrical Grinding Machine (Alt Price)",
    "category": "Grinding Machine",
    "price": "₹ 3,05,000/Piece",
    "shortDescription": "Manual Cylindrical Grinding Machine (Alt Price) for high-precision industrial grinding applications.",
    "fullDescription": [
      "This Manual Cylindrical Grinding Machine variant from Grindstone Machinery Industries offers a cost-effective yet high-precision solution for workshops and tool rooms across Ahmedabad and the wider Gujarat industrial belt. Engineered with the same structural integrity as our premium models, this variant is designed to provide reliable, micron-level accuracy for a wide array of cylindrical components. It is particularly suitable for small-scale production, repair shops, and academic laboratories where manual control and versatility are prioritized alongside budget efficiency.",
      "Our engineering team in Vatva GIDC has ensured that this model maintains exceptional stability through high-grade bed castings and precision-ground sliding surfaces. As a trusted manufacturer, we've focused on creating an ergonomic design that facilitates ease of operation for tasks ranging from external (OD) grinding to specialized taper work. With over 15 years of industry experience, we ensure that every machine is built to IS: 2368 standards, providing a professional-grade finish on diverse materials including mild steel, alloy steel, and hardened components. This combination of affordability and precision makes it a preferred choice for growing manufacturing units across India seeking dependable grinding technology."
    ],
    "features": [
      "ISO 9001:2015 Certified",
      "Precision Engineering",
      "Industrial Durability",
      "Heavy-Duty Construction"
    ],
    "mainImage": "/images/products/manual-cylindrical-grinding-machine-500x500 (1).webp",
    "applications": [
      "Small-Scale Workshop Production",
      "Tool and Die Repair",
      "Maintenance Department Jobs",
      "Educational Institute Labs",
      "Prototyping and One-off Parts"
    ],
    "gallery": []
  },
  {
    "id": "GSM-1009",
    "slug": "external-cylindrical-grinding-machine",
    "legacyId": null,
    "name": "External Cylindrical Grinding Machine",
    "category": "Grinding Machine",
    "price": "₹ 8,98,000/Piece",
    "shortDescription": "External Cylindrical Grinding Machine for external OD grinding with hydraulic table and 300mm grinding length.",
    "fullDescription": [
      "The External Cylindrical Grinding Machine from Grindstone Machinery Industries is specifically engineered for precision Outer Diameter (OD) grinding, catering to the demanding requirements of manufacturing sectors in Ahmedabad and across Gujarat. This machine excels in producing components with superior surface finishes and tight dimensional tolerances, making it ideal for shafts, pins, and other cylindrical parts where external accuracy is paramount. Its robust construction and advanced grinding capabilities ensure consistent, high-quality output for both batch production and specialized tool room applications.",
      "Our facility in Vatva GIDC integrates a high-precision hydraulic table drive, ensuring smooth, consistent, and vibration-free movement essential for achieving micron-level accuracy. This hydraulic system allows for infinitely variable feed rates, providing operators with enhanced control over the grinding process and contributing to extended wheel life. As a leading manufacturer and exporter with over 15 years of experience, we build these machines with heavy-duty cast iron frames, designed to withstand continuous industrial operation while maintaining peak performance. This commitment to quality and precision makes our External Cylindrical Grinding Machine a reliable asset for any industry focused on producing high-quality external cylindrical components."
    ],
    "features": [
      "Hydraulic Table Drive: Smooth and consistent table movement for accurate OD grinding.",
      "Precision Engineering: High dimensional accuracy for external grinding operations.",
      "Heavy-Duty Construction: Rigid frame suitable for continuous industrial production."
    ],
    "specifications": {
      "Maximum Grinding Length": "300 mm",
      "Center Height": "130 mm",
      "Table Stroke": "300 mm",
      "Maximum Grinding Diameter": "200 mm",
      "Table Drive": "Hydraulic",
      "Minimum Order Quantity": "1 Piece"
    },
    "applications": [
      "External OD Grinding",
      "Shaft Grinding",
      "Pin and Component Grinding",
      "Tool Room Use"
    ],
    "mainImage": "/images/products/external-cylindrical-grinding-machine-500x500.webp",
    "gallery": []
  },
  {
    "id": "GSM-1010",
    "slug": "hydraulic-centerless-grinding-machine",
    "legacyId": null,
    "name": "Hydraulic Centerless Grinding Machine",
    "category": "Grinding Machine",
    "price": "₹ 7,25,000/Piece",
    "shortDescription": "Hydraulic Centerless Grinding Machine for high production grinding — 1-100mm diameter capacity, 10 HP wheel motor.",
    "fullDescription": [
      "Grindstone Machinery Industries' Hydraulic Centerless Grinding Machine is the industry standard for high-volume, automated production of cylindrical components in Ahmedabad and Gujarat. By integrating advanced hydraulic systems for both the grinding and regulating wheel feeds, this machine provides the consistent force and smooth motion necessary for high-speed, centerless processing of materials. It is a critical asset for sectors like fastener manufacturing, automotive valve production, and hydraulic component engineering, where throughput and exact diameter control are essential.",
      "Our Vatva GIDC production facility builds these hydraulic models with a focus on structural rigidity and thermal stability, allowing for continuous operation under heavy loads. The hydraulic dressers for both wheels ensure that accurate profiles are maintained with minimal downtime, while the robust bed casting effectively dampens vibrations. As a premier manufacturer and exporter with over 15 years of experience, we've designed this centerless grinder to handle various material types with exceptional surface finishes and tight roundness tolerances. This machine is a reliable, cost-effective solution for any high-scale production line seeking to maximize efficiency and maintain world-class quality standards in the precision grinding industry."
    ],
    "features": [
      "Rigid and Sturdy Construction: Maximum rigidity for consistent grinding accuracy.",
      "Hardened Nickel Chrome Steel Spindle: Long life precision and minimal runout.",
      "Oil Bath Lubrication: Smooth continuous operation with automatic lubrication."
    ],
    "specifications": {
      "Grinding Capacity Diameter": "1 – 100 mm",
      "Grinding Wheel Size": "350 x 100 x 127 mm",
      "Grinding Wheel Speed": "1350 – 1500 RPM",
      "Regulating Wheel Size": "230 x 100 x 76.2 mm",
      "Regulating Wheel Speed": "20 / 40 / 100 RPM",
      "Wheel Motor Power": "10 HP",
      "Regulating Motor Power": "1.5 HP",
      "Power Supply": "415V, 50Hz"
    },
    "applications": [
      "Centerless OD Grinding",
      "High Production Runs",
      "Pin and Rod Grinding",
      "Bearing Outer Ring Grinding",
      "Precision Component Finishing"
    ],
    "mainImage": "/images/products/centerless-grinding-machines-500x500.webp",
    "gallery": []
  },
  {
    "id": "GSM-1011",
    "slug": "cnc-cylindrical-grinding-machines",
    "legacyId": null,
    "name": "Cnc Cylindrical Grinding Machines",
    "category": "Grinding Machine",
    "price": "₹ 28,000/Piece",
    "shortDescription": "Cnc Cylindrical Grinding Machines for high-precision industrial grinding applications.",
    "fullDescription": [
      "Grindstone Machinery Industries' CNC Cylindrical Grinding Machines are engineered to meet the most stringent demands for precision and efficiency in modern manufacturing. These advanced machines integrate Computer Numerical Control (CNC) technology to automate complex grinding operations, ensuring unparalleled accuracy and repeatability for a diverse range of cylindrical components. Ideal for industries requiring high-volume production with intricate geometries, our CNC grinders deliver superior surface finishes and micron-level tolerances consistently.",
      "Manufactured at our state-of-the-art facility in Vatva GIDC, Ahmedabad, each machine features a robust, vibration-dampening structure and high-precision linear guides for stable performance. The intuitive CNC interface allows for easy programming of multi-axis grinding, including OD, ID, face, and taper grinding in a single setup, significantly reducing cycle times and setup errors. With over 15 years of expertise, Grindstone Machinery Industries is committed to providing cutting-edge grinding solutions that enhance productivity and maintain the highest quality standards, making our CNC cylindrical grinders a strategic investment for competitive industrial operations."
    ],
    "features": [
      "ISO 9001:2015 Certified",
      "Precision Engineering",
      "Industrial Durability",
      "Heavy-Duty Construction"
    ],
    "mainImage": "/images/products/cnc-cylindrical-grinding-machines-500x500.webp",
    "applications": [
      "High-Volume Automotive Production",
      "Aerospace Component Precision",
      "Medical Device Manufacturing",
      "Complex Shaft Profiling",
      "Automated Precision Grinding"
    ],
    "gallery": []
  },
  {
    "id": "GSM-1012",
    "slug": "hydraulic-cylindrical-grinding-machine",
    "legacyId": null,
    "name": "Hydraulic Cylindrical Grinding Machine",
    "category": "Grinding Machine",
    "price": "₹ 8,76,000/Piece",
    "shortDescription": "High precision hydraulic cylindrical grinding machine for OD grinding of shafts, gears, pins and mould components.",
    "fullDescription": [
      "GMI make High Precision Hydraulic Cylindrical Grinding Machine suitable for OD grinding of all types of shafts, gears, pins, and mould components.",
      "Turcite-B slideway coating on all movable slides and table for long life performance. Automatic lubrication system provided."
    ],
    "features": [
      "Smooth and Consistent Feed Rates: Infinitely variable hydraulic feed for better surface finish and accuracy.",
      "Enhanced Control and Reduced Vibration: Hydraulic damping for higher precision and extended wheel life.",
      "Increased Power and Capacity: Handles larger and heavier workpieces with demanding grinding operations."
    ],
    "specifications": {
      "Application": "OD Grinding of Shafts, Gears, Pins, Mould Components",
      "Slideway Coating": "Turcite-B",
      "Lubrication": "Automatic System",
      "Construction": "Rigid CI Casting",
      "Minimum Order Quantity": "1 Piece"
    },
    "applications": [
      "Shaft Grinding",
      "Gear OD Grinding",
      "Pin Grinding",
      "Mould Component Grinding",
      "Precision OD Grinding"
    ],
    "mainImage": "/images/products/hydraulic-cylindrical-grinding-machine-500x500.webp",
    "gallery": []
  },
  {
    "id": "GSM-1013",
    "slug": "internal-grinding-machine",
    "legacyId": null,
    "name": "Internal Grinding Machine",
    "category": "Grinding Machine",
    "price": "₹ 7,25,000/Piece",
    "shortDescription": "Hydraulic Internal Bore Grinding Machine — 0.005mm machine accuracy for batch production and tool room applications.",
    "fullDescription": [
      "Hydraulic Internal Bore Grinding Machine suitable for batch production and tool room high precision applications.",
      "Machine accuracy: 0.005mm."
    ],
    "features": [
      "High Machine Accuracy: 0.005mm precision for critical bore grinding applications.",
      "Suitable for Batch Production: Ideal for both high-volume runs and tool room single pieces.",
      "Hydraulic Operation: Smooth and controlled feed for consistent bore quality."
    ],
    "specifications": {
      "Grinding Range": "5 mm to 500 mm ID",
      "Maximum ID Length": "800 mm",
      "Machine Accuracy": "0.005 mm",
      "Price": "₹ 5,50,000 per Piece"
    },
    "applications": [
      "Internal Bore Grinding",
      "Batch Production",
      "Tool Room Use",
      "Sleeve and Housing Grinding"
    ],
    "mainImage": "/images/products/internal-grinding-machine-500x500.webp",
    "gallery": []
  },
  {
    "id": "GSM-1014",
    "slug": "cylindrical-grinding-machine-job-work",
    "legacyId": null,
    "name": "Cylindrical Grinding Machine Job Work",
    "category": "Grinding Machine",
    "price": "₹ 500/Square",
    "shortDescription": "Cylindrical Grinding Machine Job Work for high-precision industrial grinding applications.",
    "fullDescription": [
      "we have a model of hydraulic cylindrical grinding machine for job work of 300mm length and 1000mm length",
      "machine accuracy is"
    ],
    "features": [
      "ISO 9001:2015 Certified",
      "Precision Engineering",
      "Industrial Durability",
      "Heavy-Duty Construction"
    ],
    "mainImage": "/images/products/cylindrical-grinding-job-work-500x500.webp",
    "applications": [
      "Custom Shaft Component Finishing",
      "Industrial Repair and Refurbishment",
      "Third-Party Grinding Services",
      "Large-Scale Cylindrical Refinishing",
      "Precision Job-Work Contracts"
    ],
    "gallery": []
  },
  {
    "id": "GSM-1015",
    "slug": "internal-cylindrical-grinding-machine",
    "legacyId": null,
    "name": "Internal Cylindrical Grinding Machine",
    "category": "Grinding Machine",
    "price": "₹ 6,98,000/Piece",
    "shortDescription": "Internal Cylindrical Grinding Machine for high-precision industrial grinding applications.",
    "fullDescription": [
      "INTERNAL GRINDING ATTACHMENT (optional - if required)Spindle mm Dia. 60 x 250mm LengthSpindle Speed Rpm 18000Minimum Bore & Length to be Ground Mm Dia. 20 x 25mm LengthMaximum Bore & Length to be Ground Mm Dia. 120 X 150mm LengthMotor Power HP 1ID Attachment fitted with P4 grade Matched Pair anti-friction bearings of 2 pair, Aluminummade dynamic balanced pulley and imported endless flat belt without any joint and safetyguard.Two numbers standard size ground quills supplied along with the machine for different size ofbore grinding."
    ],
    "features": [
      "ISO 9001:2015 Certified",
      "Precision Engineering",
      "Industrial Durability",
      "Heavy-Duty Construction"
    ],
    "mainImage": "/images/products/internal-cylindrical-grindrical-machine-500x500.webp",
    "applications": [
      "Precision Bore Grinding",
      "Bearing Housing Finishing",
      "Deep-Hole Cylinder Grinding",
      "Specialized Tool Room Bores",
      "Internal Concentricity Jobs"
    ],
    "gallery": []
  },
  {
    "id": "GSM-1016",
    "slug": "id-grinding-machine",
    "legacyId": null,
    "name": "ID Grinding Machine",
    "category": "Grinding Machine",
    "price": "₹ 7,00,000/Piece",
    "shortDescription": "High-precision ID grinding machine for accurate internal diameter finishing of industrial bores.",
    "fullDescription": [
      "The ID Grinding Machine by Grindstone Machinery Industries is a flagship product engineered for the high-precision finishing of internal diameters on critical industrial components. Based in Ahmedabad's Vatva GIDC, our facility produces these machines to meet the rigorous demands of manufacturers across Gujarat who require absolute concentricity and superior surface finishes in bores, bushings, and sleeves. This machine is particularly vital for sectors like automotive transmission engineering and hydraulic valve manufacturing where the integrity of internal surfaces is paramount.",
      "As a premier manufacturer and exporter with over 15 years of industry experience, we have focused on a rigid machine architecture that effectively dampens vibrations even at high spindle speeds. Our ID grinders feature precisely balanced internal spindles and specialized work-holding fixtures that ensure consistent, repeatable results across large production batches. We understand the technical nuances of internal grinding, from managing thermal expansion to optimizing coolant flow within deep bores. By choosing our ID grinding solutions, your facility benefits from a machine that is not only built to international IS and ISO standards but also backed by our commitment to engineering excellence and long-term after-sales support."
    ],
    "features": [
      "High Precision Internal Grinding: Achieves micron-level accuracy for internal bores and cylindrical cavities.",
      "Vibration-Damping Construction: High-grade CI casting ensures stable operation and superior surface finishes.",
      "Versatile Spindle Options: Supports various spinle speeds and sizes for diverse bore grinding requirements."
    ],
    "mainImage": "/images/products/id-grinding-machine-500x500.webp",
    "applications": [
      "Hydraulic Valve Bore Finishing",
      "Transmission Gear ID Grinding",
      "Bushing and Sleeve Production",
      "High-Precision Internal Diameters",
      "Aeronautical Component Finishing"
    ],
    "gallery": []
  },
  {
    "id": "GSM-1017",
    "slug": "cutter-od-grinding-machine",
    "legacyId": null,
    "name": "Cutter OD Grinding Machine",
    "category": "Grinding Machine",
    "price": "₹ 6,10,000/Piece",
    "shortDescription": "Precision Cutter OD Grinding Machine for sharp, accurate outer diameter grinding of industrial cutting tools.",
    "fullDescription": [
      "The Cutter OD Grinding Machine from Grindstone Machinery Industries is specifically designed for the precision-focused tool room environments found throughout Ahmedabad and the Gujarat industrial corridor. This machine is optimized for the outer diameter (OD) grinding of industrial cutting tools, including end mills, reamers, and milling cutters. Its versatile design allows for the management of various geometries, ensuring that every tool edge is perfectly sharpened and its OD is ground to exact specifications, which is critical for maintaining consistency in machining operations.",
      "Manufactured at our Vatva GIDC facility, these cutter grinders feature high-precision spindles and finely adjustable tool-heads that allow for the manipulation of varied relief angles and diameters. As a trusted manufacturer and exporter with 15+ years of experience, we've engineered this machine to handle materials ranging from high-speed steel (HSS) to specialized carbide alloys. The robust construction and smooth movement of the table ensure that vibration is minimized, resulting in superior surface qualities that extend tool life and improve work-piece accuracy. Our Cutter OD grinders are a reliable choice for any industrial facility seeking to bring high-precision tool sharpening and OD finishing in-house."
    ],
    "features": [
      "Precision Tool Sharpening: Maintains exact OD and relief angles for industrial cutting tools.",
      "Versatile Geometry Handling: Suitable for end mills, reamers, and diverse milling cutters.",
      "Vibration-Free Performance: Rigid structure ensures clean finishes and extended tool longevity."
    ],
    "mainImage": "/images/products/cutter-od-grinding-machine-500x500.webp",
    "applications": [
      "End Mill Sharpening",
      "Reamer OD Grinding",
      "Milling Cutter Maintenance",
      "Tool and Die Manufacturing",
      "Cutting Tool Refurbishment"
    ],
    "gallery": []
  },
  {
    "id": "GSM-1018",
    "slug": "angle-wheel-dresser",
    "legacyId": null,
    "name": "Angle Wheel Dresser",
    "category": "Grinding Machine",
    "price": "₹ 28,000/Piece",
    "shortDescription": "Angle Wheel Dresser for high-precision industrial grinding applications.",
    "fullDescription": [
      "The Angle Wheel Dresser by Grindstone Machinery Industries is an indispensable precision tool for grinding wheel maintenance in the industrial shops of Ahmedabad and Gujarat. This device is engineered to provide accurate, multi-angle dressing of grinding wheels, ensuring that wheels maintain their intended geometry and cutting efficiency over long production cycles. It is a critical component for achieving the high-precision profiles required in specialized grinding tasks across the engineering and fabrication sectors.",
      "Built with a focus on ease of use and repeatability, our angle wheel dressers allow operators to set precise angles for dressing both external and internal wheel surfaces. Manufactured using durable CI and MS materials at our Vatva GIDC facility, these dressers provide the stability and precision needed for tool room and production applications. We offer custom-made solutions to fit specific wheel types and machine configurations, backed by our 15+ years of industry expertise. By integrating our angle dressers into your maintenance routine, you ensure consistent wheel performance, improved surface finishes, and an overall reduction in grinding costs."
    ],
    "features": [
      "Universal 0–360° Dressing: Flexible angle adjustments for complex wheel profiling.",
      "High-Accuracy Geometry: Ensures wheels maintain perfect form for precision grinding.",
      "Durable Indian Craftsmanship: Built to withstand rigorous industrial shop environments."
    ],
    "mainImage": "/images/products/wheel-angel-radius-dressing-device-500x500 (1).webp",
    "applications": [
      "Grinding Wheel Maintenance",
      "Precision Wheel Profiling",
      "Tool Room Accessory Management",
      "Angle and Radius Generation",
      "Shop Floor Quality Control"
    ],
    "gallery": []
  },
  {
    "id": "GSM-1019",
    "slug": "hydraulic-internal-grinding-machine",
    "legacyId": null,
    "name": "Hydraulic Internal Grinding Machine",
    "category": "Grinding Machine",
    "price": "₹ 7,25,000/Piece",
    "shortDescription": "Hydraulic Internal Grinding Machine for deep, high-precision internal bore grinding services.",
    "fullDescription": [
      "Our Hydraulic Internal Grinding Machine is a testament to Grindstone Machinery Industries' commitment to high-force precision, tailored for the heavy-duty manufacturing sectors of Ahmedabad and Gujarat. By utilizing advanced hydraulic systems for table traversing and work-head feeding, this machine provides the exceptionally smooth and consistent motion required for grinding deep internal bores with micron-level accuracy. This model is preferred by industries in the Vatva GIDC industrial belt that require consistent ID finishing over long production cycles, such as component manufacturing for the automotive and energy sectors.",
      "The hydraulic design significantly reduces operator fatigue by automating feed cycles and ensuring stable table speeds, even under heavy load. Manufactured at our state-of-the-art facility, every unit undergoes rigorous testing to ensure hydraulic stability and thermal resistance during extended operation. As a leading manufacturer and exporter with over 15 years of industry experience, we incorporate premium hydraulic valves and high-precision spindles to ensure long-term reliability and minimal maintenance. Whether you are processing hardened gears or precision hydraulic sleeves, our hydraulic internal grinders offer the power and precision needed to meet the highest international quality standards."
    ],
    "features": [
      "Hydraulic Feed Precision: Advanced fluid systems ensure smooth, consistent bore finishing.",
      "High Volume Efficiency: Automated cycles optimized for intensive production environments.",
      "Robust Structural Integrity: Designed to maintain thermal and vibration stability during deep grinding."
    ],
    "mainImage": "/images/products/hydraulic-internal-grinding-machine-500x500.webp",
    "applications": [
      "Deep Bore Industrial Grinding",
      "Heavy-Duty ID Finishing",
      "Special Purpose Machine Components",
      "Automotive Gearbox Components",
      "High-Pressure Sleve Grinding"
    ],
    "gallery": []
  },
  {
    "id": "GSM-1020",
    "slug": "cylindrical-grinding-machine",
    "legacyId": null,
    "name": "Cylindrical Grinding Machine",
    "category": "Grinding Machine",
    "price": "₹ 8,25,000/Piece",
    "shortDescription": "Base model cylindrical grinding machine for reliable, high-precision industrial diameter grinding.",
    "fullDescription": [
      "The Cylindrical Grinding Machine from Grindstone Machinery Industries is our versatile base model, designed to provide reliable and high-precision grinding across a wide spectrum of industrial applications. Serving as a foundational tool for engineering firms in Ahmedabad and Gujarat, this machine is engineered to deliver consistent external diameter (OD) finishing on a variety of cylindrical workpieces. Its robust construction and user-friendly design make it an ideal choice for both production environments and specialized tool room operations where precision and reliability are non-negotiable.",
      "At our factory in Vatva GIDC, we use high-grade materials and precisely ground components to ensure that every machine delivers micron-level accuracy. The machine features a rigid bed casting that minimizes vibrations, allowing for superior surface finishes that meet international quality benchmarks. As a leading manufacturer and exporter with 15+ years of experience, we've refined this model to offer long-term durability and ease of maintenance. Whether you are grinding shafts, rollers, or precision mechanical components, our cylindrical grinders provide the stability and repeatability needed to achieve high-quality results consistently, making it a valuable asset for the competitive global manufacturing market."
    ],
    "features": [
      "Reliable OD Finishing: Consistent accuracy for a wide range of cylindrical workpieces.",
      "Heavy-Duty Castings: Minimizes vibrations for superior surface quality and longevity.",
      "User-Centric Design: Ergonomic controls for efficient operation in production and tool rooms."
    ],
    "mainImage": "/images/products/cylindrical-grinding-machine-500x500.webp",
    "applications": [
      "General Purpose Shaft Grinding",
      "Industrial Roller Maintenance",
      "Precision Spindle Manufacturing",
      "Batch Production Grinding",
      "Multi-Industry Component Finishing"
    ],
    "gallery": []
  },
  {
    "id": "GSM-1021",
    "slug": "cot-grinding-machine",
    "legacyId": null,
    "name": "Cot Grinding Machine",
    "category": "Grinding Machine",
    "price": "₹ 4,25,000/Piece",
    "shortDescription": "High-precision Cot Grinding Machine for restoring and finishing synthetic rubber cots in textile spinning.",
    "fullDescription": [
      "The Cot Grinding Machine by Grindstone Machinery Industries is a specialized precision tool developed specifically for the vibrant textile manufacturing sector of Ahmedabad and the wider Gujarat region. Essential for spinning mills, this machine is designed to restore and maintain the surface integrity of synthetic rubber cots used on drafting rollers. By ensuring a consistent diameter and the correct surface texture, our cot grinders play a critical role in maintaining yarn quality, reducing fiber drafting errors, and enhancing the overall efficiency of textile production lines.",
      "Manufactured at our Vatva GIDC facility, these machines are built with the rigidity and precision needed to handle various cot materials and hardness levels with extreme accuracy. As a leading manufacturer and exporter with over 15 years of industry experience, we have optimized this model to offer quick changeover times and user-friendly controls. Our cot grinders are capable of achieving micron-level tolerances, which significantly extends the lifespan of the cots and reduces operational costs for textile mills. Backed by our commitment to international quality standards, our cot grinding solutions are a trusted choice for textile engineering firms seeking reliable, high-performance maintenance machinery that meets the demands of global yarn markets."
    ],
    "features": [
      "Precise Cots Surface Finishing: Achieves the exact texture needed for optimal fiber drafting.",
      "Restoration Efficiency: Extends the life of synthetic rubber cots through accurate re-grinding.",
      "Material Versatility: Optimized to handle various rubber compounds and hardnesses."
    ],
    "mainImage": "/images/products/cots-grinding-machine-500x500.webp",
    "applications": [
      "Textile Spinning Mills",
      "Synthetic Rubber Roller Maintenance",
      "Fiber Drafting Systems",
      "Cotton and Yarn Production",
      "Textile Machinery Servicing"
    ],
    "gallery": []
  },
  {
    "id": "GSM-1022",
    "slug": "scrubber-machine-roll-grinding-machine",
    "legacyId": null,
    "name": "Scrubber Machine Roll Grinding Machine",
    "category": "Grinding Machine",
    "price": "₹ 5,35,000/Piece",
    "shortDescription": "Specialized Scrubber Machine Roll Grinding Machine for heavy-duty polished grinding of industrial rolls.",
    "fullDescription": [
      "The Scrubber Machine Roll Grinding Machine from Grindstone Machinery Industries is a heavy-duty, high-precision solution designed for the specialized needs of industrial scrubber roll manufacturing in Ahmedabad and across Gujarat. Engineered for the polished grinding of varied scrubber machine rolls, this machine ensures that every roll achieves a perfect outer diameter (OD) with a mirror-like surface finish. This high level of precision is vital for the effective operation of scrubbing systems in the chemical, pharmaceutical, and waste management industries where surface uniformity is paramount.",
      "At our factory in Vatva GIDC, we construct these machines with ultra-rigid frames that effectively dampen vibrations, allowing for exceptionally smooth grinding operations even on larger rolls. As a premier manufacturer and exporter with 15+ years of experience, we have refined this model to provide consistent results across diverse material types, from specialized alloys to coated rolls. The machine's advanced feed mechanisms and precision-aligned spindles allow operators to maintain tight tolerances and exceptional surface aesthetics consistently. By investing in our scrubber roll grinders, industrial facilities benefit from a reliable, long-lasting machine that enhances the performance and durability of their scrubber systems while meeting the highest international industrial standards."
    ],
    "features": [
      "Mirror-Finish OD Grinding: Delivers exceptionally smooth surfaces for critical scrubber rolls.",
      "Heavy-Duty Construction: Engineered for stability and vibration control during polished grinding.",
      "Multi-Industry Application: Suitable for rolls used in pharmaceutical, chemical, and waste sectors."
    ],
    "mainImage": "/images/products/roll-grinders-500x500.webp",
    "applications": [
      "Industrial Scrubber Roll Finishing",
      "Chemical Processing Rollers",
      "Pharmaceutical Grade Polishing",
      "Waste Management Equipment",
      "Corrosion-Resistant Surface Prep"
    ],
    "gallery": []
  },
  {
    "id": "GSM-1023",
    "slug": "auto-cut-grinding-machine",
    "legacyId": null,
    "name": "Auto Cut Grinding Machine",
    "category": "Grinding Machine",
    "price": "₹ 7,25,000/number",
    "shortDescription": "Advanced Auto Cut Grinding Machine for automated, high-precision tool room and production job works.",
    "fullDescription": [
      "The Auto Cut Grinding Machine by Grindstone Machinery Industries represents a leap in automated grinding technology, tailored for high-precision tool rooms and intensive production units in Ahmedabad and the Gujarat industrial sector. This machine is expertly engineered to handle a wide range of tasks, from specialized prototype development to high-volume production runs. Featuring an automated in-feed and cutting cycle, it significantly increases operational throughput while ensuring that every workpiece meets exact dimensional and surface finish specifications, reducing the reliance on manual operator control.",
      "Manufactured at our Vatva GIDC facility, this model is available in various configurations, supporting grinding lengths from 300mm to an impressive 2000mm, with the capacity to handle workpieces up to 600mm in diameter. As a dominant manufacturer and exporter with 15+ years of experience, we've designed the Auto Cut series for maximum versatility and structural rigidity. The machine's mirror-finish capabilities and consistent accuracy make it an ideal asset for sectors ranging from automotive manufacturing to heavy engineering. By choosing our auto-cut solutions, you benefit from a machine that combines the best of traditional grinding precision with modern automation, ensuring your facility stays at the forefront of industrial productivity and quality."
    ],
    "features": [
      "Automated In-Feed Cycles: Enhances productivity with consistent, programmable cutting operations.",
      "Extended Grinding Lengths: Capable of processing workpieces from 300mm up to 2000mm.",
      "Precision Mirror Finishing: Achieves superior surface qualities for high-end engineering components."
    ],
    "mainImage": "/images/products/auto-cut-grinding-machine-500x500.webp",
    "applications": [
      "Automated Production Job Work",
      "Precision Tool Room Engineering",
      "High-Volume Component Cutting",
      "Automotive Parts Manufacturing",
      "Special Purpose Machine Tooling"
    ],
    "gallery": []
  },
  {
    "id": "GSM-1024",
    "slug": "cot-and-apron-grinding-machine",
    "legacyId": null,
    "name": "Cot And Apron Grinding Machine",
    "category": "Grinding Machine",
    "price": "₹ 6,25,000/Piece",
    "shortDescription": "Specialized Cot and Apron Grinding Machine for high-precision textile maintenance and rubber drafting component finishing.",
    "fullDescription": [
      "The Cot and Apron Grinding Machine from Grindstone Machinery Industries is a dual-purpose maintenance solution engineered specifically for the highly demanding textile spinning industries of Ahmedabad and Gujarat. This machine is designed to provide high-precision grinding for both synthetic rubber cots and aprons, ensuring that these critical drafting components maintain optimal surface characteristics and dimensional uniformity. By integrating advanced grinding technology with specialize fixtures, we enable textile mills to achieve the high-quality yarn standards required by the global market while significantly extending the service life of their drafting accessories.",
      "At our Vatva GIDC manufacturing facility, we produce these machines with customizable configurations, offering grinding lengths from 300mm to 2000mm to suit various frame sizes. As a leading manufacturer and exporter with over 15 years of industry experience, we have also integrated a high-efficiency dust collection system to manage the waste rubber particles generated during the grinding process, ensuring a clean and safe working environment. The machine's rigid construction and precision-aligned spindles allow for exceptionally smooth finishes and tight diameter control. Our Cot and Apron grinders are a reliable, cost-effective investment for textile units seeking to maintain peak operational efficiency and superior product quality."
    ],
    "features": [
      "Dual Maintenance Capability: Precision grinding for both textile cots and drafting aprons.",
      "Integrated Dust Collection: Ensures a clean, safe industrial environment for textile operators.",
      "Precision-Aligned Spindles: Delivers the extreme accuracy needed for high-quality yarn drafting."
    ],
    "mainImage": "/images/products/cot-and-apron-grinding-machine-500x500.webp",
    "applications": [
      "Textile Spinning Unit Maintenance",
      "Rubber Apron Surface Finishing",
      "Drafting System Alignment",
      "Synthetic Fiber Processing",
      "Mill Maintenance Operations"
    ],
    "gallery": []
  },
  {
    "id": "GSM-1025",
    "slug": "hydraulic-internal-grinding-machine-duplicate",
    "legacyId": null,
    "name": "Hydraulic Internal Grinding Machine",
    "category": "Grinding Machine",
    "price": "₹ 7,25,000/Piece",
    "shortDescription": "Heavy-duty hydraulic internal grinding machine for high-force precision bore finishing.",
    "fullDescription": [
      "Our Hydraulic Internal Grinding Machine is a testament to Grindstone Machinery Industries' commitment to high-force precision, tailored for the heavy-duty manufacturing sectors of Ahmedabad and Gujarat. By utilizing advanced hydraulic systems for table traversing and work-head feeding, this machine provides the exceptionally smooth and consistent motion required for grinding deep internal bores with micron-level accuracy. This model is preferred by industries in the Vatva GIDC industrial belt that require consistent ID finishing over long production cycles, such as component manufacturing for the automotive and energy sectors.",
      "The hydraulic design significantly reduces operator fatigue by automating feed cycles and ensuring stable table speeds, even under heavy load. Manufactured at our state-of-the-art facility, every unit undergoes rigorous testing to ensure hydraulic stability and thermal resistance during extended operation. As a leading manufacturer and exporter with over 15 years of industry experience, we incorporate premium hydraulic valves and high-precision spindles to ensure long-term reliability and minimal maintenance. Whether you are processing hardened gears or precision hydraulic sleeves, our hydraulic internal grinders offer the power and precision needed to meet the highest international quality standards."
    ],
    "features": [
      "Smooth Hydraulic Table Motion: Minimizes vibrations for superior internal bore finishes.",
      "High-Force Precision: Optimized for heavy-duty industrial components and large bores.",
      "Micron-Level Tolerances: Achieves absolute concentricity in automotive and energy system parts."
    ],
    "mainImage": "/images/products/hydraulic-internal-grinding-machine-500x500.webp",
    "applications": [
      "Heavy-Duty Bore Finishing",
      "Industrial Gearbox Housing",
      "High-Pressure Sleve Grinding",
      "Shipbuilding Component Prep",
      "Aerospace Housing Precision"
    ],
    "gallery": []
  },
  {
    "id": "GSM-1026",
    "slug": "roll-grinder-machine",
    "legacyId": null,
    "name": "Roll Grinder Machine",
    "category": "Grinding Machine",
    "price": "₹ 18,00,000/Piece",
    "shortDescription": "Heavy-duty Roll Grinder Machine for large-scale industrial roll finishing in multiple sectors.",
    "fullDescription": [
      "The Roll Grinder Machine by Grindstone Machinery Industries is a powerhouse of industrial precision, engineered to handle the most demanding roll finishing tasks in Ahmedabad and the surrounding Gujarat engineering hubs. This heavy-duty, rigid model is specifically designed for the grinding of large-scale rolls utilized across a diverse range of industries, including steel, printing, paper, plastic, and textiles. Capable of processing rolls with a maximum grinding length of up to 2000mm, this machine ensures that every cylinder achieves the perfect diameter and surface profile required for high-performance industrial equipment.",
      "At our manufacturing unit in Vatva GIDC, we construct these roll grinders with robust CI graded castings that provide the thermal and structural stability necessary for large-scale operations. As a premier manufacturer and exporter with 15+ years of experience, we have equipped this machine with high-precision hydraulic systems that deliver smooth table travel and consistent feed rates, ensuring uniform surface qualities across the entire roll length. The machine features powerful spindles designed for continuous operation under heavy loads, making it a reliable investment for any large-scale production facility. Choosing our roll grinding solutions empowers your facility to maintain the highest levels of quality and efficiency in heavy industry manufacturing."
    ],
    "features": [
      "Massive Grinding Capacity: Handles rolls up to 2000mm in length for heavy industry use.",
      "Rigid Structural Design: Heavy-duty CI castings ensure stability during high-load operations.",
      "Multi-Sector Versatility: Ideal for steel, printing, paper, and plastic industry roll finishing."
    ],
    "mainImage": "/images/products/roll-grinder-machine-500x500.webp",
    "applications": [
      "Steel Mill Roll Finishing",
      "Paper Industry Cylinders",
      "Plastic Film Extrusion Rolls",
      "Printing Press Cylinder Repair",
      "Textile Processing Rollers"
    ],
    "gallery": []
  },
  {
    "id": "GSM-1027",
    "slug": "rubber-roll-grinder",
    "legacyId": null,
    "name": "Rubber Roll Grinder",
    "category": "Grinding Machine",
    "price": "₹ 12,45,000/Piece",
    "shortDescription": "Specialized Rubber Roll Grinder for high-precision finishing of industrial and printing rollers.",
    "fullDescription": [
      "The Rubber Roll Grinder from Grindstone Machinery Industries is a specialized precision machine engineered to meet the unique finishing requirements of the printing and industrial roller sectors in Ahmedabad and the Gujarat industrial belt. Designed for the high-precision outer diameter (OD) grinding of varied rubber-coated rollers, this machine is capable of handling roller lengths from 300mm to 2000mm and diameters up to 800mm. It is a critical asset for maintaining the dimensional accuracy and surface quality of rollers essential for high-quality printing and manufacturing processes.",
      "Manufactured at our state-of-the-art Vatva GIDC facility, these grinders feature a heavy-duty structure capable of carrying workpieces up to 800 Kg between centers. As a trusted manufacturer and exporter with 15+ years of experience, we have optimized the machine for versatility, allowing for the precise grinding of any type of industrial rubber compound. The precision-aligned spindles and balanced workheads ensure that even large-diameter rollers achieve absolute roundness and superior surface finishes. By integrating our rubber roll grinders into your production line, you ensure consistent performance of your printing and industrial systems while meeting the highest international standard for roller precision."
    ],
    "features": [
      "High Weight Capacity: Robust construction handles workpieces up to 800 Kg between centers.",
      "Wide Diameter Range: Capable of grinding outer diameters up to 800mm with precision.",
      "Optimized for All Rubber Compounds: Specialized settings for diverse industrial rubber materials."
    ],
    "mainImage": "/images/products/rubber-roll-grinder-500x500.webp",
    "applications": [
      "Printing Industry Roller Grinding",
      "Industrial Rubber Component Prep",
      "Packaging Machinery Rollers",
      "Synthetic Material Processing",
      "Custom Rubber Roller Solutions"
    ],
    "gallery": []
  },
  {
    "id": "GSM-1028",
    "slug": "hydraulic-roll-grinding-machine",
    "legacyId": null,
    "name": "Hydraulic Roll Grinding Machine",
    "category": "Grinding Machine",
    "price": "₹ 11,25,000/Piece",
    "shortDescription": "Advanced Hydraulic Roll Grinding Machine for consistent, high-precision finishing of large industrial rolls.",
    "fullDescription": [
      "The Hydraulic Roll Grinding Machine by Grindstone Machinery Industries is an advanced finishing solution designed for heavy-duty industrial applications in Ahmedabad and the wider Gujarat manufacturing region. This machine integrates powerful hydraulic systems to automate table traverse and wheel-head feed, ensuring a smooth, vibration-free operation essential for maintaining precise diameters on large rolls. Ideal for the printing, steel, and paper industries, it can accommodate workpieces with a maximum length of 2000mm and a diameter of 600mm, providing the consistent accuracy needed for high-load industrial machinery.",
      "At our Vatva GIDC production facility, we focus on structural rigidity and hydraulic efficiency, using premium components to ensure long-term reliability. As a leading manufacturer and exporter with over 15 years of industry experience, we offer customizable configurations to meet the specific technical requirements of our global clients. The machine's intuitive controls allow for infinitely variable table speeds and automated cycles, which enhances productivity while reducing the need for manual intervention. Our hydraulic roll grinders are a strategic investment for facilities seeking to achieve superior surface finishes and micron-level tolerances on their most critical industrial rollers."
    ],
    "features": [
      "Automated Hydraulic Feed: Provides smooth, consistent motion for large-scale roll finishing.",
      "Precision for Printing & Steel: Optimized for the demanding tolerances of specialized rolls.",
      "Customizable Configurations: Tailored to meet specific industrial requirements and roll sizes."
    ],
    "mainImage": "/images/products/hydraulic-roll-grinding-machine-500x500.webp",
    "applications": [
      "Heavy Industrial Roll Finishing",
      "High-Volume Paper Mill Work",
      "Steel Production Support",
      "Large Scale Printing Cylinders",
      "Advanced Hydraulic Roller Prep"
    ],
    "gallery": []
  },
  {
    "id": "GSM-1029",
    "slug": "roll-grinders",
    "legacyId": null,
    "name": "Roll Grinders",
    "category": "Grinding Machine",
    "price": "₹ 22,00,000/Piece",
    "shortDescription": "Heavy-duty industrial Roll Grinders for high-precision finishing of large-diameter rolls.",
    "fullDescription": [
      "The Roll Grinders from Grindstone Machinery Industries are the pinnacle of our heavy-duty machinery line, engineered for the most demanding roll finishing projects in Ahmedabad and across the Gujarat engineering corridor. This rigid, high-capacity model is specifically designed for the precision grinding of large-diameter rolls used in heavy industrial processes. Featuring a massive 500 X 50 X 254mm grinding wheel and a one-piece CI graded casting, this machine provides the unrivaled stability and power required to process roles up to 2000mm in length and 600mm in diameter with micron-level accuracy.",
      "Manufactured at our state-of-the-art Vatva GIDC facility, these roll grinders are built to withstand the rigors of continuous industrial operation. As a premier manufacturer and exporter with 15+ years of experience, we have optimized the machine for maximum reliability and structural integrity. The use of high-grade castings minimizes thermal distortion and dampens vibrations, ensuring superior surface finishes and consistent roundness across very large workpieces. These grinders are an essential asset for steel mills, paper factories, and large-scale printing units that require the highest standards of roll precision for their competitive global operations."
    ],
    "features": [
      "Massive Grinding Wheel: Equipped with 500mm wheel for efficient material removal on large rolls.",
      "One-Piece Bed Casting: Superior rigidity for vibration-free, high-precision industrial operations.",
      "High Volume Industrial Capacity: Built for continuous load handling in steel and paper mills."
    ],
    "mainImage": "/images/products/heavy-duty-roll-grinders-500x500.webp",
    "applications": [
      "Massive Scale Roll Grinding",
      "Steel and Metal Rolling Mills",
      "Large Format Paper Production",
      "Heavy Packaging Industry",
      "Specialized Industrial Cylinders"
    ],
    "gallery": []
  },
  {
    "id": "GSM-1030",
    "slug": "fan-shaft-grinding-machine",
    "legacyId": null,
    "name": "Fan Shaft Grinding Machine",
    "category": "Grinding Machine",
    "price": "₹ 4,90,000/Piece",
    "shortDescription": "Fan Shaft Grinding Machine for high-precision industrial grinding applications.",
    "fullDescription": [
      "The Fan Shaft Grinding Machine by Grindstone Machinery Industries is engineered specifically for the precision and reliability required in fan manufacturing sectors in Ahmedabad and the industrial hubs of Gujarat. This specialized cylindrical grinder is designed to achieve the extreme tolerances necessary for high-speed fan shafts, ensuring perfect roundness and concentricity to eliminate vibrations. By delivering a mirror-like surface finish, our machines enhance bearing life and overall motor efficiency for residential, commercial, and industrial fan systems.",
      "At our Vatva GIDC facility, we build these machines with high-grade components that ensure long-term stability and repeatable accuracy. As a leading manufacturer and exporter with 15+ years of experience, we understand that even micron-level deviations can cause noise and premature wear in fan assemblies. Our fan shaft grinders are capable of handling various shaft materials and sizes, offering the versatility needed for both large-scale production and custom tool-room repairs. Meeting international quality standards, these machines are a trusted solution for electrical engineering firms seeking to maintain peak product quality."
    ],
    "features": [
      "Ensures Precise Shaft Roundness: Minimizes vibrations for smooth, balanced fan operation.",
      "Superior Surface Finish: Provides mirror-like quality for optimal bearing fit and reduced wear.",
      "Variable Length Compatibility: Configurable to handle a wide range of fan shaft diameters and lengths."
    ],
    "mainImage": "/images/products/fan-shaft-grinding-machine-500x500.webp",
    "applications": [
      "Ceiling Fan Manufacturing",
      "Industrial Exhaust Systems",
      "Cooling Fan Shaft Production",
      "HVAC Component Engineering",
      "Precision Small Shaft Grinding"
    ],
    "gallery": []
  },
  {
    "id": "GSM-1031",
    "slug": "magnetic-coolant-separator",
    "legacyId": null,
    "name": "Magnetic Coolant Separator",
    "category": "Magnetic Separator",
    "price": "₹ 32,600/Piece",
    "shortDescription": "Magnetic Coolant Separator that removes ferrous particles from cutting fluids to maintain clean coolant and improve machine performance.",
    "fullDescription": [
      "The Magnetic Coolant Separator from Grindstone Machinery Industries is a crucial filtration component designed to enhance the longevity and performance of industrial grinding and machining systems in Ahmedabad and beyond. This device effectively removes ferrous contaminants from cutting fluids and coolants, preventing iron particles from re-circulating and damaging high-precision workpieces or grinding wheels. By maintaining a clean coolant stream, it significantly reduces machine wear and extends the operational life of your cutting tools, making it an essential investment for any high-precision metalworking facility.",
      "Manufactured at our Vatva GIDC unit, this separator features a simple yet robust design with high-intensity magnets that capture even microscopic iron dust. As a premier manufacturer and exporter with over 15 years of experience, we've engineered this system for continuous operation with minimal maintenance requirements. Easy to integrate into existing coolant tanks, it helps industrial facilities reduce coolant replacement costs and disposal overhead while simultaneously improving the surface finish of their machined components. Our magnetic separators are a cost-effective solution for maintaining the highest international standards of industrial cleanliness and efficiency."
    ],
    "features": [
      "Effective Ferrous Extraction: Removes iron particles to protect tools and workpiece quality.",
      "Extended Coolant Lifecycle: Reduces the frequency of coolant replacement and disposal costs.",
      "Low Maintenance Design: Minimal moving parts ensure reliable, long-term separator performance."
    ],
    "specifications": {
      "Application": "Grinding & Machining Coolant Filtration",
      "Separation Type": "Ferrous Particle Removal",
      "Maintenance": "Low (Minimal Moving Parts)"
    },
    "applications": [
      "Grinding Machine Coolant",
      "Machining Center Coolant",
      "Cutting Fluid Maintenance",
      "CNC Machine Coolant Systems"
    ],
    "mainImage": "/images/products/magnetic-coolant-separator-500x500.webp",
    "gallery": []
  },
  {
    "id": "GSM-1032",
    "slug": "industrial-magnetic-coolant-separator",
    "legacyId": null,
    "name": "Industrial Magnetic Coolant Separator",
    "category": "Magnetic Separator",
    "price": "₹ 38,000/Piece",
    "shortDescription": "Industrial Magnetic Coolant Separator with 50 LPM flow rate and 1000 Gauss magnet strength for continuous grinding operations.",
    "fullDescription": [
      "The Industrial Magnetic Coolant Separator by Grindstone Machinery Industries is a heavy-duty solution tailored for high-volume manufacturing environments in Ahmedabad and the industrial zones of Gujarat. Engineered for continuous removal of ferrous particles from coolants, this system employs high-intensity 1000 Gauss magnets to handle flow rates up to 50 Liters Per Minute (LPM). It is specifically designed to meet the rigorous demands of intensive grinding operations where maintaining coolant purity is critical for achieving consistent micron-level accuracy and superior surface aesthetics.",
      "At our Vatva GIDC factory, we construct these separators with durable, corrosions-resistant materials to ensure a long service life in challenging industrial conditions. As an established manufacturer and exporter with 15+ years of experience, we've optimized this model for seamless integration into large-scale CNC machining centers and automated production lines. By preventing the accumulation of iron sludge, it protects sensitive machine components from premature wear and significantly reduces operational downtime. Our heavy-duty separators provide the reliability and efficiency needed to keep your facility operating at peak productivity while adhering to global industrial quality standards."
    ],
    "features": [
      "1000 Gauss Magnetic Strength: High-intensity separation for even the finest ferrous dust.",
      "50 LPM Flow Capacity: Optimized for continuous, high-volume industrial grinding coolant systems.",
      "Robust Industrial Build: Constructed for longevity and reliability in harsh machining environments."
    ],
    "specifications": {
      "Flow Rate": "50 LPM",
      "Magnet Strength": "1000 Gauss",
      "Application": "Grinding",
      "Minimum Order Quantity": "1 Piece"
    },
    "applications": [
      "Grinding Machine Coolant",
      "CNC Machining Centers",
      "Continuous Production Lines",
      "Industrial Coolant Management"
    ],
    "mainImage": "/images/products/industrial-magnetic-coolant-separator-500x500.webp",
    "gallery": []
  },
  {
    "id": "GSM-1033",
    "slug": "coolant-filter-paper-roll",
    "legacyId": null,
    "name": "Coolant Filter Paper Roll",
    "category": "Magnetic Separator",
    "price": "₹ 3,500/Roll",
    "shortDescription": "High-quality coolant filter paper roll, 500m length, 600mm width, 0.5mm thickness.",
    "fullDescription": [
      "Grindstone Machinery Industries provides premium Coolant Filter Paper Rolls essential for secondary filtration in high-precision grinding and machining centers across Ahmedabad and Gujarat. These high-grade paper rolls are designed to capture non-ferrous particles and fine residues that magnetic separators might miss, ensuring absolute coolant purity. With a generous width of 600mm and a length of 500m per roll, this filtration medium offers an extended service life and consistent performance for busy industrial tool rooms and production facilities.",
      "Our filter paper is manufactured using high-strength fibers that resist tearing even under high flow rates and saturated conditions. As a leading supplier and exporter with over 15 years of industry experience, we ensure that our paper provides the optimal balance between high filtration efficiency and minimal flow restriction. It is compatible with most automatic paper-band filtration systems, making it a versatile choice for diverse machining applications. By utilizing our premium filter paper, industries can achieve even finer surface finishes and protect their precision spindles from damage caused by microscopic abrasive particles, meeting the highest international quality benchmarks."
    ],
    "features": [
      "High Filtration Efficiency: Successfully captures non-ferrous and microscopic residues.",
      "Tear-Resistant Fiber Build: Maintains structural integrity under heavy coolant flow and saturation.",
      "500m Industrial Length: Provides long-lasting filtration service for automated paper-band systems."
    ],
    "applications": [
      "Automated Paper-Band Filters",
      "Non-Ferrous Material Grinding",
      "Fine Residue Filtration",
      "Machining Center Maintenance",
      "High-Precision Surface Prep"
    ],
    "mainImage": "/images/products/coolant-filter-paper-roll-in-thane-500x500.webp",
    "gallery": []
  },
  {
    "id": "GSM-1034",
    "slug": "magnetic-separators-for-coolant-purposes",
    "legacyId": null,
    "name": "Magnetic Separators For Coolant Purposes",
    "category": "Magnetic Separator",
    "price": "₹ 42,000/Piece",
    "shortDescription": "Specialized magnetic separator designed for coolant filtration and separation purposes.",
    "applications": [
      "Industrial Griding Systems",
      "High-Volume Milling Operations",
      "Metallic Waste Management",
      "Tool Room Filtration",
      "Sustainable Coolant Recovery"
    ],
    "fullDescription": [
      "The specialized Magnetic Separators for Coolant Purposes from Grindstone Machinery Industries are advanced technical solutions developed to address the complex filtration needs of modern industrial units in Ahmedabad and Gujarat. These units are designed for high-efficiency extraction of ferrous particles from varied industrial lubricants and coolants, ensuring that machining operations remain uninterrupted by metallic contamination. This specialized design is particularly effective in large-scale grinding and milling operations where the volume of metallic waste is high and continuous purification is required for optimal performance.",
      "At our manufacturing facility in Vatva GIDC, we use precision-aligned magnetic arrays to ensure maximum capture rates across the entire coolant stream. As a premier manufacturer and exporter with 15+ years of experience, we have integrated easy-to-clean mechanisms and durable Stainless Steel housings into these separators for use in highly corrosive environments. These systems are essential for industries that prioritize tool longevity and surface finish quality, providing a robust and reliable means of maintaining the purity of expensive cutting fluids. Choosing our specialized separators ensures your equipment is protected by world-class filtration technology that meets rigorous international industrial standards."
    ],
    "features": [
      "High-Efficiency Magnetic Arrays: Captures ferrous contaminants across the entire fluid stream.",
      "Stainless Steel Construction: Resistant to corrosion and wear in demanding industrial environments.",
      "Simplified Cleaning Mechanism: Minimizes maintenance time for continuous manufacturing processes."
    ],
    "mainImage": "/images/products/magnetic-coolant-separator-500x500.webp",
    "gallery": []
  },
  {
    "id": "GSM-1035",
    "slug": "magnetic-coolant-separator-150lpm",
    "legacyId": null,
    "name": "Magnetic Coolant Separator 150LPM",
    "category": "Magnetic Separator",
    "price": "₹ 44,000/Piece",
    "shortDescription": "High-capacity 150 LPM magnetic coolant separator for heavy-duty coolant separation.",
    "applications": [
      "Heavy-Duty Grinding Filtration",
      "Centralized Coolant Systems",
      "Massive Scale Machining Jobs",
      "Automotive Transmission Lines",
      "Large-Volume Waste Extraction"
    ],
    "fullDescription": [
      "The 150 LPM Magnetic Coolant Separator by Grindstone Machinery Industries is a high-capacity powerhouse designed for massive industrial coolant systems in Ahmedabad and the major engineering hubs of Gujarat. Capable of processing up to 150 Liters Per Minute (LPM), this unit is engineered for heavy-duty manufacturing environments where speed and volume are paramount. It ensures that even the largest grinding machines and machining centers receive a continuous supply of clean, ferrous-free coolant, critical for maintaining the thermal stability and accuracy of high-speed industrial processes.",
      "Manufactured at our Vatva GIDC factory, this separator is built with heavy-duty components and an upscaled magnetic drum to handle the intensive flow without compromising filtration efficiency. As a leading manufacturer and exporter with over 15 years of industry experience, we've designed this model for continuous operation in the most demanding shifts. Its high capacity helps industrial facilities reduce the footprint of their filtration systems while maximizing the removal of metallic debris, thereby significantly cutting down on maintenance costs for large-scale production lines. Our 150 LPM separators represent the ultimate in high-volume industrial coolant management, meeting international benchmarks for scale and performance."
    ],
    "features": [
      "150 LPM High-Volume Flow: Designed for large-scale industrial grinding and machining systems.",
      "Upscaled Magnetic Drum: Provides massive surface area for maximum ferrous particle capture.",
      "Heavy-Duty Industrial Grade: Specifically built for continuous operation in high-intensity production environments."
    ],
    "mainImage": "/images/products/magnetic-coolant-separator-500x500.webp",
    "gallery": []
  },
  {
    "id": "GSM-1036",
    "slug": "coolant-filtration-systems",
    "legacyId": null,
    "name": "Coolant Filtration Systems",
    "category": "Magnetic Separator",
    "price": "₹ 23,000/Piece",
    "shortDescription": "Complete integrated coolant filtration system for industrial grinding and machining operations.",
    "applications": [
      "Integrated Machine Filtration",
      "Multi-Machine Central Systems",
      "Zero-Contamination Grinding",
      "Environmentally Friendly Disposal",
      "Precision Surface Management"
    ],
    "fullDescription": [
      "The integrated Coolant Filtration Systems by Grindstone Machinery Industries are comprehensive solutions designed for total fluid management in precision engineering facilities across Ahmedabad and Gujarat. These systems combine multi-stage filtration technologies—including magnetic separation and paper-band filtration—to remove both ferrous and non-ferrous contaminants from expensive cutting fluids. By providing a continuous supply of ultra-clean coolant, our systems prevent heat accumulation and wheel loading, which are essential for maintaining stable dimensions and superior surface finishes in high-speed grinding operations.",
      "As a specialized manufacturer and exporter in Vatva GIDC, we understand the critical role of coolant purity in modern manufacturing. Our filtration systems are built to be modular and easy to integrate with existing CNC machines or manual grinders. They feature automatic paper advance mechanisms and high-capacity sludge tanks, significantly reducing the manual labor required for machine maintenance. By choosing our integrated systems, industries can achieve a major reduction in coolant waste and tool wear, aligning their production processes with international standards of efficiency and environmental responsibility."
    ],
    "features": [
      "Multi-Stage Filtration: Combines magnetic and paper-band technologies for comprehensive purity.",
      "Automatic Maintenance Features: Sensor-driven paper advance and easy sludge removal for continuous use.",
      "Industrial Coolant Longevity: Drastically reduces the frequency of fluid replacement and disposal."
    ],
    "mainImage": "/images/products/coolant-filter-paper-roll-in-thane-500x500.webp",
    "gallery": []
  },
  {
    "id": "GSM-1037",
    "slug": "wheel-dresser-radius-angle",
    "legacyId": null,
    "name": "Wheel Dresser Radius Angle",
    "category": "Angle Dresser",
    "price": "₹ 38,000/Piece",
    "shortDescription": "Radius and angle dressing device for cylindrical grinding machines — 0 to 180° angle range, table-mounted.",
    "fullDescription": [
      "The Radius Angle Wheel Dresser from Grindstone Machinery Industries is a high-precision tool-room accessory designed for Universal Type Cylindrical Grinding Machines in Ahmedabad and the industrial sectors of Gujarat. This device allows operators to dress grinding wheels to exact angular and radius profiles with extreme repeatability, which is crucial for manufacturing complex workpieces like profiled rollers and specialized shafts. Its table-mounted design provides a rigid platform for dressing, ensuring that the wheel surface is perfectly aligned with the machine's axis for error-free grinding.",
      "At our Vatva GIDC factory, we manufacture these dressers using seasoned cast iron and high-precision swivel mechanisms to ensure long-term accuracy. As an established manufacturer and exporter with 15+ years of experience, we have optimized the 0 to 180-degree swivel range for maximum versatility in forming convex and concave radii. The use of a single-point diamond dresser within this robust device enables the creation of mirror-like surface profiles on the grinding wheel, which translates directly into superior workpiece quality. Our dressers are a fundamental requirement for any precision grinding facility aiming for international quality certification."
    ],
    "features": [
      "0 to 180-Degree Swivel Range: Complete versatility for creating complex convex and concave radii.",
      "High-Rigidity Table Mounting: Ensures stable and vibration-free dressing for maximum profile accuracy.",
      "Repeatable Profile Creation: Precision-engineered swivel mechanism for consistent results across multiple dressings."
    ],
    "specifications": {
      "Angle Range": "0° to 180°",
      "Mounting": "Table Mount",
      "Compatible Machine": "Universal Cylindrical Grinding Machine",
      "Dresser Type": "Single Point",
      "Minimum Order Quantity": "1 Piece"
    },
    "applications": [
      "Radius Dressing of Grinding Wheels",
      "Angular Profile Dressing",
      "Precision Tool Room Dressing",
      "Cylindrical Grinder Wheel Preparation"
    ],
    "mainImage": "/images/products/wheel-dresser-radius-angle-500x500.webp",
    "gallery": []
  },
  {
    "id": "GSM-1038",
    "slug": "wheel-angel-radius-dressing-device",
    "legacyId": null,
    "name": "Wheel Angel Radius Dressing Device",
    "category": "Angle Dresser",
    "price": "₹ 22,000/Piece",
    "shortDescription": "Semi-automatic wheel radius dressing device with 360° rotation for precise angular dressing on cylindrical grinders.",
    "fullDescription": [
      "The Wheel Angel Radius Dressing Device by Grindstone Machinery Industries is a specialized semi-automatic accessory engineered for high-precision profile management in Ahmedabad's advanced machining units. Featuring a full 360-degree rotation capacity and a robust 100mm center height, this device is designed to facilitate the rapid and accurate dressing of grinding wheels used in complex cylindrical grinding operations. The semi-automatic mechanism ensures consistent pressure and movement, reducing operator fatigue while significantly improving the uniformity of the dressed wheel surface.",
      "Manufactured at our Vatva GIDC production facility, this device is built with a focus on stability and ease of setup. As a leading manufacturer and exporter with over 15 years of industry experience, we've designed this dressing device to handle the rigors of high-volume tool-room work. It allows for the precise recreation of specialized profiles, extending the useful life of the grinding wheel by efficiently removing loaded abrasive material to expose fresh, sharp cutting edges. This tool is essential for industrial manufacturers who require tight tolerances and predictable surface finishes on their precision-ground components."
    ],
    "features": [
      "Full 360-Degree Rotation: Provides unrestricted access for all angular and radial dressing requirements.",
      "Semi-Automatic Dressing Mode: Ensures consistent and uniform profile creation with minimal manual effort.",
      "Enhanced Wheel Life Management: Efficiently refreshes the wheel surface to maintain peak cutting performance."
    ],
    "specifications": {
      "Rotation Angle": "360°",
      "Centre Height": "100 mm",
      "Dressing Mode": "Semi-Automatic",
      "Minimum Order Quantity": "1 Piece"
    },
    "applications": [
      "Semi-Auto Wheel Profiling",
      "Complex Geometry Dressing",
      "Tool Room Tooling Setup",
      "Grinding Wheel Restoration",
      "High-Precision Batch Prep"
    ],
    "mainImage": "/images/products/wheel-angel-radius-dressing-device-500x500.webp",
    "gallery": []
  },
  {
    "id": "GSM-1039",
    "slug": "cylindrical-grinding-services",
    "legacyId": null,
    "name": "Cylindrical Grinding Services",
    "category": "Job Work",
    "price": "₹ 1,000/sq",
    "shortDescription": "High precision cylindrical grinding services for stainless steel and electrical industry components.",
    "fullDescription": [
      "Grindstone Machinery Industries offers premium Cylindrical Grinding Job Work Services, catering to the exacting needs of the stainless steel and electrical industries in Ahmedabad and the industrial belts of Gujarat. Utilizing our own high-precision grinding machines, we provide job work solutions that deliver micron-level dimensional accuracy and mirror-finish surface qualities. Our service is optimized for the processing of shafts, pins, bushings, and other cylindrical components where strict concentricity and roundness are non-negotiable for final assembly performance.",
      "From our specialized workshop in Vatva GIDC, our expert operators handle a wide range of materials, including hardened steels, exotic alloys, and non-ferrous metals. As a manufacturer-operator with 15+ years of experience, we provide a level of technical insight that simple job shops cannot match, ensuring that every piece meets or exceeds customer drawings. We offer flexible turnaround times for both prototype development and large-scale batches, all while maintaining competitive pricing. Our job work services are the ideal choice for businesses looking to outsource complex grinding tasks to a partner with proven international quality standards."
    ],
    "features": [
      "High Precision Tolerance: Achievement of tight dimensional accuracy and superior surface finishes.",
      "Versatile Material Processing: Expertise in grinding stainless steel, hardened alloys, and ferrous metals.",
      "Flexible Batch Operations: Reliable service for both custom single-piece orders and high-volume production."
    ],
    "mainImage": "/images/products/cylindrical-grinding-job-work-500x500.webp",
    "applications": [
      "Industrial Outsourcing Jobs",
      "Precision Repair Contracts",
      "Specialized Metal Refinishing",
      "Textile Roller Refurbishment",
      "Ahmedabad Engineering support"
    ],
    "gallery": []
  },
  {
    "id": "GSM-1040",
    "slug": "cnc-wire-cutting-machine-job-work-service",
    "legacyId": null,
    "name": "CNC Wire Cutting Machine Job Work Service",
    "category": "Job Work",
    "price": "₹ 10/Square",
    "shortDescription": "Precision CNC wire cutting machine job work service for intricate shapes and tight tolerances.",
    "fullDescription": [
      "The CNC Wire Cutting Job Work Service provided by Grindstone Machinery Industries offers unmatched precision for creating intricate geometric shapes in hard conductive materials. Operating out of Ahmedabad, we utilize advanced Electrical Discharge Machining (EDM) technology to achieve tight tolerances and complex profiles that are traditional machining cannot produce. This service is essential for the production of dies, molds, and precision tool components where edge verticality and burr-free finishes are critical for industrial functionality.",
      "Our Vatva GIDC facility is equipped with high-speed wire cut machines capable of handling diverse materials like tool steel, titanium, and carbides. As an experienced industrial service provider, we ensure that every job is executed with maximum material efficiency and consistent accuracy across the entire thickness of the workpiece. Our skilled engineering team works closely with clients to interpret complex CAD drawings, providing a quick turnaround for urgent industrial requirements. Choosing our wire-cutting services ensures your components are manufactured using the latest CNC technology, meeting the highest domestic and international quality benchmarks."
    ],
    "features": [
      "Intricate Geometric Precision: Capable of producing complex shapes with absolute dimensional fidelity.",
      "Burr-Free Edge Finishing: Delivers smooth, vertical edges that eliminate the need for secondary processing.",
      "Tough Material Capability: Efficiently cuts hardened steels, carbides, and exotic metallic alloys."
    ],
    "mainImage": "/images/products/cnc-wire-cutting-machine-job-work-service-500x500.webp",
    "applications": [
      "Die and Mould Component EDM",
      "Intricate Profile Cutting",
      "Conductive Material Forming",
      "Tool Steel Processing",
      "Precision Aerospace EDM Jobs"
    ],
    "gallery": []
  },
  {
    "id": "GSM-1041",
    "slug": "polishing-machine",
    "legacyId": null,
    "name": "Polishing Machine",
    "category": "Polishing Machine",
    "price": "₹ 90,000/Piece",
    "shortDescription": "Industrial Polishing Machine with 350mm disc plate for smooth, uniform surface finishing of metals and other materials.",
    "fullDescription": [
      "The Disc Polishing Machine from Grindstone Machinery Industries is a robust industrial solution designed for achieving superior surface aesthetics on a variety of materials in Ahmedabad and Gujarat. Featuring a large 350mm disc plate and a high-torque motor, this machine is engineered for the fast and uniform finishing of metal plates, plastic components, and other industrial parts. It is an essential asset for facilities that require a consistent high-gloss or satin finish to meet the visual and functional quality standards of the global market.",
      "Manufactured at our Vatva GIDC unit, this machine is built with a heavy-duty body to minimize vibrations and ensure worker safety during high-speed operations. As a leading manufacturer and exporter with 15+ years of experience, we have designed the disc plate for easy replacement of polishing pads, allowing for rapid transitions zwischen rough, intermediate, and final finishing stages. The machine is versatile enough to be used in metallurgy labs, jewelry manufacturing, and general hardware production. Our polishing machines provide the reliability and efficiency needed to enhance the value of your finished products while maintaining peak industrial productivity."
    ],
    "features": [
      "Large 350mm Disc Plate: Maximizes contact area for faster material removal and uniform polishing.",
      "Multi-Material Versatility: Suitable for metallic components, industrial plastics, and specialized composites.",
      "Durable Industrial Frame: Built for continuous load-bearing in professional surface finishing shops."
    ],
    "specifications": {
      "Voltage": "220V",
      "Disc Plate Diameter": "350 mm"
    },
    "applications": [
      "Metal Surface Finishing",
      "Industrial Component Polishing",
      "Rough and Fine Finishing",
      "Metal and Plastic Polishing"
    ],
    "mainImage": "/images/products/disc-polishing-machine-500x500.webp",
    "gallery": []
  },
  {
    "id": "GSM-1042",
    "slug": "shaft-polishing-machine",
    "legacyId": null,
    "name": "Shaft Polishing Machine",
    "category": "Polishing Machine",
    "price": "₹ 2,80,000/Piece",
    "shortDescription": "Industrial-grade shaft polishing machine designed for heavy-duty polishing of shafts and cylindrical components.",
    "applications": [
      "Heavy-Duty Shaft Polishing",
      "Hydraulic Cylinder Rod Prep",
      "Textile Spinning Roller Prep",
      "Industrial Finish Refinement",
      "Friction-Reduction Processing"
    ],
    "fullDescription": [
      "The Shaft Polishing Machine by Grindstone Machinery Industries is a specialized industrial-grade unit tailored for the heavy-duty finishing of long cylindrical components in Ahmedabad and across India's manufacturing hubs. This machine is designed to handle the rigorous demands of polishing shafts, rods, and hydraulics cylinders, where surface smoothness is critical for reducing friction and preventing seal wear. Its robust construction and specialized work-holding mechanisms allow for the consistent application of polishing pressure across the entire length of the workpiece, ensuring a uniform finish from end to end.",
      "Built at our state-of-the-art Vatva GIDC facility, this machine incorporates high-torque drives and precision controls for continuous operation in high-volume production environments. As a premier manufacturer and exporter with over 15 years of industry experience, we have engineered this machine to deliver repeatable high-gloss finishes while surviving the harsh conditions of a heavy engineering shop. It is an ideal solution for manufacturers of automotive shafts, textile rollers, and hydraulic equipment who need to meet international surface quality benchmarks. Our shaft polishers represent a perfect blend of power, precision, and industrial longevity."
    ],
    "features": [
      "Continuous Length Polishing: Designed for uniform finishing of long shafts and cylindrical rods.",
      "Heavy-Duty Industrial Construction: Robust frame and motor built for 24/7 manufacturing cycles.",
      "Optimized Surface Friction Reduction: Delivers the low RA values needed for high-performance hydraulic and bearing interfaces."
    ],
    "mainImage": "/images/products/disc-polishing-machine-500x500.webp",
    "gallery": []
  },
  {
    "id": "GSM-1043",
    "slug": "wheel-balancing-stand",
    "legacyId": null,
    "name": "Wheel Balancing Stand",
    "category": "Wheel Balancer",
    "price": "₹ 17,500/Piece",
    "shortDescription": "High precision Wheel Balancing Stand for dynamic balancing of grinding wheels (300mm to 1200mm diameter), shafts, and rollers.",
    "fullDescription": [
      "Grindstone Machinery Industries provides a range of high-precision Wheel Balancing Stands, a critical tool for maintaining the safety and accuracy of industrial grinding operations in Ahmedabad and Gujarat. These stands are designed for the static and dynamic balancing of grinding wheels ranging from 300mm to 1200mm in diameter, as well as shafts and rollers. Proper balancing is essential to eliminate vibrations that can lead to poor surface finishes, premature bearing failure, and unsafe operating conditions on high-speed grinding machines.",
      "Manufactured at our Vatva GIDC factory, these stands feature center rollers that rotate smoothly on precision bearings, ensuring even the smallest imbalance is detected. As an experienced manufacturer and exporter, we offer various models with different center heights and widths to accommodate diverse industrial requirements, and we can also supply custom stands based on client drawings. The sturdy, cast-iron construction ensures long-term stability and reliability in the busy tool-room environment. Using our balancing stands helps industrial facilities achieve the highest standards of grinding precision and machine longevity, meeting international safety and quality protocols."
    ],
    "features": [
      "Precision Vibration-Free Rollers: Smooth rotation for the most accurate detection of component imbalance.",
      "Versatile Component Capacity: Capable of balancing grinding wheels, industrial shafts, and heavy rollers.",
      "Robust Cast Iron Stability: Heavy-duty construction that ensures a stable and accurate balancing platform."
    ],
    "specifications": {
      "Size": "300 mm",
      "Accessory Type": "Grinding Wheel Balancing",
      "Suitable Wheel Diameter Range": "300 mm to 1200 mm",
      "Also Suitable For": "Shafts and Rollers",
      "Minimum Order Quantity": "1 Piece"
    },
    "applications": [
      "Grinding Wheel Balancing",
      "Shaft Balancing",
      "Roller Balancing",
      "Tool Room Operations"
    ],
    "mainImage": "/images/products/wheel-balancing-stand-500x500.webp",
    "gallery": []
  },
  {
    "id": "GSM-1044",
    "slug": "internal-grinding-spindles-quills-arbor",
    "legacyId": null,
    "name": "Internal Grinding Spindles Quills Arbor",
    "category": "Belt Driven Spindle",
    "price": "₹ 6,000/Piece",
    "shortDescription": "High-precision internal grinding spindle with EN24 steel construction and 0.002mm accuracy.",
    "fullDescription": [
      "Grindstone Machinery Industries is a premier manufacturer and supplier of Internal Grinding Spindles, Quills, and Arbors, engineered for high-precision ID grinding applications in Ahmedabad and the industrial hubs of Gujarat. These critical machine components are manufactured from high-grade EN24 steel, which is hardened and ground to achieve a superior surface finish and unmatched structural durability. Our spindles are designed to maintain a run-out accuracy of 0.002mm, ensuring that your internal grinding operations meet the strictest international engineering tolerances.",
      "At our Vatva GIDC facility, we specialize in the custom manufacturing of spindles and quills based on specific customer drawings and technical requirements. Whether you need specialized arbors for deep-hole grinding or high-speed quills for small-bore precision, our engineering team has the expertise to deliver solutions with over 15 years of industry experience. Our spindles are compatible with a wide range of domestic and imported internal grinding machines, making them a versatile choice for tool rooms and production facilities looking to upgrade their precision capabilities with export-quality Indian engineering."
    ],
    "features": [
      "High-Grade EN24 Steel: Hardened and ground for maximum strength and wear resistance.",
      "0.002mm Run-out Accuracy: Ensures extreme precision for high-tolerance internal grinding tasks.",
      "Customizable Engineering: Capability to manufacture quills and arbors as per specific client drawings."
    ],
    "mainImage": "/images/products/internal-grinding-spindles-quills-arbor-500x500.webp",
    "applications": [
      "Internal Grinding Componentry",
      "Tool Room Spindle Maintenance",
      "Deep-Hole Precision ID Grinding",
      "Custom Quill Manufacturing",
      "High-Speed Rotary Assemblies"
    ],
    "gallery": []
  },
  {
    "id": "GSM-1045",
    "slug": "machine-painting-service",
    "legacyId": null,
    "name": "Machine Painting Service",
    "category": "Painting Services",
    "price": "₹ 800/sq",
    "shortDescription": "Professional machine painting service in Ahmedabad with industrial-grade corrosion-resistant coatings.",
    "applications": [
      "Industrial Machinery Refurbishment",
      "Factory Facility Maintenance",
      "Capital Asset Preservation",
      "Showroom-Ready Machine Prep",
      "Corrosion-Control Spraying"
    ],
    "fullDescription": [
      "Grindstone Machinery Industries provides professional Machine Painting Services, helping industrial units in Ahmedabad and Gujarat restore and protect their valuable equipment. Our service goes beyond simple aesthetics; we apply industrial-grade, corrosion-resistant coatings that protect machine surfaces from rust, chemical exposure, and environmental wear. A professional finish not only enhances the branding of your facility but also contributes to better machine maintenance by providing a smooth, easy-to-clean surface that prevents the buildup of grease and contaminants.",
      "Operating from our base in Vatva GIDC, our skilled painting team uses high-quality epoxy and polyurethane paints that are specifically formulated for the high-temperature and high-vibration environments of a factory floor. As a machinery manufacturer with over 15 years of experience, we understand the importance of proper surface preparation, including degreasing and priming, to ensure a long-lasting and durable finish. Whether you are refurbishing a single manual machine or an entire line of CNC equipment, our painting services deliver a showroom-quality result that meets international industrial standards."
    ],
    "features": [
      "Industrial Corrosion Protection: High-tech coatings that significantly extend machine surface life.",
      "Showroom-Quality Aesthetic: Delivers a professional, uniform finish that enhances facility branding.",
      "Heat and Chemical Resistance: Utilizes specialized paints suitable for demanding manufacturing environments."
    ],
    "mainImage": "/images/products/machine-painting-service-500x500.webp",
    "gallery": []
  },
  {
    "id": "GSM-1046",
    "slug": "industrial-machine-painting-service",
    "legacyId": null,
    "name": "Industrial Machine Painting Service",
    "category": "Industrial Painting Service",
    "price": "₹ 1,600/sq ft",
    "shortDescription": "Industrial-grade machine painting service for heavy machinery and equipment.",
    "applications": [
      "Heavy Equipment Protection",
      "Industrial Infrastructure Painting",
      "Anti-Corrosion Barrier Coating",
      "Large-Scale Factory Refits",
      "Sustainable Industrial Finishing"
    ],
    "fullDescription": [
      "The Industrial Machine Painting Service by Grindstone Machinery Industries is a premium solution tailored for large-scale heavy machinery and industrial infrastructure in Ahmedabad and the surrounding Gujarat engineering corridor. We specialize in the application of high-durability coatings for earth-moving equipment, heavy-duty industrial presses, and large-scale manufacturing lines. Our service focuses on providing a heavy-duty barrier against harsh industrial atmospheres, significantly extending the operational lifespan of expensive capital assets through superior corrosion management.",
      "Our Vatva GIDC-based team utilizes advanced application techniques to ensure deep penetration and perfect adhesion of industrial-grade paints. As an established manufacturer and exporter with 15+ years of experience, we provide a comprehensive service that includes thorough surface cleaning and the application of specialized primers. We use industry-specific coatings that are resistant to oil, coolants, and physical abrasion, ensuring that your machinery remains protected even under 24/7 production cycles. Choosing our industrial painting services ensures that your heavy equipment adheres to global safety and maintenance standards while looking its best."
    ],
    "features": [
      "Heavy Machinery Compatibility: Optimized for large-scale equipment and industrial infrastructure.",
      "Superior Corrosion Resistance: Advanced barrier coatings designed for highly aggressive environments.",
      "Long-Lifecycle Durability: Specialized formulations that withstand oil, coolants, and physical wear."
    ],
    "mainImage": "/images/products/machine-painting-service-500x500.webp",
    "gallery": []
  },
  {
    "id": "GSM-1047",
    "slug": "machine-spray-painting-services",
    "legacyId": null,
    "name": "Machine Spray Painting Services",
    "category": "Industrial Painting Service",
    "price": "₹ 1,800/sq ft",
    "shortDescription": "Premium machine spray painting services for uniform, professional-quality finishes.",
    "applications": [
      "Precision Machine Finishing",
      "Uniform Industrial Spray Prep",
      "High-Opacity Industrial Painting",
      "International Export Presentation",
      "Rapid-Dry Factory Coating"
    ],
    "fullDescription": [
      "Grindstone Machinery Industries offers premium Machine Spray Painting Services, utilizing advanced pneumatic and airless spray technology to deliver an exceptionally smooth and uniform finish on industrial equipment in Ahmedabad. Unlike traditional brush or roller methods, our spray technology ensures that even complex machine geometries and hard-to-reach areas receive a consistent coat of high-quality industrial paint. This service is ideal for manufacturers of precision machinery who require a mirror-like finish for both domestic showrooms and international exports.",
      "Operating from our facility in Vatva GIDC, our expert technicians provide precise color matching and specialized texture finishes as per client requirements. As a leading machinery manufacturer with 15+ years of experience, we ensure that every spray-painting job is preceded by expert masking of sensitive components and surfaces. We use high-solids coatings that provide excellent opacity and rapid drying times, minimizing the downtime of your production equipment. Our spray painting services represent the pinnacle of industrial finishing, delivering a professional presentation that meets the highest global quality benchmarks."
    ],
    "features": [
      "Advanced Spray Technology: Ensures perfectly uniform coverage across complex machine geometries.",
      "Showroom-Professional Finish: Ideal for machines intended for international trade fairs and exports.",
      "Precision Color Matching: Customizable to match specific corporate branding or original equipment colors."
    ],
    "mainImage": "/images/products/machine-painting-service-500x500.webp",
    "gallery": []
  },
  {
    "id": "GSM-1048",
    "slug": "external-grinding-machine-spindle",
    "legacyId": null,
    "name": "External Grinding Machine Spindle",
    "category": "New Items",
    "price": "₹ 1,75,000/Piece",
    "shortDescription": "Silver EN steel external grinding machine spindle for grinding, lapping, surface grinding and SPM machines.",
    "fullDescription": [
      "The External Grinding Machine Spindle from Grindstone Machinery Industries is a high-performance core component designed for the most demanding cylindrical and surface grinding tasks in Ahmedabad and Gujarat. Manufactured from premium silver EN steel, this spindle is engineered for maximum rigidity and thermal stability, allowing for the achievement of micron-level accuracies even during prolonged grinding cycles. With standard dimensions of Diameter 125mm and Length 350mm, it is a versatile replacement or upgrade for a variety of industrial grinding and lapping machines.",
      "At our state-of-the-art Vatva GIDC facility, we assemble these spindles using high-precision NSK matched-pair angular contact bearings, ensuring vibration-free rotation and superior rotational accuracy. As an experienced manufacturer and exporter with 15+ years in the field, we ensure that every spindle is dynamically balanced and tested to meet international performance standards. These units are specifically designed for use in grinding, lapping, and specialized Special Purpose Machines (SPMs). We offer further customization on customer demand, making our spindles the preferred choice for engineering units seeking to maintain peak operational precision."
    ],
    "features": [
      "Silver EN Steel Build: Provides exceptional rigidity and resistance to thermal expansion.",
      "NSK Matched-Pair Bearings: Angular contact bearings for high-speed stability and precision.",
      "Vibration-Free Operation: Dynamically balanced to ensure smooth surface finishes on all workpieces."
    ],
    "mainImage": "/images/external-grinding-machine-spindle-500x500.webp",
    "applications": [
      "External Grinding Assemblies",
      "Cylindrical Grinding Upgrades",
      "Surface Grinding Reliability",
      "Special Purpose Machine Spindles",
      "High-Precision Rotary Support"
    ],
    "gallery": []
  },
  {
    "id": "GSM-1049",
    "slug": "internal-grinding-spindles",
    "legacyId": null,
    "name": "Internal Grinding Spindles",
    "category": "New Items",
    "price": "₹ 85,000/Piece",
    "shortDescription": "Belt-driven internal grinding spindle with 2 micron accuracy, up to 35,000 RPM, hardened and ground finish.",
    "fullDescription": [
      "The high-speed Internal Grinding Spindles by Grindstone Machinery Industries are specifically designed for the high-precision finishing of internal diameters (ID) in Ahmedabad's advanced manufacturing sector. Optimized for speeds up to 35,000 RPM, these belt-driven spindles are ideal for processing small bores, bushings, and high-tolerance bearing races. Their rigid, hardened, and ground architecture ensures that 2 micron accuracy is consistently maintained, even under the significant rotational forces required for efficient material removal in various hardened steels and alloys.",
      "Manufactured in our Vatva GIDC facility, these spindles incorporate advanced lubrication systems and precisely balanced internal rotating masses to ensure cool and vibration-free performance. As a premier manufacturer and exporter with over 15 years of industry expertise, we've engineered these ID spindles to withstand the demanding production cycles of automotive and aerospace component suppliers. Available in multiple configurations to fit different internal grinding machines, our spindles represent a world-class solution for industries seeking to achieve export-quality internal finishes and extreme geometric precision on their finished products."
    ],
    "features": [
      "High-Speed Performance: Optimized for up to 35,000 RPM for efficient small-bore grinding.",
      "2-Micron Precision: Achievement of extremely tight dimensional and concentricity tolerances.",
      "Hardened and Ground Finish: Ensures maximum durability and wear resistance in continuous use."
    ],
    "mainImage": "/images/internal-grinding-spindles-500x500.webp",
    "applications": [
      "Small-Bore Precision ID Grinding",
      "Bearing Race Internal Finishing",
      "High-Speed Rotary Tooling",
      "Automotive Component Grinding",
      "Aerospace Housing Internal Prep"
    ],
    "gallery": []
  },
  {
    "id": "GSM-1050",
    "slug": "angle-wheel-dresser",
    "legacyId": null,
    "name": "Angle Wheel Dresser",
    "category": "New Items",
    "price": "₹ 38,000/Piece",
    "shortDescription": "Universal 0–360° grinding wheel angle dressing device in CI/MS with super finish, wooden box packing.",
    "fullDescription": [
      "The Universal Angle Wheel Dresser from Grindstone Machinery Industries is a versatile tool-room accessory designed for the precise angular dressing of both external and internal grinding wheels. Serving the engineering communities of Ahmedabad and Gujarat, this device offers a full 0 to 360-degree range, allowing for the generation of any required angle on the grinding wheel face. This capability is crucial for the production of tapered bearings, angled shafts, and specialized tooling where geometric accuracy is paramount for industrial performance.",
      "At our Vatva GIDC facility, we construct these dressers using a combination of seasoned cast iron (CI) and mild steel (MS), finished to a super finish to ensure smooth swivel movement and long-term stability. As a premier manufacturer and exporter with 15+ years of experience, we deliver these precision devices in high-quality wooden box packaging to preserve their accuracy during transit. These dressers are capable of both straight and angular dressing, and we provide further custom-made options to meet specific customer requirements. Choosing our angle dressers ensures your grinding wheels are prepared to the highest international standards of accuracy and efficiency."
    ],
    "features": [
      "Universal 0–360° Dressing: Enables absolute freedom in generating any required angle on wheels.",
      "Internal & External Capability: Suitable for preparing wheels used in diverse grinding operations.",
      "High-Precision Super Finish: Ensures smooth and accurate swivel settings for repeatable dressing."
    ],
    "mainImage": "/images/angle-wheel-dresser-500x500.webp",
    "applications": [
      "Universal Angle Wheel Dressing",
      "Taper and Profile Generation",
      "Grinding Wheel Service Room",
      "Tool room Geometric Control",
      "Precise Shop Prep Work"
    ],
    "gallery": []
  },
  {
    "id": "GSM-1051",
    "slug": "bush-grinding-machine",
    "legacyId": null,
    "name": "Bush Grinding Machine",
    "category": "Machine Brush",
    "price": "₹ 6,75,000/Piece",
    "shortDescription": "Heavy-duty bush grinding machine for precision grinding of bushings and cylindrical components.",
    "fullDescription": [
      "The Bush Grinding Machine by Grindstone Machinery Industries is a heavy-duty industrial unit specifically engineered for the high-precision finishing of bushings, sleeves, and rollers in Ahmedabad and Gujarat. This machine is designed to provide exceptional roundness and surface quality on cylindrical components required by the automotive, textile, and general engineering sectors. Its robust architecture and specialized work-holding systems ensure that even high-volume production batches maintain the strict dimensional tolerances necessary for precision assemblies.",
      "Manufactured at our state-of-the-art Vatva GIDC production facility, this machine incorporates high-speed spindles and advanced coolant management systems to optimize grinding efficiency and surface integrity. As a leading manufacturer and exporter with over 15 years of industry experience, we have built this machine to withstand the rigors of continuous industrial use while being ISO 9001:2015 certified for quality management. Our bush grinders are a trusted solution for facilities looking to enhance their manufacturing throughput and deliver export-quality cylindrical components to a competitive global market."
    ],
    "features": [
      "Heavy-Duty Industrial Build: Engineered for vibration-free performance in high-volume shops.",
      "ISO 9001:2015 Certified: Quality-assured manufacturing for consistent and reliable performance.",
      "Precision Bushing Grinding: Specifically optimized for achieving superior roundness and surface RA values."
    ],
    "mainImage": "/images/products/rubber-bush-grinding-machine-500x500.webp",
    "applications": [
      "Automotive Bushing Finishing",
      "Textile Machinery Sleeve Grinding",
      "Industrial Roller Production",
      "High-Volume Precision Bushing",
      "Aerospace Sleeve Component Prep"
    ],
    "gallery": []
  }
];
