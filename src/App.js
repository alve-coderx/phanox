import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AdminController from "./pages/Admin Controller/AdminController"
import Home from './pages/Home/Home'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import CartDataAPI from './cartDataAPI'
import { initialCartData } from './cartDataAPI'
import Error from './Components/Error'
import ContectUs from './pages/ContectUs/ContectUs'
import Navbar from './Components/Navbar/Navbar'
import AboutUs from './pages/AboutUs/AboutUs'
import SignIn from './pages/Singin/SignIn'
import SignUp from './pages/SignUp/SingUp';
import Dashboard from './pages/Dashboard/Dashboard'
import AddProducts from './pages/Dashboard/AddProducts'
import Content from './pages/Admin Controller/AdminDash/content'
import CustomDesign from './pages/Custom/CustomDesign'
import MarketDesign from './pages/MarketDesign/MarketDesign'
const App = () => {
  const [cartData, setCartData] = useState(JSON.parse(localStorage.getItem('cart_data')) || initialCartData)
  
  useEffect(() => {
    localStorage.setItem('cart_data', JSON.stringify(cartData))
  }, [cartData])

  const CartDataAPIValues = {
    cartData,
    setCartData,
  }

  return (
    <>
      <Router>
        <CartDataAPI.Provider value={CartDataAPIValues}>
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/contectus" element={<ContectUs />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/admin" element={<AdminController />} />
                <Route path="/custom" element={<CustomDesign />} />
                <Route path="/shop" element={<MarketDesign />} />
                <Route path='/dashboard' element={<Dashboard/>}>
                    <Route path='/dashboard/addproducts' element={<Content/>}/>
                </Route>
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="*" element={<Error />} />
          </Routes>
        </CartDataAPI.Provider>
      </Router>
    </>  
  );
}

export default App;
