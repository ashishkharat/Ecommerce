import React from 'react'

export default function(props) {
  return (
    
        <div>
      <h2>{props.product.name}</h2>
      <p>{props.product.description}</p>
      <p>Price: {props.product.price}</p>
      {/* Add other product details as needed */}
    </div>
    
  )
}
