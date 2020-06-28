import React from 'react';
import Flickity from 'react-flickity-component';
import styled from 'styled-components'

const StyledCarousel = styled.div.attrs(props => ({
  className: 'carousel',
}))`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const StyledCarouselCell = styled.img`
  height: 600px;
  width: 100%;
`;

// const StyledPrevButton = styled.button.attrs(props => ({
//   className: 'flickity-prev-next-button',
// }))`
//   top: 50%;
//   width: 44px;
//   height: 44px;
//   border-radius: 50%;
//   /* vertically center */
//   transform: translateY(-50%);
// `;

const flickityOptions = {
  initialIndex: 0,
  fullscreen: true,
  imagesLoaded: true,
  pageDots: false,
  prevNextButtons: true,
  adaptiveHeight: false,
  wrapAround: false,
  lazyLoad: true,
  cellAlign: 'left',
  asNavFor: '.carousel-main'


  // groupCells: 1
  // contain: true
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
      <StyledCarouselCell src={image}/>
    ))

    return (
      <StyledCarousel>
        {/* <StyledPrevButton> */}
          <Flickity
            className={'carousel'} // default ''
            elementType={'div'} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate={true}
            static // default false
          >
            {SliderImage}
          </Flickity>
        {/* </StyledPrevButton> */}
      </StyledCarousel>
    )
  }
}

export default Carousel;