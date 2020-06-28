import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
`;

const StyledMenu = styled.select`
 width: 100%;
 padding: 10px 30px 10px 20px;
 border: 2px solid rgba(0, 0, 0, .15);
 background: #fff;
 border-radius: 2px;
`;

class SizeMenu extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      sizes: this.props.data.size,
      hasSizes: false
    }
  }

  componentDidMount() {
    if (this.state.sizes[0] !== 'One Size') {
      this.setState({
        isLoaded: true,
        hasSizes: true
      })
    } else {
      this.setState({
        isLoaded: true
      })
    }
  }

  render() {

    const ItemSize = this.state.sizes.map((item, index) => (
      <option key={index}>{item}</option>
    ))

    if (this.state.hasSizes === true) {
      return(
        <Wrapper>
          <StyledMenu>
            <option defaultValue="Select a size" hidden>Select a size</option>
            {ItemSize}
          </StyledMenu>
        </Wrapper>
      )
    } else {
      return(
        <Wrapper>
          <StyledMenu>
            <option defaultValue="One Size" hidden>One Size</option>
            {ItemSize}
          </StyledMenu>
        </Wrapper>
      )
    }
  }
}

export default SizeMenu;