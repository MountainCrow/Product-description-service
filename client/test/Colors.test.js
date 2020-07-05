import React from 'react'
import { shallow, mount, render } from 'enzyme'
import renderer from 'react-test-renderer'
import Colors from '../src/components/Colors.jsx'

describe("Component testing for <Colors/>", () => {

  const props = {
    data:  {
      products: [{
        name: "KANKEN LAPTOP 13\"",
        type: "backpack",
        description: "Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit",
        userRating: 5,
        totalRatings: 6,
        price: 110.00,
        gender: "Unisex",
        style: "Style # F27171",
        size: ["One Size"],
        color: "166 - Acorn",
        image: ["https://hrphxfec.s3-us-west-1.amazonaws.com/Kanken+Laptop+13/kanken_acorn.jpg"]
      }],
      currentProduct : {
        name: "KANKEN LAPTOP 13\"",
        type: "backpack",
        description: "Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit",
        userRating: 5,
        totalRatings: 6,
        price: 110.00,
        gender: "Unisex",
        style: "Style # F27171",
        size: ["One Size"],
        color: "166 - Acorn",
        image: ["https://hrphxfec.s3-us-west-1.amazonaws.com/Kanken+Laptop+13/kanken_acorn.jpg"]
      }
    }
  }
  
  test("<Colors/> should render", () => {

    const wrapper = shallow(<Colors {...props}/>)
    expect(wrapper)
  })

  test("<Colors/> snapshot", () => {

    const tree = renderer.create(<Colors {...props}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})