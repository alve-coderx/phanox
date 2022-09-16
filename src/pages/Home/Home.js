import Navbar from "../../Components/Navbar/Navbar"
import Head from '../../Components/Head/Head'
import Products from '../../Components/Products/Products'
import PetterProducts from '../../Components/Products/PetterProducts'
import Footer from "../../Components/Footer/Footer"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"
import { useState } from "react"
import { Alert, Button } from "@mui/material"
import { Box } from "@mui/system"
import ChatBox from '../../Components/ChatBox/ChatBox'
import { getProducts } from "../../features/admin/adminSlice"

const Home = () => {
  const {data} = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  const [filterOn,setFilterOn] = useState(false);
  return (
    <>
    <Navbar/>
    <Head />
      <div style={{position: 'fixed',bottom: "0",right : "0",zIndex :'1'}}>
          {
          filterOn ? (
            <ChatBox/>
          )
          : 
          ''
        }
          <Button variant="contained" style={{backgroundColor: '#2f2e44'}} fullWidth onClick={() => setFilterOn((prev) => !prev)}>
              Do you need any help?
          </Button> 
        </div>
        <Products products={data?.data} />
        <PetterProducts products={data?.data} />
    <Footer />
    </>
  )
}

export default Home
