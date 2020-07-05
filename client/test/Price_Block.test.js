import React from 'react'
import { shallow, mount, render } from 'enzyme'
import renderer from 'react-test-renderer'
import Price_Block from '../src/components/Price_Block.jsx'

describe("Component testing for <Price_Block/>", () => {

  const props = {
    data:  {
      currentProduct: {
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

  test("<Price_Block/> should render", () => {

    const wrapper = shallow(<Price_Block {...props}/>)
    expect(wrapper)
  })

  test("Heading should equal 'KANKEN LAPTOP 13\"'", () => {

    const wrapper = shallow(<Price_Block {...props}/>)
    expect(wrapper.find('.heading').text()).toBe("KANKEN LAPTOP 13\"")
  })

  test("Gender should equal 'Unisex'", () => {

    const wrapper = shallow(<Price_Block {...props}/>)
    expect(wrapper.find('.gender').text()).toBe("Unisex")
  })

  test("Price should equal 100.00", () => {

    const wrapper = shallow(<Price_Block {...props}/>)
    expect(wrapper.find('.price').text()).toEqual("$110")
  })
})