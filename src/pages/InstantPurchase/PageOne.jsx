import React, { useEffect, useState } from 'react'
import product from '../../assets/product.png'
import Modal from 'react-modal';
import animeleg from '../../assets/animeleg.png'
import './PageOne.css'
import { GetToken, CourierServiceability , Tracking_OrderId } from 'shiprocket-api'
import axios from "axios"
import { ICountry, IState, ICity } from 'country-state-city'
import per from '../../assets/per.png'
import tup from '../../assets/tup.png'
import jump from '../../assets/jump.png'
import gikk from '../../assets/gikk.png'
import jil from '../../assets/jil.png'
import pip from '../../assets/pip.png'
import pandit from '../../assets/pandit.png'
import mediay from '../../assets/mediay.png'

import { useNavigate, useParams } from 'react-router-dom'
import { getProduct } from '../../Api/ProductRequest'
import { createOrder } from '../../Api/OrderRequest'
import swal from "sweetalert"
import { Country, State, City }  from 'country-state-city';
import tick from '../../assets/tick.png'
import flying from '../../assets/flying.png'
import back from '../../assets/back.png'
import crip from '../../assets/crip.png'
import umi from '../../assets/umi.png'

const PageOne = () => {
  const navigate = useNavigate();
  const userData =localStorage.getItem("userId")
  const userInfo =localStorage.getItem("userInfo")
   const [text,setText]=useState("Pay now") 
  const [post ,setPost]=useState({})
  const [states,setState]=useState([])
  const [stateCode,setStateCode]=useState("AN")
  const [cityCode,setCityCode]=useState("Bamboo Flat")
  const [city,setCity]=useState([])
  const params =useParams()
  function MyAccount(event) {

    navigate('/MyAccount');
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  // const [activeStep, setActiveStep] = React.useState(0);
  const [visible, setVisible] = useState(true);
  const [color,setColor]=useState("white")
  const [token,setToken]=useState()
  const [estimate,setEstimate]=useState("24-48 hr")
  const [shippingCost,setShippingCost]=useState(100)
  const [address, setAddress] =React.useState({
    firstName:"",

    email: "",

    lastName: "",
    mobile:"",
    DAddress:"",
    city:"",
    state:"",
    zip:"",
    

  });

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      // overflow: 'hidden', /* Hide scrollbars */
      height:"90%"
    },
  };
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
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
      // You can await here
      const {data}=await getProduct(params.id)
 
      setPost(data)

      fn(data)
      setState( State.getStatesOfCountry("IN"))
      setCity(City.getCitiesOfState("IN", stateCode))
      // ...
    }
    fetchData();
  }, [images,fn,stateCode]);
  // const handleNext = () => {
  //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };
  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };
  const order=async(e)=>{
    e.preventDefault();
   
    if(userData && userInfo){
     const ata={
       productId:post._id,
       userId:userData,
       name:post.name,
       uploadImages:post.uploadImages,
       quantity:params.quantity,
       price:post.price,
       deliveryAddress:{
          firstName:address.firstName,
          lastName:address.lastName,
          mobile:address.mobile,
          email:address.email,
          state:stateCode,
          city:cityCode,
          post:address.zip,
          address1:address.DAddress

       },
       paymentMod:"COD",
       PaymentStatus:"PENDING",
       DeliveryStatus:"PENDING",
       OrderStatus:"ORDERED"
     }

     const tata= await createOrder(ata)
     if(tata){
      openModal()
 
      
     }
    }else{
     swal("Login first")
     navigate('/signin')
    }
  
      
   }
   var data = JSON.stringify({
    "email": "possindia21@gmail.com",
    "password": "Tanya@07"
  });
  
  var config = {
    method: 'post',
  maxBodyLength: Infinity,
    url: 'https://apiv2.shiprocket.in/v1/external/auth/login',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

 const foo=async()=>{
  const response = await CourierServiceability({

    auth: {
            email : 'possindia21@gmail.com',
            password: 'Tanya@07',
        },
    params: {
        pickup_postcode : 122022,
        delivery_postcode : address.zip,
        weight: 2,
        cod : 1
    }
})

setEstimate(response)
 }
  
  return (
    <>
      <form action="" onSubmit={order}>
   {visible ?<>
    
    <div>
    <div className='per'><img src={per} alt="" /></div>
      <div className='flex-contianer' >
        <div className='flex-item-left' >
          <div className='mobileseen'>
          <div className='mediacarf'  align='center'>
          <div className='card' id='cardfor'>
           <div style={{display:'inline'}}>
           <div align='center'><img src={
                            images.length>0 ?
                            
                            
                            "https://drive.google.com/uc?id="+ images[1]:"no image"} style={{width:"15rem"}} alt="" /></div>
        
           
           </div>
           <div>
                        <hr />
                      <div className='container-fluid'>
                <div style={{display:'flex',margin:'20px',justifyContent:'space-between'}}>
                      <div>price Subtotal : </div>
                      <div> ₹ {post.price}</div>
                  </div>
                  <div style={{display:'flex',margin:'20px',justifyContent:'space-between'}}>
                      <div>Shipping Charges</div>
                      <div> ₹ {shippingCost}</div>
                  </div>
                  <div >
                      <div align='center'><button className='totalbutton'>Total Amount :   ₹ {post.price + shippingCost}</button></div>
                      
                  </div>
                </div>
                      </div>
          </div>
        </div>
          </div>
        <div align='center'><h4 className='header'>Contact Information</h4></div>
       <div align='left'  style={{height:'0px'}} className='mediay' ><img src={mediay} alt="" /></div>
  <div align='right' style={{height:'0px'}} className='imghim'><img src={pandit} alt="" /></div>
     
          <div className='poi'>
          <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">First Name</label></div>
              <div><input className='nameinput2'     onChange={handleChange} name='firstName' value={address.firstName} type="text" /></div>
        </div>
        <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">Last</label></div>
              <div><input name='lastName'     onChange={handleChange} value={address.lastName} className='nameinput2' type="text" /></div>
        </div>
          </div>
       
        <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">Mobile number</label></div>
              <div><input className='Mobiinput'     onChange={handleChange} name='mobile' value={address.mobile} type="text" /></div>
        </div>
        <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">Email</label></div>
              <div><input className='Mobiinput'     onChange={handleChange} name='email' value={address.email} type="text" /></div>
        </div>
        <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">Address</label></div>
              <div><input className='Mobiinput'     onChange={handleChange} name='DAddress' value={address.DAddress} type="text" /></div>
        </div>
        <div>
          <div>
   
        <div>
    <div className='poi' >
      <div >
      <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">State</label></div>
              <div> 
                 <select className='nameinput2'  onChange={(e)=>{
                  setStateCode(e.target.value)
                 
            
              }} name="state" id="">
                {states &&
            states.length > 0 &&
            states.map((ele) => (  
              <option value={ele.isoCode} >{ele.name}</option>
             ))}
              </select>
             
            
              
              </div>
        </div> 
          </div>
          <div>
          <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">City</label></div>
              <div>
              <select  className='nameinput2'     onChange={(e)=>{
                  setCityCode(e.target.value)
                 
            
              }} name="city" id="">
                 { city.length > 0 &&
            city.map((ele) => (  
              <option value={ele.name} >{ele.name}</option>
             ))} </select>
              </div>
        </div> 
          </div>
          <div>
       
          </div>
          
      </div>

      <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">Zip</label></div>
              <div><input className='Mobiinput' name='zip' value={address.zip}     onChange={handleChange} type="text" /></div>
        </div> 
        </div>
          </div>
        </div>
      
                 
        
   
       
      
      
        </div>

      
        <div className='flex-item-right' id='leftslide'>
            <div  className='card200'>
                <div style={{display:'flex'}}>
                <div className='imgpro'><img style={{width:"13rem",height:"15rem",margin:"1rem"}} src={
                            images.length>0 ?
                            
                            
                            "https://drive.google.com/uc?id="+ images[1]:"no image"} alt="" /></div>
                <div style={{marginTop:'50px'}}>
                   <div  className='card' id='cardid' >
                        <div align="center"><h6 style={{padding:'10px',fontSize:'15px',fontWeight:'700'}}>{post.name}</h6></div>
                        <div align="center"  style={{display:"flex",justifyContent:'space-between'}}>
                            <div style={{padding:'0px 20px 20px 20px'}}> <h6 style={{fontSize:'15px'}}>Price</h6> </div>
                            <div style={{padding:'0px 20px 20px 0px'}}> <h6 style={{fontSize:'15px'}}><s>  ₹{post.maxPrice}</s> {post.price}</h6></div>
                        </div>
                    </div>
                </div>
                </div>
                <hr />
                <h4 style={{marginLeft:"-16rem",marginTop:"1rem"}}>TOTAL PRICE</h4>
                <div align="right" >
                 
                    <div className='card' style={{marginTop:"-3rem"}} id='pro'><h4 style={{fontWeight:'bolder',color:'rgb(0,0,0,1)',fontSize:'25px'}}>₹{post.price}</h4></div>
                   </div>
              
                
            </div>
            
        </div>
       
      </div>
      {/* <button onClick={()=>{
        alert()
      setVisible(false);

      }} >
                next  
                  </button> 
                  <button type='submit'>
                    chekout
                  </button>  */}
             <div className='cssbtn'  onClick={() => 
                {
                  if(address.firstName !=="" && address.lastName!==""){
                    
                    axios(config)
                    .then(function (response) {
                    
                      setToken(JSON.stringify(response.data))
                    })
                    .catch(function (error) {
                      console.log();
                    });

                    foo()
                    setVisible((visible)=>!visible)


                  }else{
                    swal("Enter the billing information..!")
                  }
                 
                }
                } style={{marginLeft:""}} ><button className='paybtn2'> <span style={{marginRight:'10px'}}>
           
              </span> Checkout</button></div>
      <div className='flex-container' id='purdisplay'>
        
 
      </div>

      <div className='container-fluid'  id='mobile'>
      
      </div>
      
      <div className='flexi' >
      <div className='flexi-left'>
     
      <img src={animeleg} alt="" />
      </div>
      <div className='flexi-right'> <img src={tup} alt="" /></div>
      </div>
    
    </div>
    
    
    <div >

    </div>
   </>:<>

   <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
         <h2 ref={(_subtitle) => (subtitle = _subtitle)} style={{color:"#32CD32",margin:"2rem"}}>Order placed..!</h2>
        <> 
<div className='container-fluid' style={{height:"600px"}} >
  <div align='right' style={{height:'0px'}} className='pip'><img src={pip} alt="" /></div>
           <div align='center' style={{justifyContent:'center'}} >
           <div  align='center'   className='card' id='cardpurchase'>
                <div id='orderpack'>
                <div style={{margin:'auto'}}>
                    <img src={
                            images.length>0 ?
                            
                            
                            "https://drive.google.com/uc?id="+ images[1]:"no image"} style={{width:"24rem",marginRight:"1rem"}} alt="" />
                </div> 
                <div>
                    <div className='card' id='cardpro' >
                     <div className='container' style={{padding:'20px'}}  >
                     <div  align='center'><h4> <b>{post.name}</b> </h4></div>
                       <div align='center'  style={{display:'flex',justifyContent:'space-between',padding:'20px'}}>
                       <div>Price</div>
                        <div>₹ {post.price + shippingCost}</div>
                       </div>
                     </div>
                    </div>
                </div>
                </div>
               
                <hr />
                <div  id='comple'>
                <div>
                   <button className='orderComplete' onClick={()=>{
                    navigate("/")
                   }}>Shop More</button>
                </div> 
                <div>
                    <button className='priceComplete' onClick={()=>{
                      navigate("/StoreOrder")
                      closeModal()
                      
                    }}> <b>My orders</b> </button>
                </div>
                </div> 
            </div>
          
           </div>
           <div align='center' style={{marginTop:'50px'}} className='con'>
      <h4 style={{fontWeight:'500px'}}> <b>Your Order will be shipping on {estimate}</b> </h4>
    </div>
           <div align='left' class="bottomleft"><img style={{height:'300px'}} src={jump} alt="" /></div>  
           <div className='bootomright'><img src={gikk} alt="" /></div> 

         
    </div>
    
    <div align='right' className='jil'><img src={jil} alt="" /></div>

   
    </>
      </Modal>
   <div className='container-fluid'>
<div className='flying'><img style={{height:'300px'}} src={flying} alt="" /></div> 
    <div className='flexcontent4' style={{marginTop:'40px'}}>
    <div   className='formobile'>
    <div className='flexleft0'>
      <div id='lomnk' className='container'>
    <div   className='card' id='card50'>
                
                
                
                <div align='center' className='container'>
                <div id='cardbig'>
                      <div><img src={
                            images.length>0 ?
                            
                            
                            "https://drive.google.com/uc?id="+ images[1]:"no image"} style={{width:"15rem"}} alt="" /></div>
                      <div>
                        <hr />
                      <div className='container'>
                <div style={{display:'flex',margin:'20px',justifyContent:'space-between'}}>
                      <div>price Subtotal :</div>
                      <div> ₹ {post.price}</div>
                  </div>
                  <div style={{display:'flex',margin:'20px',justifyContent:'space-between'}}>
                      <div>Shipping Charges </div>
                      <div> ₹ {shippingCost} </div>
                  </div>
                  <div >
                      <div align='center'><button className='totalbutton'>Total Amount : ₹ {post.price + shippingCost} </button></div>
                      
                  </div>
                </div>
                      </div>
                  </div>
                </div>
                <hr />
               
             
              </div>
    </div>
      </div>
    </div>
        <div align='center' className='flexleft0' >
     
            <div align='left' className='card' id='card10'>
                <h4  className='shiphead'>Ship To</h4>
              
                <h6>Postal code : {address.zip}</h6>
                <h6>Address : {address.DAddress}</h6>
            </div>
            <div align='left' className='card' style={{marginTop:'20px'}} id='card10'>
                <h4 className='shiphead' >Method</h4>
                <h6>Shiiping Charge fixed : {shippingCost}</h6>
                <h6>Estimated delivery time : {estimate} </h6>
            </div>
            <div align='left' style={{height:'0px'}} className='umi'><img src={umi} alt="" /></div>
            <div align='right' style={{height:'0px'}} className='cripimg'><img src={crip} alt="" /></div>
            <div className='paymentgatway2'>
                <div className='headingpay'><h4>Payment Methods</h4></div>
               
                <div align='center'   id='paycontainer2'>
                {/* <div onClick={()=>{
                  swal("Not available")
                }} className='card' id='paycards2'><h3> <img  src={tick} alt="" /> <span  style={{marginLeft:'20px'}}><s>UPI</s> </span> </h3></div> */}
            <div  onClick={()=>{
                  setText("Order now ")
                  setColor("grey")

                }} className='card'  id='paycards2' style={{marginTop:'20px',backgroundColor:color}}><h3><img src={tick} alt="" /><span style={{marginLeft:'20px'}}>COD</span></h3></div>
            {/* <div onClick={()=>{
                  swal("Not available")
                }} className='card' id='paycards2' style={{marginTop:'20px'}}><h3> <img src={tick} alt="" /><span style={{marginLeft:'20px'}}><s>Net Banking</s></span></h3></div> */}
                </div>

            </div>
                
    <div className='cssbtn'  ><button className='paybtn2'> <span style={{marginRight:'10px'}}><img onClick={openModal} src={back} alt=""  /></span> {text}</button></div>
        </div>
        <div   className='flexright0'>
            <div  className='card' id='card20'>
                
              <div className='container'>
              <div style={{display:'flex',margin:'20px',justifyContent:'space-between'}}>
                    <div>product Subtotal :</div>
                    <div> {post.price}</div>
                </div>
                <div style={{display:'flex',margin:'20px',justifyContent:'space-between'}}>
                    <div>Shipping Charge :Fixed</div>
                    <div>₹ {shippingCost}</div>
                </div>
                <div >
                    <div align='center'><button className='totalbutton'>Total :₹ {post.price}</button></div>
                    
                </div>
              </div>
              <hr />
              <div className='container'>
              <div id='cardbig'>
                    <div><img src={
                            images.length>0 ?
                            
                            
                            "https://drive.google.com/uc?id="+ images[1]:"no image"} style={{width:"13rem",height:"13rem"}} alt="" /></div>
                    <div>
                    <div   className='card' id='cardotherid' style={{width:'150px',height:'10rem',marginTop:'30px'}}>
                        <div align="center"><h6 style={{padding:'10px',fontSize:'15px',fontWeight:'700'}}>{post.name}</h6></div>
                        <div align="center"  style={{display:"flex",justifyContent:'space-between'}}>
                            <div style={{padding:'0px 20px 20px 20px'}}>Price</div>
                            <div style={{padding:'0px 20px 20px 0px'}}>₹ {post.price}</div>
                        </div>
                    </div>
                    </div>
                </div>
              </div>
              <hr />
              <div className='container'>
                <div className='bootonbutton'>
                  <div className='procard'><button>Total  ₹{post.price + shippingCost}</button></div>
                </div>
              </div>
              
            </div>

        </div>
      
    </div>
{/* <img style={{width:"4rem",height:"4rem"}} src="https://thumbs.dreamstime.com/b/ecommerce-icon-elegant-yellow-round-button-ecommerce-icon-isolated-elegant-yellow-round-button-abstract-illustration-105993111.jpg" alt="noimage"  onClick={() => setVisible((visible)=>!visible)}/> */}
  </div>
 

   </> }
       
   
   
    </form>

   </>
  )
}

export default PageOne
