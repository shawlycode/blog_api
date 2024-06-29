import { Router } from "express";

// store router in a variable
const blogApi_route = Router();
//define all routes
//define endpoints

//all blogs
blogApi_route.get('/blogs', (req, res) => {
  res.json('All blogs');
})

//post a blog
blogApi_route.post('/blog', (req, res) => {
  res.json('My new blog');
})

//get a single blog by ID
blogApi_route.get('/blog/:id', (req, res) => {
  res.json(`You open blog ${req.params.id}`)
})

//update a blog by ID
blogApi_route.patch('/blog/:id', (req, res) => {
  res.json(`Blog ${req.params.id} updated`)
})

//delete a blog by ID
blogApi_route.delete('/blog/:id', (req, res) => {
  res.json(`Blog ${req.params.id} deleted successfully`)
})


export default blogApi_route;