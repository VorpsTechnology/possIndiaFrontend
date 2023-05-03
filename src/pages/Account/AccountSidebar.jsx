import React from 'react'

import './AccountSidebar.css'
import { useNavigate } from 'react-router-dom'

const AccountSidebar = () => {
  const navigate=useNavigate()
  const handleNavigate=(data)=>{
    navigate(`${data}`)
  }
  return (
   
<div> 
<div  id='siplay'>
   
   <a onClick={()=>{
    handleNavigate("/Account")
   }}> Manage Account</a>
   <a onClick={()=>{
    handleNavigate("/AddressBook")
   }}>Address Book</a>
   <a onClick={()=>{
    handleNavigate("/storeCart")
   }}>Cart</a>
   <a onClick={()=>{
    handleNavigate("/StoreOrder")
   }}>Store Order</a>
   <a onClick={()=>{
    handleNavigate("/ChangePassword")
   }}>Change Password</a>
  
 </div>
</div>
 
  )
}

export default AccountSidebar
