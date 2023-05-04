import axios from "axios";
//const API=axios.create({baseURL:"https://server.possindia.in"})
const API=axios.create({baseURL:"http://localhost:5005"})
export const getAllProducts=(data)=>API.post('/product/getproducts',data)
export const getProduct=(id)=>API.get(`/product/${id}`)
export const deleteProduct=(id)=>API.delete(`/product/${id}`)
export const getAdminProducts=()=>API.get(`/product/all`)
export const editProduct=(data)=>API.put(`/product/edit`,data)
export const uploadCsv=(data)=>API.post('/product/addbulk',data)
export const addProduct =(data)=>API.post("/product/add",data)
export const getbrandCategory =(data)=>API.post("/product/brandCategory",data)
export const getpetCategory =(data)=>API.post("/product/petCategory",data)
export const searchInput=(data)=>API.post("/product/search",data)
export const gettypeCategory =(data)=>API.post("/product/typeCatagory",data)
