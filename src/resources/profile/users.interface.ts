import { Document } from 'mongoose';

//Interface for User
export default interface Users extends Document {
  userID: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  account: string;
  risk_appetite: string;
  address: string;
  credits: number;
}
