import React from 'react';
import { shallow, mount, render } from 'enzyme';
import StarRating from '../src/components/StarRating.jsx';

describe("Component testing for <StarRating/>", () => {

  const props = {
    data:  {

      name: "KANKEN LAPTOP 13\"",
      type: "backpack",
      description: "Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit",
      rating: 5,
      totalRatings: 6,
      price: 110.00,
      gender: "Unisex",
      style: "Style # F27171",
      size: ["One Size"],
      color: "166 - Acorn",
      image: ["https://hrphxfec.s3-us-west-1.amazonaws.com/Kanken+Laptop+13/kanken_acorn.jpg"]

    }
  };

  test("<StarRating/> should render", () => {

    const Wrapper = shallow(<StarRating {...props}/>)
    expect(Wrapper)
  })

  test("Expect length of to equal 1", () => {

    const wrapper = shallow(<StarRating {...props}/>)
    expect(wrapper.find('.star-rating')).toHaveLength(1)
  })

  test("Expect total ratings to equal 6", () => {

    const wrapper = shallow(<StarRating {...props}/>)
    expect(wrapper.find('.total-ratings').text()).toBe('(6)')
  })
})