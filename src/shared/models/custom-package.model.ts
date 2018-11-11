export interface CustomPackage {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  phone: string;
  email: string;
  startPlace: string;
  date: Date;
  locations: string[];
  places: string[];
  duration: number[];
  visitorKids: number;
  visitorChild: number;
  visitorAdult: number;
  mealType: string;
  travelType: string;
  hotelType: string;
  hotelTypeText: string;
  roomType: string;
  note: string;
  comments: string;
  shipName: string;
}
