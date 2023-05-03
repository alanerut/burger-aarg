import React from 'react'
import './CartWidget.css'

const Logo = () => {
    const imgCarrito = "https://st2.depositphotos.com/1114422/5830/v/600/depositphotos_58300529-stock-illustration-check-out-icon-symbol.jpg";
  return (
    <div>
        <img className='imgCarrito' src={imgCarrito} alt="carrito de compras" />
        <strong> 4 </strong>
    </div>
  )
}

export default Logo