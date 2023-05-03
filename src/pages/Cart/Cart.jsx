import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import { getWishlist } from '../../Api/WishlistRoute';
import DataTable from 'react-data-table-component';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Cart() {
  
  const[users,setUsers]=useState([]);
const [search,setSearch]=useState("");
const [filterUsers,setFilteredUsers]=useState([]);
  const userData=localStorage.getItem('userId')
const navigate=useNavigate()
  useEffect(() => {
    async function fetchData() {
      // You can await here
      // alert()
      const beta={userId:userData}
      const {data}=await getWishlist(beta)
      console.log(data); 
      setUsers(data)
      setFilteredUsers(data.Wishlist.products)
      console.log(userData);
      console.log(data.Wishlist.products);
      // ...
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state
  useEffect(()=>{
    const result=users.filter((user)=>{
        return user.firstname.toLowerCase().match(search.toLowerCase());
        
    })
    setFilteredUsers(result)
  },[search]) 

 
  useEffect(() => {
  const userInfo = localStorage.getItem("userInfo");
   
    if (userInfo) {
   
      navigate("/cart");
     
    } else {
      navigate("/login");
    }
  }, []);
  const coloumn=[
    {name:"product",selector:(row)=>row.product,style: {
        color: "gray",
        }},
    {name:"Quantity",selector:(row)=>row.quantity,style: {
        color: "gray",
        }},
    {name:"ACTION ",selector:(row)=>
    <div style={{display:"flex" }}>
  
      {<>
        <button className='button' style={{background:"blue",color:"white",marginLeft:"5px",padding:"10px"}}
        onClick={  ()=>{navigate(`/Productpurchase/${row.product}`)}}
        >View </button>
      </>}
              
             
         </div>
       
        },
              
  ]
  return (


    <>
    <Navbar />
    <div className='container-fluid'>
        
        <div className='row'>
            <div className='col-2'><Sidebar /></div>
            <div className='col-10'>
                <div className='container' id='container'>
                <div className='row'>
                    <div className='col-3' id='collabel'><label htmlFor="">Product</label></div>
                    <div className='col-3' id='collabel'><label htmlFor="">User Name</label></div>
                    <div className='col-3' id='collabel'><label htmlFor="">Email</label></div>
                    <div className='col-3' id='collabel'><label htmlFor="">Phone</label></div>
                </div>

               
                </div>
                <div style={{marginTop:"1rem"}}>
                <DataTable 
        
        columns={coloumn} 
      data={filterUsers} 
        pagination
        fixedHeader
        style={{color:"red"}}
        highlightOnHover
        subHeader
      
        subHeaderAlign="center"
        // data={data}
      />  
                </div>
            </div>
        </div>
    </div>
    </>

  )
}

export default Cart