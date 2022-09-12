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
    
{name : 'Home', url : '/home'},
{name : 'Contect', url : '/contectus'},
{name : 'About us', url : '/aboutus'},
]

const Navbar = () => {
  const [isCart, setIsCart] = useState(false)
  const {cartData} = useContext(CartDataAPI)

  return (
    <>
    <NavbarStyled>
    {isCart && (
    <>
    <Cart setIsCart={setIsCart}/>
    <div className="overlay" onClick={() => setIsCart(false)}></div>
    </>)}
    <Nav>
        <Container className="d-flex justify-content-between align-items-center py-3 px-4 px-md-0">
            <a href="/" style={{textDecoration: 'none'}}><div style={{fontWeight: '400', color: '#333', fontSize: '1.2rem' }}>PHANOX</div></a>
            <div className="d-flex">
                {pages.map((page) => (
                    <MenuItem key={page.url}>
                        <NavLink to={page.url}>
                            <Typography textAlign="center">{page.name}</Typography>
                        </NavLink>
                    </MenuItem>
                ))}
            </div>
            <div style={{cursor: 'pointer', color: '#8a8a8a'}}>
                <Tooltip title="Singin">
                        <IconButton>
                                <NavLink to='/signin'><FiLogIn /></NavLink>
                        </IconButton>
                </Tooltip>
                <Tooltip title="Cart">
                    <IconButton onClick={() => setIsCart(!isCart)}>
                        <Badge badgeContent={parseInt(cartData.items.length)} color="error">
                            <LocalMallIcon />
                        </Badge>
                    </IconButton>
                </Tooltip>
               
            </div>
        </Container>
    </Nav>
    </NavbarStyled>
    </>
  )
}

export default Navbar