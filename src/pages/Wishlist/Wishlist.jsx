import React from 'react'
import './Wishlist.css'
import MediaNavbar from '../../components/MediaNavbar/MediaNavbar'
import Navbar from '../../components/Navbar/Navbar'
import AccountSidebar from '../Account/AccountSidebar'
import MediaFooter from '../../components/Footer/MediaFooter'

import { getWishlist } from '../../Api/WishlistRoute';
import DataTable from 'react-data-table-component';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Wishlist = () => {
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
      setFilteredUsers(data.Wishlist.products.reverse())
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


  const fn=(data)=>{
    
    const images=[]
    var str_array =data.split(',');
console.log("str",str_array);
for(var i = 0; i < str_array.length; i++) {
// Trim the excess whitespace.
str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
// Add additional code here, such as:

if(str_array[i]!==""){
const url=new URL(str_array[i])  



images.push(url.searchParams.get('id'))


return `https://drive.google.com/uc?id=${images[0]}`
}else{
return `https://drive.google.com/uc?id=${"10uk_BvFXN-tHCfAQNYeNDUg4cNaM5SaX"}`
}

}   
;



}
 
  useEffect(() => {
  const userInfo = localStorage.getItem("userInfo");
   
    if (userInfo) {
   
      navigate("/storeCart");
     
    } else {
      navigate("/login");
    }
  }, []);
  const coloumn=[
    {name:"Image",selector:(row)=><>
        <img src={fn(row.uploadImages)} style={{width:"80px",height:"80px ",margin:"20px", border: "2px solid #F3CA6D"}}  alt=""  />
        </>},
    {name:"Product",selector:(row)=>row.name,style: {
        color: "gray",
        }},
        {name:"Price",selector:(row)=>`₹ ${row.price}`,style: {
          color: "gray",
          }},
          {name:"Quantity",selector:(row)=>` ${row.quantity}`,style: {
            color: "gray",
            }},
    {name:"ACTION ",selector:(row)=>
    <div style={{display:"flex" }}>
  
      {<>
        <button className='button' style={{background:"#F3CA6D",color:"black",marginLeft:"5px",padding:"10px",borderRadius:"5px",border:"0px"}}
        onClick={  ()=>{navigate(`/Productpurchase/${row.product}`)}}
        >View </button>
         <button className='button' style={{background:"#F3CA6D",color:"black",marginLeft:"5px",padding:"10px",borderRadius:"5px",border:"0px"}}
        onClick={  ()=>{navigate(`/Instantpurchase/${row.product}/1`)}}
        >Buy now</button>
      </>}
              
             
         </div>
       
        },
              
  ]
  return (
    <>
    <div className='container-fluid' >
    <MediaNavbar />
    <Navbar />
    <div className='mediaview'>
        
    <div className='row' id='rowid'>
        <div className='col-2'  id='colid'>
            <AccountSidebar />
        </div>
        <div className='col-10' id='colid2'>
        <div className='container' id='container'>
            <div className='row' id='rowitem'>
                <h6> + CONTINUE SHOPPING</h6> 
            </div>
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

</div>
<MediaFooter />
</>
  )
}

export default Wishlist