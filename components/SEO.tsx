
import React, { useEffect } from 'react';

interface SEOProps {
    title: string;
    description: string;
    schema?: object | object[];
    canonical?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description, schema, canonical }) => {
    useEffect(() => {
        // Update Title
        document.title = title;

        // Update or create description meta
        let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.name = 'description';
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', description);

        // Update or create canonical
        const canonicalUrl = canonical || `https://grindstonemachinery.in${window.location.pathname}`;
        let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
        if (!link) {
            link = document.createElement('link');
            link.rel = 'canonical';
            document.head.appendChild(link);
        }
        link.href = canonicalUrl;

        // Inject JSON-LD schema scripts
        // Remove any existing schema scripts injected by this component
        document.querySelectorAll('script[data-seo-schema]').forEach(el => el.remove());

        if (schema) {
            const schemas = Array.isArray(schema) ? schema : [schema];
            schemas.forEach(s => {
                const script = document.createElement('script');
                script.type = 'application/ld+json';
                script.setAttribute('data-seo-schema', 'true');
                script.textContent = JSON.stringify(s);
                document.head.appendChild(script);
            });
        }

        return () => {
            document.querySelectorAll('script[data-seo-schema]').forEach(el => el.remove());
        };
    }, [title, description, schema, canonical]);

    return null;
};
