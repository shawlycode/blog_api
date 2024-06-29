import { blogModel } from "../models/blog_models.js";


//define all controllers
//adding blogs into db using the create method
export const add_newBlog = async (req, res, next) => {
  try {
    console.log('request', req.body)
    const addBlog = await blogModel.create(req.body)
    res.status(200).send(addBlog)
  } catch (error) {
    next(error)
  }

};