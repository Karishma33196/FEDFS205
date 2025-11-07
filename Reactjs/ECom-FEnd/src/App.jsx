import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import Logout from "./components/Logout";
import ManageProducts from "./components/ManageProducts";
import UserManagement from "./components/UserManagement";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      {/* whatever routes mentioned here need to be opened on the browser */}
      <Routes>
        {/* multiple routes for multiple pages */}
        <Route path="/" element={<HomePage />} /> 
        {/* self-closing, no need for /Route tag */}
        <Route path="/aboutus" element ={<AboutUs/>}/>
         <Route path="/signin" element ={<SignIn/>}/>
          <Route path="/signup" element ={<SignUp/>}/>
           <Route path="/dashboard" element ={<Dashboard/>}/>
           <Route path="/products" element ={<Products/>}/>
           <Route path="/manage-products" element ={<ManageProducts/>}/>
            <Route path="/usermanagement" element ={<UserManagement/>}/>
             <Route path="/cart" element ={<Cart/>}/>
             <Route path="/logout" element ={<Logout/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
