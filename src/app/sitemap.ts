import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { products } from "@/data/products";
import { packTypes } from "@/data/packTypes";
import { concerns } from "@/data/concerns";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/about",
    "/types",
    "/concerns",
    "/products",
    "/compare",
    "/how-to-use",
    "/faq",
    "/company",
    "/privacy",
  ];

  const dynamicPaths = [
    ...packTypes.map((t) => `/types/${t.id}`),
    ...concerns.map((c) => `/concerns/${c.id}`),
    ...products.map((p) => `/products/${p.slug}`),
  ];

  return [...staticPaths, ...dynamicPaths].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));
}
