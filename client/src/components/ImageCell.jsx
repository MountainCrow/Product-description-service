import React from 'react';

var ImageCell = (props) => {
  
  return(
    <img data-flicity-lazyloader={props.product.image}/>
  )
}

export default ImageCell;