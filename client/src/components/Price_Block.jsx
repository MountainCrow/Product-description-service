import React from 'react'
import SizeMenu from './SizeMenu.jsx'
import Colors from './Colors.jsx'
import StarRating from './StarRating.jsx'
import {FaShoppingBag} from 'react-icons/fa'
import {FaPlusCircle} from 'react-icons/fa'
import {MdChevronRight} from 'react-icons/md'
import styled from 'styled-components'

const PriceBlockWrapper = styled.div`
  width: 100%;
  height: 530px;
  background: rgb(244,244,244);
  background: linear-gradient(180deg, rgba(244,244,244,1) 55%, rgba(235,235,235,1) 88%);
  font-family: 'M PLUS Rounded 1c', sans-serif;
`;

const ContentHeader = styled.div`
  padding-top: 10px;
`;

const Heading = styled.h1`
  font-size: 28px;
  font-weight: 900;
  lett-spacing: 1.68px;
  line-height: 28px;
  margin: 0px;
  text-align: left;
  text-size-adjust: 100%;
  width: 90%;
  padding-left: 5%;
`;

const SubHeadingWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Gender = styled.div`
  font-size: 12px;
  color: #707070;
  font-weight: 700;
  letter-spacing: 0.42px;
  line-height: 30px;
  text-align: left;
  text-size-adjust: 100%;
  width: 50%;
  padding-left: 5%;
`;

const Style = styled.span`
  font-size: 12px;
  color: #707070;
  font-weight: 400;
  letter-spacing: 0.42px;
  line-height: 30px;
  text-align: left;
  text-size-adjust: 100%;
  width: 100px;
  padding-left: 2%;
`;

const StyledRating = styled.span`
  line-height: 30px;
  text-size-adjust: 100%;
  width: 30px;
  padding-left: 70.5px;
  padding-bottom: 5px;
`;

const Price = styled.span`
  font-size: 20px;
  color: #303030;
  font-weight: 400;
  letter-spacing: .03em;
  line-height: 30px;
  margin-top: 10px;
  text-size-adjust: 100%;
  width: 100%;
  padding-left: 5%;
`;

const Description = styled.p`
  font-size: 14px;
  color: #303030;
  font-weight: 400;
  letter-spacing: 0.42px;
  line-height: 21px;
  margin: 0px;
  text-align: left;
  text-size-adjust: 100%;
  width: 85%;
  padding-left: 5%;
`;

const ReadMoreWrapper = styled.div`
  padding-left: 5%;
  position: relative;
  height: 35px;
  width: 100px;

  &:hover {
    .read-more {
      color: #cc1618;
    };
    .read-more-chevron {
      transform: translateX(10px);
      transition-duration: .2s;
      transition-timing-function: ease-in-out;
    }
  }
`;

const StyledReadMore = styled.div`
  padding-top: 5px;
  font-size: 14px;
  font-weight: bold;
  color: #303030;
`;

const StyledChevron = styled.i`
  top: 1.2px;
  font-size: 25px;
  color: #cc1618;
  position: absolute;
  transition-duration: .2s;
  transition-timing-function: ease-in-out;
`;

const ColorButtonWrapper = styled.div`
  box-sizing: border-box;
  display: block;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.42px;
  line-height: 21px;
  text-align: left;
  text-size-adjust: 100%;
  width: 90%;
  padding-left: 5%;
  padding-top: 25px;
`;

const StyledMenu = styled.div`
  padding-top: 12px;
  padding-bottom: 5px;
  width: 45%;
`;

const Button = styled.button`
  background: #cc1618;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  font-stretch: 100%;
  letter-spacing: 0.42px;
  line-height: 30px;
  padding: 12px 25px 12px 25px;
  border-radius: 4px;
  border: 0;
  outline: none;
  cursor: pointer
  width: 45%;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 2px 0;
  transition-duration: .2s;
  transition-timing-function: ease-in-out;

  &:hover {
    transform: translateY(-3px);
    transition-duration: .2s;
    transition-timing-function: ease-in-out;
    box-shadow: rgba(0, 0, 0, .3) 0px 2px 2px 0;
  }
`;
//main component that renders an add to cart button and product details pertaining to name, gender, price, description, color, and size.
var Price_Block = (props) => {

  return(
    <PriceBlockWrapper>

      <ContentHeader>
        <Heading className="heading">{props.data.currentProduct.name}</Heading>

        <SubHeadingWrapper>
          <Gender className="gender">{props.data.currentProduct.gender}<Style className="style">{props.data.currentProduct.style}</Style></Gender>
          <StyledRating><StarRating data={props.data.currentProduct}></StarRating></StyledRating>
        </SubHeadingWrapper>

        <Price className="price">${props.data.currentProduct.price}</Price>
      </ContentHeader>

      <Description>{props.data.currentProduct.description}</Description>
      <ReadMoreWrapper><StyledReadMore className='read-more'>Read More<StyledChevron className='read-more-chevron'><MdChevronRight/></StyledChevron></StyledReadMore></ReadMoreWrapper>

      <ColorButtonWrapper>
        <Colors data={props.data} getCurrentProduct={props.getCurrentProduct}/>
        <StyledMenu><SizeMenu data={props.data.currentProduct} /></StyledMenu>
        <Button onClick={() => props.addToCart(props.data.currentProduct.price)} >{<FaShoppingBag/>} ADD TO CART</Button>
      </ColorButtonWrapper>

    </PriceBlockWrapper>
  )
}

export default Price_Block