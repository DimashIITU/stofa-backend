import { Document } from 'mongoose';

export default interface Analytics extends Document {
  //Making interface
  Symbol: String;
  Date: String;
  Percentage: Number;
}
