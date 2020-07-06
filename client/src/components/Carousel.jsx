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

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <StyledRightArrow onClick={onClick}><MdChevronRight/></StyledRightArrow>
  )
}

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
    }

    this.updateActiveSlide = this.updateActiveSlide.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        images: this.props.data.currentProduct.image,
        activeSlide: 0
      })
    }
  }



  // previous() {
  //   this.slider.slickPrev()
  // }

  updateActiveSlide(index) {

    this.slider.slickGoTo(index)
  }


  render() {
    console.log("TESSSSSSSSSSSST: ", this.state.activeSlide)

    let SliderImage = this.state.images.map((image, index) => (
      <StyledImageContainer key={index}><StyledImage src={image}/></StyledImageContainer>
    ))

    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: false,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      beforeChange: (current, next) => this.setState({ activeSlide: next }),
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

