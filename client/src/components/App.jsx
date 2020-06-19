import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      products: []
      //currentProduct: products.item
    }
  }

  componentDidMount() {
    axios.get('/products')
    .then(data => console.log(data.data))
    .catch(err => console.log(err))
  }

  render() {
    return(
      <h1>Hello World!!!</h1>
    )
  }
}

export default App;