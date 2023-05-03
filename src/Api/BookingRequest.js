import axios from "axios";
 //const API=axios.create({baseURL:"https://server.possindia.in"})
const API=axios.create({baseURL:"http://localhost:5000"})

export const createBooking=(data)=>API.post("/booking/add",data)