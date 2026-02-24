import { highResAssets } from '../data/assetManifest';

export interface ProductAssets {
    mainImage: string;
    gallery: string[];
}

export const useDynamicAssets = (productId: string, legacyId?: string | null, productMainImage?: string): ProductAssets => {
    // Fallback: use the product's own mainImage, or a generic unsplash image
    const fallbackImage = productMainImage || `https://source.unsplash.com/800x600/?machinery,precision`;

    // If no legacy ID, return the product's own image
    if (!legacyId) {
        return {
            mainImage: fallbackImage,
            gallery: []
        };
    }

    // Filter manifest for matches with this legacyId
    // Standard pattern is {legacyId}-{index}.{ext}
    const matches = highResAssets.filter(asset => asset.includes(legacyId));

    if (matches.length === 0) {
        return {
            mainImage: fallbackImage,
            gallery: []
        };
    }

    // Sort matches to ensure index 0 is first
    // Note: Some files might have 'high-res-' prefix, handled by .includes()
    const sorted = [...matches].sort((a, b) => {
        const aIndex = parseInt(a.match(/-(\d+)\./)?.[1] || "0");
        const bIndex = parseInt(b.match(/-(\d+)\./)?.[1] || "0");
        return aIndex - bIndex;
    });

    const assetPaths = sorted.map(name => `/images/high-res/${name}`);

    return {
        mainImage: assetPaths[0],
        gallery: assetPaths.slice(1)
    };
};

