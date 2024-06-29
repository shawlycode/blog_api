import { Schema, model } from 'mongoose';

//define schema
const blogSchema = new Schema({
  blogTitle: { type: String },
  blogCategory: {
    type: String,
    enum: [
      'Entertainment',
      'Politics',
      'Sports',
      'Education',
      'Technology',
      'Food & Security',
    ],
  },
  blogContent: { type: String },
  blogImage: { type: String },
  author: { type: String },
  createdAt: { type: Date },
  UpdatedAt: { type: Date }
});


export const blogModel = model('blog', blogSchema);