import axios from "axios";
 const API=axios.create({baseURL:"https://server.possindia.in"})
//const API=axios.create({baseURL:"http://localhost:5000"})

export const createBlog=(data)=>API.post("/blog/add",data)
export const getBlogs=()=>API.get("/blog/get")
export const getBlog=(data)=>API.get(`/blog/getone/${data}`)