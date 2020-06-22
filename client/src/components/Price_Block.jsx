import React from 'react';
import Size_Dropdown from './Size_Dropdown.jsx'

var Price_Block = (props) => {
  return(
    <div style={{backgroundColor: "#f4f4f4"}} float='right' >
      <h3>{props.product.products[0].name}</h3>
      <h6>{props.product.products[0].gender}</h6>
      <a>{props.product.products[0].userRating}</a>
      <h3>$110</h3>
      <p>{props.product.products[0].description}</p>
      <div>Color Component</div>
      <div><Size_Dropdown /></div>
      <button>Add To Cart</button>
    </div>
  )
}

export default Price_Block;