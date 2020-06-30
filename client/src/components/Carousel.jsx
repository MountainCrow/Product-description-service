import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

const StyledCarousel = styled.div`
  height: 500px;
  width: 80%;
  overflow: hidden;
`;


// const StyledCarousel = styled.div.attrs(props => ({
//   className: 'carousel',
// }))`
//   height: 500px;
//   width: 80%;
// `;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

class Carousel extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      images: this.props.data.currentProduct.image
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        images: this.props.data.currentProduct.image,
      })
    }
  }

  render() {

    let SliderImage = this.state.images.map((image, index) => (
      <div key={index} style={{height: '100%', width: "auto"}}><img style={{height: '500px', width: "auto"}} src={image}/></div>
    ))

    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: true,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <StyledCarousel>
      <Slider style={{height: '100%', width: "100%"}} {...settings}>{SliderImage}</Slider>
      </StyledCarousel>
    )

  }
}

export default Carousel;