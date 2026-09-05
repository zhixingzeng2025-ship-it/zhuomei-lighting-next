export type ZomeiContentStatus = "draft" | "pending" | "published" | "archived" | "deleted";

export type ZomeiAssetType = "image" | "pdf" | "ies" | "cad" | "video" | "document";

export type ZomeiAssetRecord = {
  asset_id: string;
  owner_type: "product" | "solution" | "case" | "inquiry" | "site";
  owner_id: string;
  asset_type: ZomeiAssetType;
  usage: "cover" | "gallery" | "datasheet" | "photometric" | "drawing" | "attachment";
  storage_root: "ZOMEI_DATA/ASSETS";
  asset_path: string;
  public_url: string;
  status: ZomeiContentStatus;
  sort_order: number;
};

export type ZomeiApiRoutePlan = {
  products: string;
  productDetail: string;
  solutions: string;
  solutionDetail: string;
  cases: string;
  caseDetail: string;
  inquiries: string;
  assets: string;
};

export type ZomeiProductFields = {
  product_id: string;
  product_code: string;
  product_slug: string;
  product_name: string;
  product_name_cn: string;
  product_summary: string;
  product_overview: string;
  product_category: string;
  application_scenarios: string[];
  selling_points: string[];
  specifications: Array<{ spec_name: string; spec_value: string }>;
  cover_asset_id: string;
  assets: ZomeiAssetRecord[];
  status: ZomeiContentStatus;
};

export type ZomeiSolutionFields = {
  solution_id: string;
  solution_slug: string;
  solution_title: string;
  solution_summary: string;
  solution_overview: string;
  applicable_scenarios: string[];
  solution_highlights: string[];
  cover_asset_id: string;
  assets: ZomeiAssetRecord[];
  status: ZomeiContentStatus;
};

export type ZomeiCaseFields = {
  case_id: string;
  case_slug: string;
  case_title: string;
  project_location: string;
  related_products_text: string;
  case_overview: string;
  case_highlights: string[];
  cover_asset_id: string;
  assets: ZomeiAssetRecord[];
  status: ZomeiContentStatus;
};

export type ZomeiInquiryPayload = {
  inquiry_id?: string;
  customer_name: string;
  customer_email: string;
  whatsapp?: string;
  company_name?: string;
  country_region?: string;
  project_type?: string;
  product_interest?: string;
  quantity_scale?: string;
  inquiry_message?: string;
  source_channel: "website";
  status: "pending";
};

export const ZOMEI_PUBLIC_STATUS: ZomeiContentStatus = "published";
export const ZOMEI_ASSETS_ROOT = "ZOMEI_DATA/ASSETS";

export const zomeiApiRoutes: ZomeiApiRoutePlan = {
  products: "/api/zomei/products",
  productDetail: "/api/zomei/products/:product_slug",
  solutions: "/api/zomei/solutions",
  solutionDetail: "/api/zomei/solutions/:solution_slug",
  cases: "/api/zomei/cases",
  caseDetail: "/api/zomei/cases/:case_slug",
  inquiries: "/api/zomei/inquiries",
  assets: "/api/zomei/assets/:asset_id",
};

type LegacyProduct = {
  slug: string;
  name: string;
  cn: string;
  description: string;
  image: string;
  badge?: string;
  overview: string;
  features: string[];
  applications: string[];
  specs: Array<{ label: string; value: string }>;
  status?: ZomeiContentStatus;
};

type LegacySolution = {
  slug: string;
  title: string;
  description: string;
  image: string;
  overview: string;
  highlights: string[];
  applications: string[];
  designFocus: string[];
  recommendedProducts: string[];
  deliverables: string[];
  status?: ZomeiContentStatus;
};

type LegacyCase = {
  slug: string;
  name: string;
  location: string;
  products: string;
  image: string;
  overview: string;
  highlights: string[];
  status?: ZomeiContentStatus;
};

function assetPathFor(publicUrl: string) {
  return `${ZOMEI_ASSETS_ROOT}${publicUrl}`;
}

function createCoverAsset(owner_type: ZomeiAssetRecord["owner_type"], owner_id: string, public_url: string): ZomeiAssetRecord {
  return {
    asset_id: `${owner_id}-cover`,
    owner_type,
    owner_id,
    asset_type: "image",
    usage: "cover",
    storage_root: ZOMEI_ASSETS_ROOT,
    asset_path: assetPathFor(public_url),
    public_url,
    status: ZOMEI_PUBLIC_STATUS,
    sort_order: 0,
  };
}

export function withPublicStatus<T extends { status?: ZomeiContentStatus }>(items: T[]) {
  return items.filter((item) => (item.status || ZOMEI_PUBLIC_STATUS) === ZOMEI_PUBLIC_STATUS);
}

export function collectAssets(items: Array<{ assets: ZomeiAssetRecord[] }>) {
  return items.flatMap((item) => item.assets).filter((asset) => asset.status === ZOMEI_PUBLIC_STATUS);
}

export function mapProductToUnified(item: LegacyProduct): LegacyProduct & ZomeiProductFields {
  const product_id = `prod_${item.slug.replace(/-/g, "_")}`;
  const cover = createCoverAsset("product", product_id, item.image);

  return {
    ...item,
    status: item.status || ZOMEI_PUBLIC_STATUS,
    product_id,
    product_code: product_id.toUpperCase(),
    product_slug: item.slug,
    product_name: item.name,
    product_name_cn: item.cn,
    product_summary: item.description,
    product_overview: item.overview,
    product_category: item.badge || "Lighting",
    application_scenarios: item.applications,
    selling_points: item.features,
    specifications: item.specs.map((spec) => ({
      spec_name: spec.label,
      spec_value: spec.value,
    })),
    cover_asset_id: cover.asset_id,
    assets: [cover],
  };
}

export function mapSolutionToUnified(item: LegacySolution): LegacySolution & ZomeiSolutionFields {
  const solution_id = `sol_${item.slug.replace(/-/g, "_")}`;
  const cover = createCoverAsset("solution", solution_id, item.image);

  return {
    ...item,
    status: item.status || ZOMEI_PUBLIC_STATUS,
    solution_id,
    solution_slug: item.slug,
    solution_title: item.title,
    solution_summary: item.description,
    solution_overview: item.overview,
    applicable_scenarios: item.applications,
    solution_highlights: item.highlights,
    cover_asset_id: cover.asset_id,
    assets: [cover],
  };
}

export function mapCaseToUnified(item: LegacyCase): LegacyCase & ZomeiCaseFields {
  const case_id = `case_${item.slug.replace(/-/g, "_")}`;
  const cover = createCoverAsset("case", case_id, item.image);

  return {
    ...item,
    status: item.status || ZOMEI_PUBLIC_STATUS,
    case_id,
    case_slug: item.slug,
    case_title: item.name,
    project_location: item.location,
    related_products_text: item.products,
    case_overview: item.overview,
    case_highlights: item.highlights,
    cover_asset_id: cover.asset_id,
    assets: [cover],
  };
}

export function normalizeInquiryPayload(payload: {
  name?: string;
  email?: string;
  whatsapp?: string;
  company?: string;
  country?: string;
  product?: string;
  projectInterest?: string;
  projectType?: string;
  productInterest?: string;
  quantity?: string;
  details?: string;
  message?: string;
}): ZomeiInquiryPayload | undefined {
  const customer_name = payload.name?.trim();
  const customer_email = payload.email?.trim();

  if (!customer_name || !customer_email) return undefined;

  return {
    customer_name,
    customer_email,
    whatsapp: payload.whatsapp?.trim() || undefined,
    company_name: payload.company?.trim() || undefined,
    country_region: payload.country?.trim() || undefined,
    project_type: payload.projectType?.trim() || payload.projectInterest?.trim() || undefined,
    product_interest: payload.productInterest?.trim() || payload.product?.trim() || undefined,
    quantity_scale: payload.quantity?.trim() || undefined,
    inquiry_message: payload.message?.trim() || payload.details?.trim() || undefined,
    source_channel: "website",
    status: "pending",
  };
}
