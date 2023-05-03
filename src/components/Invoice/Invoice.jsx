import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'
import './Invoice.css'
import { useParams } from 'react-router-dom'
import { getOrd } from '../../Api/OrderRequest'
import logo from "../../assets/logo.png"
import { getProduct } from '../../Api/ProductRequest'
function Invoice() {
    const [order,setOrder]=useState([])
    const [product,setProduct]=useState([])
    const params=useParams()
    useEffect(() => {
      async function fetchData() {
      
        const {data}=await getOrd(params.id)
       setOrder(data)
        console.log(data);
        // ...
      }
      fetchData();
    }, []); // Or [] if effect doesn't need props or state
    const [images,setimages]=useState(["1ADhSsnjla2m9Ru6cb3Kmu6PFsm3NZEKp"])

    const fn=(data)=>{
        var str_array =data.uploadImages.split(',');

for(var i = 0; i < str_array.length; i++) {
   // Trim the excess whitespace.
   str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
   // Add additional code here, such as:

   const url=new URL(str_array[i])  
 
   const arrz=images

   arrz.push(url.searchParams.get('id'))
   setimages(arrz)

}
    }
    useEffect(() => {
        async function fetchData() {
        
          const {data}=await getProduct(order.productId)
         setProduct(data)
          console.log(data);
          fn(data)
          // ...
        }
        fetchData();
      }, [images,fn ]); // Or [] if effect doesn't need props or state
  return (
    <div>
      <Navbar/>
      <div>
      <div className="invoice-box">
			<table cellpadding="0" cellspacing="0">
				<tr className="top">
					<td colspan="2">
						<table>
							<tr>
								<td className="title">
									<img src={logo} style={{width:"70px" , maxWidth: "60px"}} />
								</td>

								<td>
									Invoice #: {order._id} <br />
									Created : {order.createdAt} <br />
									
								</td>
							</tr>
						</table>
					</td>
				</tr>

				<tr className="information">
					<td colspan="2">
						<table>
							<tr>
								<td>
									{/*  */}
                                    <br />
									{order?.deliveryAddress?.address1}<br />
									{order?.deliveryAddress?.state}, {order?.deliveryAddress?.city} <br />
                                    { order?.deliveryAddress?.post}
								</td>

								<td>
									<br />
									{order?.deliveryAddress?.firstName} {order?.deliveryAddress?.lastName} <br />
									{order?.deliveryAddress?.email} <br />
                                    {order?.deliveryAddress?.mobile}
								</td>
							</tr>
						</table>
					</td>
				</tr>

				<tr className="heading">
					<td>Payment Method</td>
                    <td></td>
					
				</tr>

				<tr className="details">
					<td>{order.paymentMod}</td>

					<td></td>
				</tr>

                <tr className="heading">
					<td>Product information</td>
                    <td> </td>
					
				</tr>

                <tr className="details">
					:
                    
                    <td > <img  style={{height:"150px",width:"130px",marginTop:"20px" }} src={
                            images.length>0 ?
                            
                            
                            "https://drive.google.com/uc?id="+ images[1]:"no image"} alt="" />  </td>
					
                    <td></td>
                </tr>

				<tr className="details">
                <td>Id</td>
					<td>{order.productId}</td>

					
				</tr>
                <tr className="details">
                <td> Name</td>
					<td>{product.name}</td>

					
				</tr>
                <tr className="details">
                <td> SkuId</td>
					<td>{product.skuId}</td>

					
				</tr>

                <tr className="details">
                <td> Quantity</td>
					<td>{1}</td>

					
				</tr>

				<tr className="heading">
					<td>Item</td>

					<td>Price</td>
				</tr>

				<tr className="item">
					<td>Product price</td>

					<td> ₹{order.price}</td>
				</tr>

				<tr className="item">
					<td>Shipping cost</td>

					<td>₹ 100</td>
				</tr>

				

				<tr className="total">
					<td></td>

					<td>Total :₹{order.price +100}</td>
				</tr>
			</table>
		</div>
      </div>

      <Footer/>
    </div>
  )
}

export default Invoice
