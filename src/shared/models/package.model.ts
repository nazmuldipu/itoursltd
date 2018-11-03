export interface Package {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  active: boolean;
  domestic: boolean;
  country: string;
  title: string;
  area: string[];
  subArea: string[];
  category: string[];
  imageUrl: string[];

  regularPackage: PackageType;
  deluxePackage: PackageType;
  crownPackage: PackageType;
}

export interface PackageType {
  headline: string;
  taglines: string[];
  duration: string;
  price: number;
  description: PackageDescription[];
  inclusions: string[];
  exclusions: string[];
}

interface PackageDescription {
  head: string;
  texts: string[];
}
