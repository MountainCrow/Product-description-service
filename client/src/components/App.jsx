import React from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import Price_Block from'./Price_Block.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      products: [{image: 'test'}],
      // currentProduct: products[0]
    }
  }

  componentDidMount() {
    axios.get('/products')
    .then(data => {
      this.setState({
        products: data.data
        // currentProduct: products[0]
      })

    })
    .catch(err => console.log(err))
  }

  render() {
    return(
      <div>
        <Carousel product={this.state} />
        <Price_Block product={this.state} />
      </div>

    )
  }
}

export default App;