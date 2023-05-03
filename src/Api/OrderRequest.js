import axios from "axios";
 //const API=axios.create({baseURL:"https://server.possindia.in"})
const API=axios.create({baseURL:"http://localhost:5000"})

export const createOrder=(data)=>API.post("/order/create",data)

export  const editOrder=(data)=>API.post("/order/edit",data)

export  const cancelOrder=(data)=>API.post("/order/cancel",data)

export  const returnOrder=(data)=>API.post("/order/return",data)

export  const getOrder=(data)=>API.post("/order/all",data)
export  const getAdminOrder=()=>API.get("/order/adminOrders")
export  const getAdminCancelledOrder=()=>API.get("/order/adminOrders/cancelled")
export  const getAdminreturnOrder=()=>API.get("/order/adminOrders/return")
export  const AdminChangeOrderstatus=(data)=>API.post("/order/admin/changestatus",data)

export const getOrd=(data)=>API.get(`/order/getone/${data}`)