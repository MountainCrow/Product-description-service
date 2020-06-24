import React from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import Price_Block from'./Price_Block.jsx';
import SliderThumb from './SliderThumb.jsx'
import styled from 'styled-components';

const Test = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1185px;
  max-height: 1000px;
  margin: 0 auto;
  background: f4f4f4;
`;

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      products: [],
      currentProduct: null
    }
  }

  componentDidMount() {
    axios.get('/products')
    .then(data => {
      this.setState({
        isLoaded: true,
        products: data.data,
        currentProduct: data.data[0]
      })

    })
    .catch(err => console.log(err))
  }



  render() {
    if (this.state.isLoaded === true) {
      return(
        <div>
          <Test>
            <Carousel product={this.state} />
            <Price_Block product={this.state} />
          </Test>
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