import React, { createContext } from 'react';
// import BookingdetailsG from './Components/Modules/BookingdetailsG ';
 

import {Route, Routes, BrowserRouter } from 'react-router-dom';
// import About from './Components/NavBarComponents/About';
import ContactUs from './Components/NavBarComponents/ContactUs';
 import GlobalNavbar from './Components/NavBarComponents/GlobalNavbar';
import Home from './Components/NavBarComponents/Home';
import Profile from './Components/Modules/Profile';
import Packagedetails from './Components/CardComponents/Packagedetails';
import Footer from './Components/MainComp/Footer';
import AboutUs from './Components/NavBarComponents/AboutUs';
import Packages from './Components/CardComponents/Packages';
import Sub_Category from './Components/CardComponents/Sub_Category';
 import Login from './Components/Modules/Login';
import Signup from './Components/Modules/Signup';
import Bookingdetails from './Components/Modules/BookingdetailsG ';
import BookingdetailsG from './Components/Modules/BookingdetailsG ';
import Search from './Components/Modules/Search';
import Addpackages from './Components/Modules/AddPackage';
import AddCatagory from './Components/Modules/AddCatagory'
import Book from './Components/Modules/Book'
import EditUser from './Components/Modules/EditUser';
import UserConfig from './Components/MainComp/UserConfig';
import ForgetPass from './Components/MainComp/ForgetPass';
import Invoice from './Components/Modules/Invoice';







const App=() =>{
 //1. CONTEXTaPI



  return (<>

  
 <BrowserRouter>
    <GlobalNavbar/>
    
        
        <Routes>
       
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/AboutUs' element={<AboutUs/>}></Route>
        <Route path='/ContactUs' element={<ContactUs/>}></Route>
        <Route path="/Sub_Category/:Cat_Master_Id" element={<Sub_Category/>} />
        <Route path="/Packages/:Cat_Master_Id" element={<Packages/>} />
        <Route path="/Package_Details/:Pkg_Id" element={<Packagedetails/>} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/BookingdetailsG/:Bkg_Id" element={<BookingdetailsG/>} /> 
    <Route path="/Login" element={<Login/>} /> 
    <Route path="/Signup" element={<Signup/>} /> 
    <Route path="/Search" element={<Search/>} />   
    <Route path="/Addpackage" element={<Addpackages/>} />  
    <Route path="/Addcategory" element={<AddCatagory/>} />    
    <Route path="/Book/:Pkg_Id" element={<Book/>} /> 
    <Route path="/EditUser/:Acc_Id" element={<EditUser/>} /> 
    <Route path="/Users" element={<UserConfig/>} />
    <Route path="/ForgetPass" element={<ForgetPass/>} />
    <Route path="/Invoice/:Bkg_Id" element={<Invoice/>} />
    
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    
      </>


  );

}

export default App;
