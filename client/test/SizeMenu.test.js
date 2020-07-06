import React from 'react'
import { shallow, mount, render } from 'enzyme'
import renderer from 'react-test-renderer'
import SizeMenu from  '../src/components/SizeMenu.jsx'

describe("Component testing for <SizeMenu/>", () => {

  const props = {
    data:  {
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

  test("<SizeMenu/> renders", () => {

    const wrapper = shallow(<SizeMenu {...props}/>)
    expect(wrapper)
  })

  test("Placeholder value should equal 'One Size'", () => {

    const wrapper = shallow(<SizeMenu {...props}/>)
    expect(wrapper.find('.placeholder').text()).toBe('One Size')
  })

  test("<SizeMenu/> snapshot", () => {

    const tree = renderer.create(<SizeMenu {...props}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})