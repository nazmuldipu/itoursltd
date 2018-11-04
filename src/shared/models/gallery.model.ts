export interface Gallery {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  eventDate: Date;
  title: string;
  active: boolean;
  institute: string;
  department: string;
  duration: string;
  numberGuests: number;
  details: string;
  image: string[];
}
