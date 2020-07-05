import React from 'react'
import { shallow, mount, render} from 'enzyme'
import renderer from 'react-test-renderer'
import CreateColorButton from '../src/components/CreateColorButton.jsx'

describe("Component testing for <CreateColorButton/>", () => {

  const props = {
    item:  {
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
  };

  test("<CreateColorButton should render", () => {

    const wrapper = render(<CreateColorButton {...props}/>)
    expect(wrapper)
  })

  test("Color should not change based on mock props", () => {

    const tree = shallow(<CreateColorButton {...props}/>)
    expect(wrapper.find('.colored-button').prop('props.data')).toBe("166 - Acorn")
  })
})