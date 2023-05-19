import { Document } from 'mongoose';

export default interface Blogs extends Document {
  blogsID: string;
  userID: string;
  title: string;
  description: string;
  content: string;
  likes: number;
}
