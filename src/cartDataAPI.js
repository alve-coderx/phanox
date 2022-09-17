import { createContext } from "react"

const CartDataAPI = createContext()

const initialCartData = {
    items: [],
    adreess : []
    
}

export {initialCartData}
export default CartDataAPI
