import React from 'react'
import {FaShoppingBag} from 'react-icons/fa'
import {FaPlusCircle} from 'react-icons/fa'
import {FaCheck} from 'react-icons/fa'
import styled from 'styled-components'

const Button = styled.button`
  background: #cc1618;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  font-stretch: 100%;
  height: 52px;
  padding: 12px 25px 12px 25px;
  border-radius: 4px;
  border: 0;
  outline: none;
  cursor: pointer;
  width: 37%;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 2px 0;
  position: relative;

  &:hover {
    transform: translateY(-3px);
    transition-duration: .2s;
    transition-timing-function: ease-in-out;
    box-shadow: rgba(0, 0, 0, .3) 0px 2px 2px 0;
    .bag-icon{
      transform: translateX(-2px);
      transition-duration: .2s;
      transition-timing-function: ease-in-out;
    }
    .plus-circle-icon-wrapper{
      transform: translate(3px, -6px) scale(1.4);
      transition-duration: .2s;
      transition-timing-function: ease-in-out;
    }
  }

  &:active {
    background-color: #8f0f11;
    box-shadow: rgba(0, 0, 0, .3) 0px 2px 2px 0;
    transform: translateY(4px);
    .plus-circle-icon-wrapper{
      background: #8f0f11;
    };
  }
`;

const StyledBagIcon = styled.i`
  font-size: 25px;
  position: absolute;
  left: 25px;
  top: 12px;
  transition-duration: .2s;
  transition-timing-function: ease-in-out;
`;

const StyledPlusCircleWrapper = styled.span`
  height: 18px;
  width: 18px;
  background: #cc1618;
  border-radius: 50%;
  position: absolute;
  left: 35px;
  top: 25px;
  transition-duration: .2s;
  transition-timing-function: ease-in-out;
  border: none;
`;

const StyledPlusCircleIcon = styled.i`
  font-size: 15px;
  top: 1.5px;
  left: 1.5px;
  position: absolute;
`;

const StyledButtonText = styled.span`
  position: absolute;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  width: 140px;
  left: 40px;
  top: 15px;
  letter-spacing: 0.48px;
`;

const ActiveButton = styled.button`
  background: #6c7c57;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  font-stretch: 100%;
  height: 52px;
  padding: 12px 25px 12px 25px;
  border-radius: 4px;
  border: 0;
  outline: none;
  cursor: pointer;
  width: 37%;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 2px 0;
  transition-duration: .2s;
  transition-timing-function: ease-in-out;
  position: relative;
`;

const ActiveStyledBagIcon = styled.i`
  font-size: 25px;
  height: 30px;
  position: absolute;
  left: 35px;
  top: 12px;
  color: transparent;
`;

const ActiveStyledPlusCircleWrapper = styled.span`
  height: 18px;
  width: 18px;
  background: transparent;
  border-radius: 50%;
  position: absolute;
  left: 47px;
  top: 24px;
`;

const ActiveStyledPlusCircleIcon = styled.i`
  font-size: 15px;
  top: 1.5px;
  left: 1.5px;
  position: absolute;
  color: transparent;
`;

const ActiveStyledButtonText = styled.span`
  position: absolute;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  width: 140px;
  left: 35px;
  top: 15px;
  letter-spacing: 0.48px;
`;

const StyledCheckWrapper = styled.span`
  height: 20px;
  width: 20px;
  background: white;
  border-radius: 50%;
  position: absolute;
  left: 20px;
  top: 16px;
`

const StyledCheckIcon = styled.i`
  font-size: 15px;
  height: 30px;
  position: absolute;
  left: 2.5px;
  top: 3px;
  color: #6c7c57;
`;

class AddToCartButton extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      toggle: false
    }

    this.afterClick = this.afterClick.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props && this.state.toggle === true) {
      setTimeout(() => {
        this.setState({
          toggle: false
        })
      }, 5000)
    }
  }

  afterClick(productPrice) {
    this.setState({
      toggle: true
    }, this.props.addToCart(productPrice))
  }

  render() {

    if (this.state.toggle === false) {
      return (

        <Button onClick={() => this.afterClick(this.props.price)}>
          <StyledBagIcon className="bag-icon">{<FaShoppingBag/>}</StyledBagIcon>
          <StyledPlusCircleWrapper className="plus-circle-icon-wrapper">
            <StyledPlusCircleIcon className="plus-circle-icon">{<FaPlusCircle/>}
          </StyledPlusCircleIcon></StyledPlusCircleWrapper>
          <StyledButtonText>ADD TO CART</StyledButtonText>
        </Button>
      )
    } else {
      return (
        <ActiveButton onClick={() => this.props.addToCart(this.props.price)}>
          <ActiveStyledBagIcon className="bag-icon">{<FaShoppingBag/>}</ActiveStyledBagIcon>
          <ActiveStyledPlusCircleWrapper className="plus-circle-icon-wrapper">
            <ActiveStyledPlusCircleIcon className="plus-circle-icon">{<FaPlusCircle/>}
          </ActiveStyledPlusCircleIcon></ActiveStyledPlusCircleWrapper>
          <StyledCheckWrapper className="plus-circle-icon-wrapper">
            <StyledCheckIcon className="plus-circle-icon">{<FaCheck/>}
          </StyledCheckIcon></StyledCheckWrapper>
          <ActiveStyledButtonText>ADDED TO CART</ActiveStyledButtonText>
        </ActiveButton>
      )
    }
  }
}

export default AddToCartButton