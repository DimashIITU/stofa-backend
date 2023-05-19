import { Document } from 'mongoose';

export default interface Analytics extends Document {
  //Getting financial interface
  Symbol: String;
  Date: String;
  Profit: Number;
}
