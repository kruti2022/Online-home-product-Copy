import './App.css';

import {
BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { ConText } from './context/DataContext'
import Register from './components/Register';
import Login from './components/login';
import ResetPassword from './components/ResetPassword';
import ForgotPassword from './components/ForgotPassword';
import HomePage from './components/HomePage';
import About from './components/About';
import AddProduct from './components/Vendor/AddProduct';
import ViewProduct from './components/ViewProduct';
import ProductDetails from './components/ProductDetails';
import Home from './components/Vendor/HomePage/Home';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Payment from './components/Payment';
import Pay from './components/Pay';
import MyOrders from './components/MyOrders';
import Success from './components/Success';

function App() {
    return (
      <>
      <ConText>
      <Router>
      
      <Navbar/>
      <div className="container my-3">
      <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/homepage" element={<HomePage/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/resetpassword" element={<ResetPassword/>} />
            <Route path="/forgotpassword" element={<ForgotPassword/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/addproduct" element={<AddProduct/>}/>
            <Route path="/viewproduct" element={<ViewProduct/>}/>
            <Route path="/details/:product_id" element={<ProductDetails/>} />
            <Route path="/vendor" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>} />
            <Route path="/payment" element ={<Payment/>}/>
            <Route path="/pay" element ={<Pay/>}/>
            <Route path="/order" element={<MyOrders/>} />
            <Route path="/success" element={<Success/>} />
            
      </Routes>  
      </div>
     
      </Router>
     
      </ConText>
      </>
    );
}

export default App;