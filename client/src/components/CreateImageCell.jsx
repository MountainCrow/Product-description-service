import React from 'react'
import styled from 'styled-components'


const StyledThumb = styled.img`
  width: 60px;
  height: 60px;
  background: #fff;
  margin: 5px;
  border: ${props => {
    if (props.props.index === props.props.activeCell) {
      return '1px solid black'
    }
  }}
`;

//creates image cell from props passed down from <SliderThumb/>
const CreateImageCell = (props) => {

  return(
    <StyledThumb className={`thumbnail-${props.index}`} props={props} src={props.imageSource}></StyledThumb>
  )
}

export default CreateImageCell