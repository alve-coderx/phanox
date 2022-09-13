  import Navbar from 'react-bootstrap/Navbar';
  import NavDropdown from 'react-bootstrap/NavDropdown';
  import { useContext, useState } from "react"
  import { Nav, Container } from "react-bootstrap"
  import NavbarStyled from "./NavbarStyled.styled"
  import LocalMallIcon from '@mui/icons-material/LocalMall'
  import { Badge, IconButton, MenuItem, Tooltip, Typography } from "@mui/material"
  import Cart from "../Cart/Cart"
  import CartDataAPI from "../../cartDataAPI"
  import { NavLink } from "react-router-dom"
  import { FiLogIn } from "react-icons/fi"
  
  
  const pages = [
      
      {name : 'Home', url : '/'},
      {name : 'Contect', url : '/contectus'},
      {name : 'About us', url : '/aboutus'},
      {name : 'Dashboard', url : '/dashboard'},
      {name : 'Create Design', url : '/custom'},
      {name : 'Marketplace Design', url : '/shop'},
      ]
  function CollapsibleExample() {
        const [isCart, setIsCart] = useState(false)
        const {cartData} = useContext(CartDataAPI)
  
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light  ">
        {isCart && (
            <>
                <Cart setIsCart={setIsCart}/>
                <div className="overlay" onClick={() => setIsCart(false)}></div>
                </>)}
        <Container>
          <NavLink to="/" style={{textDecoration: 'none',fontWeight: '400', color: 'white', fontSize: '1.2rem',background: '#10b981',padding : '20px'}}>
             <div>PHANOX</div>
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                  {pages.map((page) => (
                      <MenuItem key={page.url}>
                          <NavLink to={page.url} style={{color : '#10b981', textDecoration : 'none'}}>
                              <Typography sx={{fontWeight : 'bold'}} textAlign="center">{page.name}</Typography>
                          </NavLink>
                      </MenuItem>
                  ))}
            </Nav>
            <Nav>
              <div style={{cursor: 'pointer', background: '#10b981',padding : '20px'}}>
                      <Tooltip title="Login">
                              <IconButton>
                                      <NavLink style={{color: 'white',textDecoration : 'none'}} to='/signin'>
                                          <FiLogIn />
                                      </NavLink>
                              </IconButton>
                      </Tooltip>
                      <Tooltip title="Cart">
                          <IconButton style={{color: 'white',textDecoration : 'none'}} onClick={() => setIsCart(!isCart)}>
                              <Badge badgeContent={parseInt(cartData.items.length)} color="error">
                                  <LocalMallIcon />
                              </Badge>
                          </IconButton>
                      </Tooltip>
                  </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default CollapsibleExample;