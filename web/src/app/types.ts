export interface UserInfo {
  name: string;
  email: string;
}

export interface UserError {
  error: string;
}

export interface UserState {
  name?: string;
  email?: string;
  isLoggingIn?: boolean;
  loggingError?: string;
  isLoggedOut?: boolean;
}

export interface ProductImage {
  types: Array<string>;
  file: string;
  media_type: string;
  disabled: boolean;
  id: number;
  label: string;
  position: number;
}

export interface ProductAttribute {
  value: string;
  attribute_code: string;
}

export interface ProductLink {
  link_type: string;
  image: string;
  linked_product_sku: string;
  linked_product_type: string;
  name: string;
  position: number;
  sku: string;
}

export interface ProductDetail {
  purchase_number_limit: string;
  images: Array<ProductImage>;
  price: string;
  name: string;
  description: string;
  designer_name: string;
  brand_name: string;
  brand_link: string;
  attribute: Array<ProductAttribute>;
  designer_link: string;
  product_links: Array<ProductLink>;
}

export interface ProductState {
  detail?: ProductDetail | null;
  isLoading?: boolean;
  error?: object | string;
}