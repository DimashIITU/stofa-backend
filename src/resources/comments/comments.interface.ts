import { Document } from 'mongoose';

export default interface Blogs extends Document {
  blogsID: string;
  userID: string;
  first_name: string;
  commentID: string;
  comment: string;
}
