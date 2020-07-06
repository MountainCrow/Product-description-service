import React from 'react'
import SizeMenu from './SizeMenu.jsx'
import Colors from './Colors.jsx'
import StarRating from './StarRating.jsx'
import AddToCartButton from './AddToCartButton.jsx'
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
  padding-left: 7%;
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
  padding-left: 7%;
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
  padding-left: 7%;
`;

const Description = styled.p`
  font-size: 16px;
  color: #303030;
  font-weight: 300;
  letter-spacing: 0.42px;
  line-height: 21px;
  margin: 0px;
  text-align: left;
  text-size-adjust: 100%;
  width: 85%;
  padding-left: 7%;
`;

const ReadMoreWrapper = styled.div`
  padding-left: 7%;
  position: relative;
  height: 35px;
  width: 100px;

  &:hover {
    cursor: pointer;
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
  font-size: 16px;
  font-weight: bold;
  color: #303030;
`;

const StyledChevron = styled.i`
  top: 3px;
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
  padding-left: 7%;
  padding-top: 25px;
`;

const StyledMenu = styled.div`
  margin-top: 10px;
  padding-top: 12px;
  padding-bottom: 5px;
  width: 45%;
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
        <AddToCartButton price={props.data.currentProduct.price} addToCart={props.addToCart}/>
      </ColorButtonWrapper>

    </PriceBlockWrapper>
  )
}

export default Price_Block