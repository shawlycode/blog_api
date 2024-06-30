import { Router } from 'express';
import {
  addBlog,
  get_Blogs,
  get_blogById,
  updateBlogById,
  deleteBlogById,
} from '../controllers/blog_controllers.js';

// store router in a variable
const blogApi_route = Router();
//define all routes &  endpoints

blogApi_route.post('/blog', addBlog);
blogApi_route.get('/blogs', get_Blogs);
blogApi_route.get('/blog/:id', get_blogById);
blogApi_route.patch('/blog/:id', updateBlogById);
blogApi_route.delete('/blog/:id', deleteBlogById);


export default blogApi_route;
