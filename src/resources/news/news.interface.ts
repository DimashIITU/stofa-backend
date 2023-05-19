import { Document } from 'mongoose';

export default interface News extends Document {
  newsID: string;
  userID: string;
  news_topic: string;
  news_content: string;
}
