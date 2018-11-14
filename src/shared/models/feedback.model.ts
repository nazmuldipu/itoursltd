export interface Feedback {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  phone: boolean;
  email: string;
  message: string;
  reply: string[];
}
