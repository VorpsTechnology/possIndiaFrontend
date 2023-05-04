import axios from "axios";
const API=axios.create({baseURL:"https://server.possindia.in"})
//const API=axios.create({baseURL:"http://localhost:5000"})


export const Adminlogin=(data)=>API.post('/admin/login',data)