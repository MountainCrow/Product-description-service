import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.select`
 width: 250px;
 padding: 15px 30px 15px 20px;
 border: 2px solid rgba(0, 0, 0, .15);
 background: #fff;
 border-radius: 2px;
 color: #707070;
 font-family: 'M PLUS Rounded 1c';
 font-size: 14px;
 font-weight: 400;
 margin-bottom: 5px;
`;

class SizeMenu extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      sizes: this.props.data.size,
      hasSizes: false
    }
  }

  componentDidMount() {
    if (this.state.sizes[0] !== 'One Size') {
      this.setState({
        hasSizes: true
      })
    }
  }

  render() {

    const ItemSize = this.state.sizes.map((item, index) => (
      <option key={index}>{item}</option>
    ))

    if (this.state.hasSizes === true) {
      return(
        <div>
          <StyledMenu>
            <option defaultValue="Select a size" hidden>Select a size</option>
            {ItemSize}
          </StyledMenu>
        </div>
      )
    } else {
      return(
        <div>
          <StyledMenu>
            <option defaultValue="One Size" hidden>One Size</option>
            {ItemSize}
          </StyledMenu>
        </div>
      )
    }
  }
}

export default SizeMenu;