import React ,{useState} from 'react'

import '../ProductPage/ProductPage.css'

import { useEffect } from "react";
import { getAllProducts } from "../../Api/ProductRequest.js";

import 'bootstrap/dist/css/bootstrap.css';


import { useNavigate }  from 'react-router-dom';


const ProductCard = ({typeCatagory,petCategory}) => {
 
    const [category, setCategory] = useState("");
    // const [products, setProduct] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  
    const handelSetCategories = (cat) => {
      console.log("hare", cat);
      setCategory(cat);
      // api call
      
    };

    const navigate =useNavigate()
    function handleProductPurchase(event){
      navigate('/ProductPurchase');
    }

  
    const [products,setProduct]=useState([])
    const Productpage = () => {
        navigate(`/ProductPage/${products._id}`)
    } 

    const userData =localStorage.getItem("userId")
    const userInfo =localStorage.getItem("userInfo")

    useEffect(() => {
      async function fetchData() {

        const zata ={
          petCategoryy:petCategory,
          typeCatagoryy:typeCatagory
        }

        console.log("zata",zata);
        // You can await here
        const {data}=await getAllProducts(zata)
        setProduct(data.splice(0,12))
        console.log(data);
        // ...
      }
      fetchData();
    }, []); // Or [] if effect doesn't need props or state

    const value = 3.5;
    const[users,setUsers]=useState([]);
    const [search,setSearch]=useState("");
    const [filterUsers,setFilteredUsers]=useState([]);

    // useEffect(() => {
    //   async function fetchData() {
    //     // You can await here
    //     const beta={userId:userData}
    //     const {data}=await getWishlist(beta)
    //     setUsers(data)
    //     setFilteredUsers(data.Wishlist.products)
    //     console.log(userData);
    //     console.log(data.Wishlist.products);
    //     // ...
    //   }
    //   fetchData();
    // }, []);
    const src=(data)=>{
    
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
  return (
    <div>
        <div className='container-fluid'  >
        <div align="center" style={{marginTop:'20px'}} ><h4 style={{fontWeight:'800',fontSize:'25px',color:'black',marginTop:'20px',paddingBottom:'40px'}}>People also brought</h4></div>
          <div align='center' id='procardlw'  className='row'>
            {products &&
            products.length > 0 &&
            products.map((ele) => (
              
                <div  className='col-md-2'  id='kil'   >
                <div  id="Productcard30" className='card'  onClick={()=>{
                      navigate(`/ProductPurchase/${ele._id}`)
                    }} >
                    <div className='Productimg' style={{borderRadius:'20px'}} align="center"><img src={src(ele.uploadImages)} alt=""  /></div>
                    
                    <div  style={{paddingTop:'20px'}} align="center" >
                        <b >{ele.name.slice(0,10)+'....'}</b>
                        <h6 style={{paddingTop:'10px',fontSize:'15px'}}><s>₹ {ele.maxPrice} </s>  - <b>  ₹{ele.price}</b> </h6>
                    </div>
                    <div style={{paddingTop:'10px',borderRadius:'20px'}} align="center">
                    <button  onClick={handleProductPurchase} className='button30'><img style={{backgroundColor:'#FFFFFF',margin:'5px',}} src={ele.uploadImages} alt="" /><span style={{backgroundColor:'#FFFFFF'}}>Add to cart</span></button></div>
                    <div style={{borderRadius:'20px',paddingTop:'10px',paddingBottom:'5px'}} align="center">
                    <button   className='button30' style={{backgroundColor:'#F2C879',color:'black'}}><span >Buy Now</span></button></div>
                    </div>
                    
                </div>
               ))}

               
            </div>
          </div>
    </div>
  )
}

export default ProductCard