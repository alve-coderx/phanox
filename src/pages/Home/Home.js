import Navbar from "../../Components/Navbar/Navbar"
import Head from '../../Components/Head/Head'
import Products from '../../Components/Products/Products'
import PetterProducts from '../../Components/Products/PetterProducts'
import Footer from "../../Components/Footer/Footer"
import { useState } from "react"
import { Alert, Button } from "@mui/material"
import ChatBox from '../../Components/ChatBox/ChatBox'
import { io } from "socket.io-client"


const Home = () => {
  const socket = io.connect("http://localhost:5000");
  const room = '123456';
  const username = 'asdas1'

  const [filterOn,setFilterOn] = useState(false);

  const joinRoom = () => {
      socket.emit("join_room", room);
      setFilterOn((prev) => !prev)
};
  return (
    <>
    <Navbar/>
    <Head />
      <div style={{position: 'fixed',bottom: "0",right : "0",zIndex :'1'}}>
          {
          filterOn ? (
            <ChatBox socket={socket} username={username} room={room}/>
          )
          : 
          ''
        }
          <Button variant="contained" style={{backgroundColor: '#2f2e44'}} fullWidth onClick={joinRoom}>
              Do you need any help?
          </Button> 
        </div>
        <Products />
        <PetterProducts/>
    <Footer />
    </>
  )
}

export default Home
