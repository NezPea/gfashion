import { PayloadAction } from '@reduxjs/toolkit';
import { TypeBackground } from '@material-ui/core/styles/createPalette';
/**
 *  gclub
 */
export interface gclub {
  name?: string;
  email: string;
  isLoading: boolean,
}

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

export interface ProductImageList {
  images: Array<ProductImage>;
}

export interface ProductAttribute {
  value: string;
  attribute_code: string;
}

export interface ProductLink {
  link_type: string;
  file: string;
  linked_product_sku: string;
  linked_product_type: string;
  name: string;
  position: number;
  sku: string;
}

export interface ProductDetail {
  purchase_number_limit: string;
  media_gallery_entries: Array<ProductImage>;
  price: string;
  name: string;
  designer_name: string;
  brand_name: string;
  brand_link: string;
  custom_attributes: Array<ProductAttribute>;
  designer_link: string;
  product_links: Array<ProductLink>;
}

export interface ProductState {
  detail?: ProductDetail | null;
  isLoading?: boolean;
  error?: object | string;
}

export interface FilterOptionDetail {
  id: string;
  name: string;
  isChecked: string;
}

export interface FilterDetail {
  code: string;
  name: string;
  options: Array<FilterOptionDetail>;
}

export interface SearchCriteria {
  page_size: number;
  current_page: number;
}

export interface ProductListAttribute {
  avavilable_filters: Array<FilterDetail>;
  search_criteria: SearchCriteria;
  items: Array<ProductDetail>;
  total_count: number;
}

export interface ProductListState {
  detail?: ProductListAttribute | null;
  isLoading?: boolean;
  error?: object | string;
}

export interface AxiosMiddlewareActionMeta {
  previousAction: PayloadAction;
}

export interface AxiosMiddlewareActionError {
  data: any;
  status: number
}

export interface HomepageProduct {
  id: BigInt;
  name: string;
  photoUrl: string;
  isFeatured: boolean;
}

export interface HomepageDesigner {
  id: BigInt;
  name: string;
  cooperatingBrands: Array<string>;
  country?: string;
  photoUrl: string;
}

export interface HomepageBrand {
  id: BigInt;
  name: string;
  country?: string;
  photoUrl: string;
  link: string;
}

export interface HomeRecommendations {
  customerId: BigInt;
  recommendedProducts: Array<HomepageProduct>;
  recommendedDesigners: Array<HomepageDesigner>;
  recommendedBrands: Array<HomepageBrand>;
  followingDesigners: Array<HomepageDesigner>;
  followingBrands: Array<HomepageBrand>;
}

export interface HomeRecommendationsState {
  recommendations?: HomeRecommendations | null;
  isLoading?: boolean;
  error?: object | string;
}

export interface DesignersProps {
  designers: Array<HomepageDesigner> | undefined;
}

export interface BrandsProps {
  brands: Array<HomepageBrand> | undefined;
}
export interface RecommendedProductProps {
  products: Array<HomepageProduct> | undefined;
}

export interface GfBackground extends TypeBackground {
  productDetail: string;
  footer: string;
  designerHeaderLighter: string;
  designerHeaderDeeper: string;
}
