export interface Designer {
  name: string;
  avatar: string;
}

export interface DesignersProps {
  designers: Array<Designer>;
}

export interface Brand {
  name: string;
}

export interface BrandsProps {
  brands: Array<Brand>
}