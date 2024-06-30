import { blogModel } from "../models/blog_models.js";


//define all controllers
//adding blogs into db using the create method
export const addBlog = async (req, res, next) => {
  try {
    console.log('request', req.body)
    const newBlog = await blogModel.create(req.body)
    res.status(200).send(newBlog)
  }
  catch (error) {
    next(error)
  }
};

//get all blogs

export const get_Blogs = async (req, res, next) => {
  try {
    console.log('request', req.body)
    const getBlogs = await blogModel.create(req.body)
    res.status(200).send(getBlogs)
  } catch (error) {
    next(error)

  }
}
