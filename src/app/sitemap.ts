import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://woodsonrobotics.org",
            lastModified: new Date(),
        },
    ];
}
