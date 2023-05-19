import { Document } from 'mongoose';

export default interface Comment extends Document {
  userID: string;
  symbol: string;
  commentID: string;
  comment: string;
  creation_date: string;
}
