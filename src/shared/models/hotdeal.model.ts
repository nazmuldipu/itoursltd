export interface Hotdeal {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  headline: string;
  taglines: string[];
  imageUrl: string;
  price: number;
  description: string;
  url: string;
  active: boolean;
  duration: string;
  tourDate: Date;
  lastBookingDate: Date;
}
