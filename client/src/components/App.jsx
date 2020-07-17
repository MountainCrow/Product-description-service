import React from 'react'
import axios from 'axios'
import Carousel from './Carousel.jsx'
import PriceBlock from'./PriceBlock.jsx'
import SliderThumb from './SliderThumb.jsx'
import styled from 'styled-components'

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1185px;
  max-height: 1000px;
  margin: 200px auto 0 auto;
  background: f4f4f4;
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
  //Sets the state using data which is randomly generated on the server
  componentDidMount() {
    axios.get('52.53.246.116:3001/name/Tasty_Steel_Ball')
    .then(data => {
      console.log("GET: ", data)
      this.setState({
        isLoaded: true, //needed for conditional rendering
        products: data.data, //an array for randomly generated products
        currentProduct: data.data[0] //establishes the current product
      })
    })
    .catch(err => console.log(err))
  }
  //click handler for the color buttons which sets the currentProduct state to the selected product
  getCurrentProduct(product) {
    //console.log(product)
    this.setState({
      currentProduct: product
    })
  }
  //click handler for the add to cart button which adds the current product price to the total property in the state
  addToCart(newTotal) {
    this.setState({
      totalPrice: this.state.totalPrice + newTotal
    }, () => {console.log("totalPrice: ", this.state.totalPrice)})
  }

  render() {
    if (this.state.isLoaded) {
      return(
        <div >
          <MainWrapper>
            <Carousel data={this.state} />
            <PriceBlock addToCart={this.addToCart} getCurrentProduct={this.getCurrentProduct} data={this.state}/>
          </MainWrapper>
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
