import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import "./index.css"
const Cartwidget = (props) => {
  return (
    <div>
    <FaShoppingCart/>
    {props.valor}
    </div>
  )
}

export default Cartwidget
// import "./index.css"
// function Cartwidget (props) {
//     return(
// <>
// <div className="cart">
//    <img className="iconCart" src="public\cart-vector.png" alt="" />
//    {props.valor}
// </div>

// </>
//     )
// }
// export default Cartwidget