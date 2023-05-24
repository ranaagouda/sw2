import React from 'react'
import CartItem from '../CartItem/CartItem'

function CartList({cartItems}) {
  return (
    <div>
        {cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem}/>)}
    </div>
  )
}

export default CartList