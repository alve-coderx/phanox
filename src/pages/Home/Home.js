import Navbar from "../../Components/Navbar/Navbar"
import Head from '../../Components/Head/Head'
import Products from '../../Components/Products/Products'
import PetterProducts from '../../Components/Products/PetterProducts'
import Footer from "../../Components/Footer/Footer"
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../features/admin/adminSlice'
import { useEffect } from "react"
import { useState } from "react"
import { Alert, Button } from "@mui/material"
import { Box } from "@mui/system"
import ChatBox from '../../Components/ChatBox/ChatBox'

const Home = () => {
  const {data} = useSelector(state => state.product)
  const dispatch = useDispatch()
  const [filterOn,setFilterOn] = useState(false);

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <>
    <Navbar/>
    <Head />
      <div style={{position: 'fixed',bottom: "0",right : "0"}}>
          {
          filterOn ? (
            <ChatBox/>
          )
          : 
          ''
        }
          <Button variant="contained" color='success' fullWidth onClick={() => setFilterOn((prev) => !prev)}>
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
