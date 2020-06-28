import React from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import Price_Block from'./Price_Block.jsx';
import SliderThumb from './SliderThumb.jsx'
import styled from 'styled-components';

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1185px;
  max-height: 1000px;
  margin: 0 auto;
  background: f4f4f4;
  z-index: 0;
`;

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      products: [],
      currentProduct: null,
      totalPrice: 0
    }

    this.getCurrentProduct = this.getCurrentProduct.bind(this)
    this.addToCart = this.addToCart.bind(this)
  }

  componentDidMount() {
    axios.get('/products')
    .then(data => {
      console.log("GET: ", data)
      this.setState({
        isLoaded: true,
        products: data.data,
        currentProduct: data.data[0]
      })
    })
    .catch(err => console.log(err))
  }

  getCurrentProduct(product) {
    console.log(product)
    this.setState({
      currentProduct: product
    })
  }

  addToCart(newTotal) {
    this.setState({
      totalPrice: this.state.totalPrice + newTotal
    }, () => {console.log("totalPrice: ", this.state.totalPrice)})
  }

  render() {
    if (this.state.isLoaded) {
      return(
        <div>
          <MainWrapper>
            <Carousel data={this.state} />
            <Price_Block addToCart={this.addToCart} getCurrentProduct={this.getCurrentProduct} data={this.state}/>
          </MainWrapper>
          <SliderThumb product={this.state} />
        </div>
      )
    } else {
      return(
        null
      )
    }
  }
}

export default App;