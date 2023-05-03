import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'

import { Footer } from '../../components/Footer/Footer'
import "./AdminEdit.css"
import swal from 'sweetalert'
import { editProduct, getProduct } from '../../Api/ProductRequest'
import { useNavigate, useParams } from 'react-router-dom'

const AdminEdit = () => {
   const [images,setimages]=useState([])
    const [product, setProduct] =useState({
        name:"",
    
        desc: "",
    
        maxPrice: "",
        price:"",
        quantity:"",
        skuId:"",
        variantType:"SINGLE PRODUCT",
        brandCategory:"SMARTY PET",
        petCategory:"DOG",
        typeCatagory:"FOOD",
        uploadImages:"",
        ageCategory:"UPTO 1YEAR",
        coverImage:"",
        image1:"",
        image2:"",
        image3:"",
        image4:"",
        
    
      });
      const params=useParams()
    //   const fn=(data)=>{
      
    // setimages(str_array)
    // console.log(images);
      
    //   }
      useEffect(() => {
        async function fetchData() {
          // You can await here
          const {data}= await getProduct(params.id)
     
        
            

          console.log(data);
          var str_array =data.uploadImages.split(',');
          
         setProduct({
            name:data.name,
    
        desc: data.desc,
    
        maxPrice: data.maxPrice,
        price:data.price,
        quantity:data.quantity,
        skuId:data.skuId,
        variantType:data.variantType,
        brandCategory:data.brandCategory,
        petCategory:data.petCategory,
        typeCatagory:data.typeCatagory,
        
        ageCategory:data.ageCategory,
        coverImage:data.coverImage,
        _id:data._id,
        image1:str_array[0],
        image2:str_array[1],
        image3:str_array[2],
        image4:str_array[3],
         })
          // 
          
       
        
       


        }
        fetchData();
        
         
      }, []);

     
      const navigate=useNavigate()
      const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
      };

     const handSubmit=async(e)=>{
        e.preventDefault();
        const ata={
            name:product.name,
    
            desc:product.desc,
        
            maxPrice:product.maxPrice,
            price:product.price,
            quantity:product.quantity,
            skuId:product.skuId,
            variantType:product.variantType,
            brandCategory:product.brandCategory,
            petCategory:product.petCategory,
            typeCatagory:product.typeCatagory,
           
            ageCategory:product.ageCategory,
            coverImage:product.coverImage,
            uploadImages:`${product.image1},${product.image2},${product.image3},${product.image4}`
            ,_id:product._id
        }
        const {data}=await editProduct(ata)
        console.log("data",data);
        if(data){
            swal("Product  added successfully!")
            navigate("/AdminProducts")
         resetForm()

        }else{
            swal("Error occured!")
        }
     }

     
const resetForm=()=>{
    setProduct({
        name:"",
    
        desc: "",
    
        maxPrice: "",
        price:"",
        quantity:"",
        skuId:"",
        variantType:"SINGLE PRODUCT",
        brandCategory:"SMARTY PET",
        petCategory:"DOG",
        typeCatagory:"FOOD",
        uploadImages:"",
        ageCategory:"UPTO 1YEAR",
        coverImage:"",
        image1:"",
        image2:"",
        image3:"",
        image4:"",
        
    })
}
  return (
    <>
     <Navbar />
        <div className='container-fluid'>
       
        <div className='row'>
            <div className='col-2'>
                <Sidebar />
            </div>
            <div className='col-10'>
                <div className='container' id='container'>
                    
                    <h4 className='productlabel'>Edit Product</h4>
                    <hr />
                    <form onSubmit={handSubmit}>
                        <div>
                            <div className='formlabel'> <label htmlFor="">Title</label> </div>
                            <div><input className='inputbox' type="text"  onChange={handleChange} name='name' value={product.name} /></div>
                        </div>
                        <div>
                            <div className='formlabel'> <label htmlFor="">Description</label> </div>
                            <div><input className='inputbox' type="text"  onChange={handleChange} name='desc' value={product.desc}  /></div>
                        </div>
                        <div>
                            <div className='formlabel'> <label htmlFor="">Sku Id</label> </div>
                            <div><input className='inputbox' type="text"  onChange={handleChange} name='skuId' value={product.skuId} /></div>
                        </div>
                        <div>
                            <div className='formlabel'> <label htmlFor="">Quantity</label> </div>
                            <div><input className='inputbox' type="text"  onChange={handleChange} name='quantity' value={product.quantity}  /></div>
                        </div>
                        <div>
                            <div className='formlabel'> <label htmlFor="">Price</label> </div>
                            <div><input className='inputbox' type="text"   onChange={handleChange} name='price' value={product.price} /></div>
                        </div>
                        <div>
                            <div className='formlabel'> <label htmlFor="">Discount Price</label> </div>
                            <div><input className='inputbox' type="text"  onChange={handleChange} name='maxPrice' value={product.maxPrice} /></div>
                        </div>
                        <div>
                        <div className='formlabel'> <label htmlFor="">Add Image</label> </div>
                        <div><input type="text" placeholder='Paste link here'  onChange={handleChange} name='image1' value={product.image1}  /></div>
                        <div><input type="text" placeholder='Paste link here'  onChange={handleChange} name='image2' value={product.image2} /></div>
                        <div><input type="text" placeholder='Paste link here'  onChange={handleChange} name='image3' value={product.image3}  /></div>
                        <div><input type="text" placeholder='Paste link here'  onChange={handleChange} name='image4' value={product.image4} /></div>
                            
                        </div>
                        <div>
                        <div>
                           <div>
                           <label htmlFor="Cover Image">Cover Image</label>
                           </div>
                            <input type="text"  onChange={handleChange} name='coverImage' value={product.coverImage}  placeholder='Paste cover image link here'/></div>
                           
                        </div>
                        <div>
                            <div className='formlabel'> <label htmlFor="">Pet Catogory</label> </div>
                            <div>
                                <select  className='inputbox'  onChange={handleChange} name='petCategory' value={product.petCategory}  id="">
                                    <option value="DOG">DOG</option>
                                    <option value="CAT">CAT</option>
                                    <option value="RABBIT">RABBIT</option>
                                    <option value="FISH">FISH</option>
                                    <option value="HAMSTER">HAMSTER</option>
                                    <option value="BIRD">BIRD</option>
                                    <option value="TURTLE">TURTLE</option>
                                    <option value="GUINEA PIG">GUINEA PIG</option>
                                    

                                </select>
                            </div>
                        </div>
                        <div>
                            <div className='formlabel'> <label htmlFor="">Type Catogory</label> </div>
                            <div>
                                <select  className='inputbox'  onChange={handleChange} name='typeCatagory' value={product.typeCatagory} id="">
                                    <option value="FOOD">FOOD</option>
                                    <option value="TOY">TOY</option>
                                    <option value="TREAT">TREAT</option>
                                    <option value="BEDS">BEDS</option>
                                    <option value="APPARELS">APPARELS</option>
                                    <option value="BLANKET">BLANKET</option>
                                    <option value="HEALTH & HYGIENE">HEALTH & HYGIENE</option>
                                    <option value="MAT">MAT</option>
                                    <option value="WALK ESSENTIALS">WALK ESSENTIALS</option>
                                    <option value="ACCESSORIES">ACCESSORIES</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <div className='formlabel'> <label htmlFor="">Brand Catogory</label> </div>
                            <div>
                                <select  className='inputbox' onChange={handleChange} name='brandCategory' value={product.brandCategory}  id="">
                                    <option value="SMARTY PET">SMARTY PET</option>
                                    <option value="LAL PET">LAL PET</option>
                                    <option value="DROOLS">DROOLS</option>
                                    <option value="ACANA">ACANA</option>
                                    <option value="AQUA DOG">AQUA DOG</option>
                                    <option value="ARDEN GRANGE">ARDEN GRANGE</option>
                                    <option value="SAVIC">SAVIC</option>
                                    <option value="DOGFEST">DOGFEST</option>
                                    <option value="BARK N BONE">BARK N BONE</option>
                                    <option value="BARK BUTLER">BARK BUTLER</option>
                                    <option value="BASIL">BASIL</option>
                                    <option value="ALL4PETS">ALL4PETS</option>
                                    <option value="CANOPUS">CANOPUS</option>
                                    <option value="CATFEST">CATFEST</option>
                                    <option value="DOG">DOG</option>
                                    <option value="PAWSH">PAWSH</option>
                                    <option value="TRUELOVE">TRUELOVE</option>
                                    <option value="WAGGY ZONE">WAGGY ZONE</option>
                                    <option value="WHOOF WHOOF">WHOOF WHOOF</option>
                                    <option value="BEAPHAR">BEAPHAR</option>
                                    <option value="BEEPS">BEEPS</option>
                                    <option value="BENNY'S">BENNY'S</option>
                                    <option value="BIO PET ACTIVE">BIO PET ACTIVE</option>
                                    <option value="BIOLINE">BIOLINE</option>
                                    <option value="TRIXIE">TRIXIE</option>
                                    <option value="BRAVECTO">BRAVECTO</option>
                                    <option value="FIFOZONE">FIFOZONE</option>
                                    <option value="CANINE CREEK">CANINE CREEK</option>
                                    <option value="VIRBAC">VIRBAC</option>
                                    <option value="SAVAVET">SAVAVET</option>
                                    <option value="INTERSAND">INTERSAND</option>
                                    <option value="ODOURLOCK">ODOURLOCK</option>
                                    <option value="SIMPLE SOLUTION">SIMPLE SOLUTION</option>
                                    <option value="CATSAN">CATSAN</option>
                                    <option value="CHAPPI">CHAPPI</option>
                                    <option value="RENA">RENA</option>
                                    <option value="CHIP CHOP">CHIP CHOP</option>
                                    <option value="CHIPSI">CHIPSI</option>
                                    <option value="CAPTAIN ZACK">CAPTAIN ZACK</option>
                                    <option value="TEA TREE OIL">TEA TREE OIL</option>
                                    <option value="DIBAQ">DIBAQ</option>
                                    <option value="POSS">POSS</option>
                                    <option value="TRIXIE">TRIXIE</option>
                                    <option value="BAYER">BAYER</option>
                                    <option value="BIO GROOM">BIO GROOM</option>
                                    <option value="FARMINA">FARMINA</option>
                                    <option value="FIDELE">FIDELE</option>
                                    <option value="FOODIE PUPPIES">FOODIE PUPPIES</option>
                                    <option value="PETFROLICS">PETFROLICS</option>
                                    <option value="FIRST BARK">FIRST BARK</option>
                                    <option value="FIRST MEOW">FIRST MEOW</option>
                                    <option value="FONDAPET">FONDAPET</option>
                                    <option value="VENKY'S">VENKY'S</option>
                                    <option value="TROPICLEAN">TROPICLEAN</option>
                                    <option value="OUTWARD HOUND">OUTWARD HOUND</option>
                                    <option value="GNAWLERS">GNAWLERS</option>
                                    <option value="gnawlers puppy snack strip123">gnawlers puppy snack strip123</option>
                                    <option value="GOODIES">GOODIES</option>
                                    <option value="H.P.">H.P.</option>
                                    <option value="HELLO PET">HELLO PET</option>
                                    <option value="HAPPY DOG">HAPPY DOG</option>
                                    <option value="HELLOFEED">HELLOFEED</option>
                                    <option value="HIMALAYA">HIMALAYA</option>
                                    <option value="PETSTAGES">PETSTAGES</option>
                                    <option value="IAMS">IAMS</option>
                                    <option value="iams pug123">iams pug123</option>
                                    <option value="FREEDOM">FREEDOM</option>
                                    <option value="JERHIGH">JERHIGH</option>
                                    <option value="KILTIX">KILTIX</option>
                                    <option value="KISKIN">KISKIN</option>
                                    <option value="KENNEL KITCHEN">KENNEL KITCHEN</option>
                                    <option value="BIO-GROOM">BIO-GROOM</option>
                                    <option value="KRYPTO">KRYPTO</option>
                                    <option value="ME-O">ME-O</option>
                                    <option value="MY BEAU">MY BEAU</option>
                                    <option value="FARMINA">FARMINA</option>
                                    <option value="PET CARE">PET CARE</option>
                                    <option value="VETOQUINOL">VETOQUINOL</option>
                                    <option value="PETKIN">PETKIN</option>
                                    <option value="ORIJEN">ORIJEN</option>
                                    <option value="OUT PETCARE">OUT PETCARE</option>
                                    <option value="PEDIGREE">PEDIGREE</option>
                                    <option value="DOG LOVERS">DOG LOVERS</option>
                                    <option value="INTAS">INTAS</option>
                                    <option value="PURINA">PURINA</option>
                                    <option value="HOLY PAWS">HOLY PAWS</option>
                                    <option value="ROYAL CANIN">ROYAL CANIN</option>
                                    <option value="RUFFWEAR">RUFFWEAR</option>
                                    <option value="SCOOBEE">SCOOBEE</option>
                                    <option value="SHEBA">SHEBA</option>
                                    <option value="SIMPARICA">SIMPARICA</option>
                                    <option value="SMARTHEART">SMARTHEART</option>
                                    <option value="SKY EC">SKY EC</option>
                                    <option value="TAIYO">TAIYO</option>
                                    <option value="TASTE OF THE WILD">TASTE OF THE WILD</option>
                                    <option value="TEMPTATION">TEMPTATION</option>
                                    <option value="TWISTIX">TWISTIX</option>
                                    <option value="VITAPOL">VITAPOL</option>
                                    <option value="WHISKAS">WHISKAS</option>
                                    <option value="WOREX">WOREX</option>
                                    <option value="YOUR BUDDY">YOUR BUDDY</option>
                                    <option value="ZOOMIES">ZOOMIES</option>
                                    <option value="ZUPREEM">ZUPREEM</option>
                                    <option value="BARK BONE">BARK BONE</option>
                                    

                                </select>
                            </div>
                        </div>

                        <div>
                            <div className='formlabel'> <label htmlFor="">Age Catogory</label> </div>
                            <div>
                                <select  className='inputbox'  onChange={handleChange} name='ageCategory' value={product.ageCategory}  id="">
                                    <option value="UPTO 1YEAR">UPTO 1YEAR</option>
                                    <option value="UPTO 2YEAR">UPTO 2YEAR</option>
                                    <option value="UPTO 3YEAR">UPTO 3YEAR</option>
                                    <option value="UPTO 4YEAR">UPTO 4YEAR</option>
                                    <option value="ABOVE 5YEARS">ABOVE 5YEARS</option>
                                </select>
                            </div>
                        </div>
                      

                        <div className='Addressbutton'>
                        <button style={{width:'150px'}}  type='submit'> Submit </button>
                        </div>
                        
                       
                    </form>
                </div>
          
      
            </div>
        
        </div>
      
    </div>
    <br />
    <br />
    <Footer />
    </>
  )
}

export default AdminEdit
