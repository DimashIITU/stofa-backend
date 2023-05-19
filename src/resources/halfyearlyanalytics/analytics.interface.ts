import { Document } from 'mongoose';

export default interface Analytics extends Document {
  //making interface
  Symbol: String;
  Date: String;
  Percentage: Number;
}
