import React from 'react';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Signin from './pages/Signin/Signin'
import Login from './pages/Login/Login';
import ProductPage from './pages/ProductPage/ProductPage';
import ProductPurchase from './pages/ProductPurchase/ProductPurchase'


import Multistepper from './pages/Multistepper/Multistepper';
import Payment from './components/Payment/Payment';
import MyAccount from './pages/MyAccount/MyAccount';
import DashBoard from './pages/DashBoard/DashBoard'
import Anlyists from './pages/Anlyists/Anlyists';
import AllProducts from './pages/AllProducts/AllProducts'
import ParentCatogry from './pages/ParentCatogry/ParentCatogry';
import Contact from './pages/Contact/Contact'
import Cart from './pages/Cart/Cart';
import Returns from './pages/Returns/Returns';
import AllCategory from './pages/AllCategory/AllCategory';
import Account from './pages/Account/Account';
import AddressBook from './pages/AddressBook/AddressBook';
import ChangePassword from './pages/ChangePassword/ChangePassword'
import PurchaseItem from './pages/PurchaseItem/PurchaseItem';
import AddNewAdress from './pages/AddNewAdress/AddNewAdress';
import ContactUs from './pages/ContactUs/ContactUs';
import AboutUS from './pages/AboutUS/AboutUS'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermCondition from './pages/TermCondition/TermCondition';
import ReturnPolicy from './pages/ReturnPolicy/ReturnPolicy'
import Wishlist from './pages/Wishlist/Wishlist';
import StoreOrder from './pages/StoreOrder/StoreOrder'
import ShippingPolicy from './pages/ShippingPolicy/ShippingPolicy';
import Diaries from './pages/Diaries/Diaries';
import Blogpage from './pages/Blogpage/Blogpage';
import Cancellation from './pages/Cancellation/Cancellation';
import AllOrder from './pages/AllOrder/AllOrder';
import Invoice from './components/Invoice/Invoice';
import AdminLogin from './pages/AdminLogin/AdminLogin';
import AdminEdit from './pages/AdminEdit/AdminEdit';
import AdminProducts from './pages/AdminProducts/AdminProducts';



function App() {
    return ( 
        <>
       <Routes>
       <Route exact path = '/MyAccount' element = { < MyAccount /> }/ > 
        <Route exact path = '/ChangePassword' element = { < ChangePassword /> } /> 
        <Route exact path = '/AddressBook' element = { < AddressBook /> } />
        <Route exact path = '/Account' element = { < Account /> } /> 
        {/* <Route exact path = '/AllCategory' element = { < AllCategory /> }/ >  */}
        <Route exact path = '/Returns' element = { < Returns /> }/ >
        <Route exact path = '/PurchaseItem/:id' element = { < PurchaseItem/> }/> 
       
        <Route exact path = '/orderInvoice/:id' element = { <Invoice/> }/ > 

        
        <Route exact path = '/Adminlogin' element = { <AdminLogin/> }/ > 
       
       
 
       
        <Route  path = '/Contact' element = { < Contact /> } /> 
        <Route  path = '/AllProducts/edit/:id' element = { < AdminEdit/> } /> 
        {/* <Route  path = '/AllProducts' element = { < AllProducts /> }/ >  */}
        <Route path='/AdminProducts' element={<AdminProducts/>}/>

        <Route path = '/AddNewAdress'element = { < AddNewAdress /> }/ > 

        <Route  path = '/Anlyists' element = { < Anlyists /> } />
      
        <Route path = '/DashBoard' element = { < DashBoard /> } />
         <Route exact path = '/Payment' element = { < Payment /> } /> 
        <Route exact path = '/' element = { < Home /> } /> 
        
        <Route exact path = "/Signin" element = { < Signin /> } /> 
         <Route exact path = "/Login" element = { < Login /> }/ >
        <Route exact path = "/ProductPage/:id/:type" element = { < ProductPage /> } /> 
        
        <Route exact path = '/ProductPurchase/:id' element = { < ProductPurchase /> } /> 
        <Route exact path = '/InstantPurchase/:id/:quantity' element = { < Multistepper /> } />
       
         <Route exact path = '/Multistepper/:id' element = { < Multistepper /> } /> 
         <Route exact path = '/ProductPurchase' element = { < ProductPurchase /> } /> 
            
         <Route exact path = '/AboutUS' element = { < AboutUS /> } /> 
         <Route exact path = '/ContactUs' element = { < ContactUs /> } /> 
         <Route exact path = '/PrivacyPolicy' element = { <PrivacyPolicy /> } />
        <Route exact path = '/TermCondition' element = { <TermCondition /> } />
        <Route exact path = '/ReturnPolicy' element = { <ReturnPolicy /> } />
        <Route exact path = '/storeCart' element = { <Wishlist /> } />
        <Route exact path = '/StoreOrder' element = { <StoreOrder /> } />
        <Route exact path = '/ShippingPolicy' element = { <ShippingPolicy /> } />
        <Route exact path = '/Diaries' element = { <Diaries /> } />
        <Route exact path = '/Blogpage/:id' element = { <Blogpage /> } />
        <Route exact path = '/Cancellation' element = { <Cancellation /> } />
        <Route exact path = '/AllOrder' element = { <AllOrder /> } />
        

        
        </Routes>  
        
        
        </>
   
    );
}

export default App;