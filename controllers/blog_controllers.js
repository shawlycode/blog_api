import { blogModel } from '../models/blog_models.js';

//define all controllers

//adding blogs into db using the create method
export const addBlog = async (req, res, next) => {
  try {
    console.log('request', req.body);
    const newBlog = await blogModel.create(req.body);
    res.status(200).send(newBlog);
  } catch (error) {
    next(error);
  }
};

//get all blogs using the find method
export const get_Blogs = async (req, res, next) => {
  try {
    console.log('request', req.body);
    const getBlogs = await blogModel.find();
    res.status(200).send(getBlogs);
  } catch (error) {
    next(error);
  }
};
//get a blog by ID using the findById method
export const get_blogById = async (req, res, next) => {
  try {
    console.log('request', req.body);
    const getSingleBlog = await blogModel.findById(req.params.id);
    res.json(getSingleBlog);
  } catch (error) { }
};
//delete a blog by ID using the findAndDeleteById method
export const deleteBlogById = async (req, res, next) => {
  try {
    console.log('request', res.body);
    const deleteBlog = await blogModel.findByIdAndDelete(req.params.id);
    res.json(deleteBlog);
  } catch (error) {
    next(error);
  }
};
//update a blog by ID using the patch, findByIdAndUpdate method
export const updateBlogById = async (req, res, next) => {
  const status = req.body.blogStatus;
  console.log('request', status);
  try {
    const update_blogById = await blogModel.findByIdAndUpdate(req.params.id, {
      blogStatus: status
    })
    res.status(200).send(update_blogById)
    // res.json(update_blogById);
  } catch (error) {
    next(error);
  }
};
