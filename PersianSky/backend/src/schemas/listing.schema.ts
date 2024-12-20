import { Schema, Document } from 'mongoose';

export interface Listing extends Document {
  title: string;
  description: string;
  price: number;
  category: string;
  location: string;
  contactInfo: string;
  createdAt: Date;
  updatedAt: Date;
}

const ListingSchema = new Schema<Listing>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  location: { type: String, required: true },
  contactInfo: { type: String, required: true },
}, {
  timestamps: true,
});

export default ListingSchema;