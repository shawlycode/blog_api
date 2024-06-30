import { Schema, model } from 'mongoose';
import normalize from 'normalize-mongoose'
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
  blogStatus: { type: String, enum: ["New", "Old", "Updated"] }
},
  {
    timestamps: true
  });

//calling plugin(normalize-mongoose)
blogSchema.plugin(normalize)

export const blogModel = model('blog', blogSchema);