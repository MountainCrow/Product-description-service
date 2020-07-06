import React from 'react'
import CreateColorButton from './CreateColorButton.jsx'
import styled from 'styled-components'

const StyledLabel = styled.div`
  padding-bottom: 5px;
  color: #707070;
  font-size: 12px;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  cursor: pointer;
`;

class Colors extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      products: this.props.data.products,
      // currentProduct: this.props.data.currentProduct,
      onHover: false
    }

    this.colorHoverOn = this.colorHoverOn.bind(this)
    this.colorHoverOff = this.colorHoverOff.bind(this)
  }

  colorHoverOn(color) {
    this.setState({
      onHover: true,
      tempColor: color
    })
  }

  colorHoverOff() {
    this.setState({
      onHover: false,
      tempColor: null
    })
  }

  render() {

    const ColorButton = this.state.products.map((item, index) => (
      <CreateColorButton key={index} item={item} getCurrentProduct={this.props.getCurrentProduct} colorHoverOn={this.colorHoverOn} colorHoverOff={this.colorHoverOff}/>
    ))

    if (this.state.onHover === false) {
      return(
        <div>
          <StyledLabel>{this.props.data.currentProduct.color}</StyledLabel>
          <StyledButtonWrapper>{ColorButton}</StyledButtonWrapper>
        </div>
      )
    } else {
      return(
        <div>
          <StyledLabel>{this.state.tempColor}</StyledLabel>
          <StyledButtonWrapper>{ColorButton}</StyledButtonWrapper>
        </div>
      )
    }
  }
}

export default Colors