import React, { useEffect, useState } from 'react'
import MediaNavbar from '../../components/MediaNavbar/MediaNavbar'
import Navbar from '../../components/Navbar/Navbar'
import AccountSidebar from '../Account/AccountSidebar'
import MediaFooter from '../../components/Footer/MediaFooter'
import './StoreOrder.css'
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom'
import { cancelOrder, getOrder, returnOrder } from '../../Api/OrderRequest';
import swal from 'sweetalert'
function StoreOrder() {
    const[users,setUsers]=useState([]);
    const [search,setSearch]=useState("");
    const [filterUsers,setFilteredUsers]=useState([]);
  

    const fn=(data)=>{
    
      const images=[]
      var str_array =data.split(',');

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
      const userData=localStorage.getItem('userId')
    const navigate=useNavigate()
    const handleCancelReq=async (dataz)=>{

      const beta={orderID:dataz}
      const {data}=await cancelOrder(beta)
      
      if(data){
        swal("Order cancelled")
      }else{
        swal("Error occured !")
      }
     }

     const handlereturnReq=async (dataz)=>{

      const beta={orderID:dataz}
      const {data}=await returnOrder(beta)
      
      if(data){
        swal("Order cancelled")
      }else{
        swal("Error occured !")
      }
     }
      useEffect(() => {
        async function fetchData() {
          // You can await here
          // alert()
          const beta={userId:userData}
          const {data}=await getOrder(beta)
         
          setUsers(data)
          setFilteredUsers(data.orderlist)
         
        
        }

        fetchData();

      }, [handleCancelReq]); // Or [] if effect doesn't need props or state
      useEffect(()=>{
        const result=users.filter((user)=>{
            return user.firstname.toLowerCase().match(search.toLowerCase());
            
        })
        setFilteredUsers(result)
      },[search]) 
    
    
      useEffect(() => {
      const userInfo = localStorage.getItem("userInfo");
       
        if (userInfo) {
       
          navigate("/StoreOrder");
         
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
                {name:"Price",selector:(row)=>`₹${row.price+100}`,style: {
                  color: "gray",marginLeft:"-3rem"
                  }},
                {name:"PaymentMod",selector:(row)=>row.paymentMod,style: {
                    color: "gray",marginLeft:"-3rem"
                    }},
                    {name:"Status",selector:(row)=>row.OrderStatus,style: {
                      color: "gray",marginLeft:"-3rem"
                      }},
        {name:"ACTION ",selector:(row)=>
        <div style={{display:"flex" }}>
      
          {<>

          {row.OrderStatus=="ORDERED"  && 
          
          <>
          <button className='button' style={{background:"#F3CA6D",color:"black",marginLeft:"5px",padding:"10px",borderRadius:"5px",border:"0px"}}
            onClick={  ()=>{navigate(`/orderInvoice/${row._id}`)}}
            >Invoice </button>
              <button className='button' style={{background:"red",color:"white",marginLeft:"5px",padding:"10px",borderRadius:"5px",border:"0px"}}
            onClick={  ()=>{ handleCancelReq(row._id)}}
            >Request Cancel</button>
          
          </>
          }
             { row.OrderStatus=="DISPATCHED" && 
          
          <>
          <button className='button' style={{background:"#F3CA6D",color:"black",marginLeft:"5px",padding:"10px",borderRadius:"5px",border:"0px"}}
            onClick={  ()=>{navigate(`/orderInvoice/${row._id}`)}}
            >Invoice </button>
              <button className='button' style={{background:"red",color:"white",marginLeft:"5px",padding:"10px",borderRadius:"5px",border:"0px"}}
            onClick={  ()=>{ handleCancelReq(row._id)}}
            >Request Cancel</button>
          
          </>
          }

          {
            row.OrderStatus=="DELIVERED" &&   <>
            <button className='button' style={{background:"#F3CA6D",color:"black",marginLeft:"5px",padding:"10px",borderRadius:"5px",border:"0px"}}
              onClick={  ()=>{navigate(`/orderInvoice/${row._id}`)}}
              >Invoice </button>
                <button className='button' style={{background:"red",color:"white",marginLeft:"5px",padding:"10px",borderRadius:"5px",border:"0px"}}
              onClick={  ()=>{ handlereturnReq(row._id)}}
              >Request Return</button>
            
            </>
        }

{
  row.OrderStatus=="RETURN" &&   <>
  <button className='button' style={{background:"#F3CA6D",color:"black",marginLeft:"5px",padding:"10px",borderRadius:"5px",border:"0px"}}
    onClick={  ()=>{navigate(`/orderInvoice/${row._id}`)}}
    >Invoice </button>
      {/* <button className='button' style={{background:"red",color:"white",marginLeft:"5px",padding:"10px",borderRadius:"5px",border:"0px"}}
    onClick={  ()=>{ handlereturnReq(row._id)}}
    >Request Return</button>
   */}
  </>
          }

{
  row.OrderStatus=="CANCELRETURN" &&   <>
   <button className='button' style={{background:"#F3CA6D",color:"black",marginLeft:"5px",padding:"10px",borderRadius:"5px",border:"0px"}}
    onClick={  ()=>{ navigate("/ContactUs")}}
    >Contact us</button>
  <button className='button' style={{background:"red",color:"white",marginLeft:"5px",padding:"10px",borderRadius:"5px",border:"0px"}}
    onClick={  ()=>{swal("Will be removed after 7 days")}}
    >Remove</button>
     
  
  </>
          }

          {
            row.OrderStatus=="CANCELLED" &&   <>
             <button className='button' style={{background:"#F3CA6D",color:"black",marginLeft:"5px",padding:"10px",borderRadius:"5px",border:"0px"}}
              onClick={  ()=>{ navigate("/ContactUs")}}
              >Contact us</button>
                <button className='button' style={{background:"red",color:"white",marginLeft:"5px",padding:"10px",borderRadius:"5px",border:"0px"}}
              onClick={  ()=>{ handleCancelReq(row._id)}}
              >Remove</button>
               
            
            </>
          }
            
             
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
                <h6> + Manage </h6> 
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

export default StoreOrder
