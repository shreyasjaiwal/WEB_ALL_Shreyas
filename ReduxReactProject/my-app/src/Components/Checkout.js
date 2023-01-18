import React from 'react'

const Checkout = (props) => {
    const products=useSelector((state)=>state.product.value)
  return (
    <div>
     <h1>Total Items</h1>
     <h1>Checkout Price-</h1>
     
    </div>
  )
}

export default Checkout
