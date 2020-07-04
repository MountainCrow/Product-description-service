import React from 'react'
import { shallow, mount, render } from 'enzyme'
import SliderThumb from '../src/components/SliderThumb.jsx'

describe("Component testing for <SliderThumb/>", () => {

  const props = {
    product:  ["https://hrphxfec.s3-us-west-1.amazonaws.com/Kanken+Laptop+13/kanken_acorn.jpg"]
  }

  test("<SliderThumb/> should render", () => {

    const wrapper = shallow(<SliderThumb {...props}/>)
    expect(wrapper)
  })
})