import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import SliderThumb from './SliderThumb.jsx'
import {MdChevronRight} from 'react-icons/md'
import {MdChevronLeft} from 'react-icons/md'

const StyledCarouselWrapper = styled.div`
  position: relative;
  height: 600px;
  width: 100%;
  overflow: hidden;
  background: #f4f4f4;
`;

const StyledCarousel = styled.div`
  height: 600px;
  width: 100%;
  background: #f4f4f4;
`;

const StyledImageContainer = styled.div`
  height: 565px;
  background: white;
  width: auto;
`;

const StyledImage = styled.img`
  height: 500px;
  width: auto;
  margin: 15px 10px 10px 45px;
`;

const StyledLeftArrow = styled.i`
  //display: block;
  position: absolute;
  color: rgb(170, 170, 170);
  left: 1%;
  top: 40%;
  z-index: 1;
  font-size: 70px;
  opacity: 50%;
  border-radius: none;
  cursor: pointer;

  &:hover {
    opacity: 100%
  }
`;

const StyledRightArrow = styled.i`
  //display: block;
  position: absolute;
  color: rgb(170, 170, 170);
  right: 1%;
  top: 40%;
  z-index: 1;
  font-size: 70px;
  opacity: 50%;
  border-radius: none;
  cursor: pointer;

  &:hover {
    opacity: 100%
  }
`;

const StyledThumb = styled.div`
  position: absolute;
  left: 4%;
  top: 88%;
  display: flex;
  justify-content: center;
  width: 550px;
  z-index: 1;
`;
//next arrow button
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <StyledRightArrow onClick={onClick}><MdChevronRight/></StyledRightArrow>
  )
}
//prev arrow button
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <StyledLeftArrow onClick={onClick}><MdChevronLeft/></StyledLeftArrow>
  )
}

class Carousel extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      images: this.props.data.currentProduct.image,
      activeSlide: 0,
      key: this.props.data.currentProduct.color
    }

    this.updateActiveSlide = this.updateActiveSlide.bind(this)
  }
  //updates states if currentProduct has changed

  componentDidUpdate(prevProps) {

    if (prevProps.data.currentProduct !== this.props.data.currentProduct) {
      this.setState({
        images: this.props.data.currentProduct.image,
        activeSlide: 0,
        key: this.props.data.currentProduct.color
      })
    }
  }
  //sets the current view of the carousel to the argument
  updateActiveSlide(index) {
    this.slider.slickGoTo(index)
  }

  render() {

    //maps through images array in order render to carousel
    let SliderImage = this.state.images.map((image, index) => (
      <StyledImageContainer key={index}><StyledImage src={image}/></StyledImageContainer>
    ))

    const settings = {
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: false,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      key: this.state.key,
      afterChange: current => this.setState({ activeSlide: current })
    }

    return (
      <StyledCarouselWrapper>
        <StyledCarousel>
          <Slider ref={c => (this.slider = c)} {...settings}>{SliderImage}</Slider>
        </StyledCarousel>
        <div><StyledThumb><SliderThumb updateActiveSlide={this.updateActiveSlide} product={this.state}/></StyledThumb></div>
      </StyledCarouselWrapper>
    )
  }
}

export default Carousel

