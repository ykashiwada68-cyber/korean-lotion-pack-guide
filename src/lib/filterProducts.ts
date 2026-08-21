import type { ConcernId, PackTypeId, Product, SkinTypeId } from "@/types/product";

export interface ProductFilters {
  q?: string;
  type?: PackTypeId | "";
  concern?: ConcernId | "";
  skin?: SkinTypeId | "";
}

export function filterProducts(products: Product[], filters: ProductFilters): Product[] {
  const q = filters.q?.trim().toLowerCase();

  return products.filter((p) => {
    if (filters.type && p.packType !== filters.type) return false;
    if (filters.concern && !p.concerns.includes(filters.concern)) return false;
    if (filters.skin && !p.skinTypes.includes(filters.skin)) return false;
    if (q) {
      const haystack = [p.name, p.nameNative ?? "", p.brand, p.brandNative ?? ""]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });
}
