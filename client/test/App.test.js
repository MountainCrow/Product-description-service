import React from 'react'
import App from '../src/components/App.jsx'
import { shallow, mount, render } from 'enzyme'

describe('Component testing for <App />', () => {

  test("<App/> should render", async () => {
    const wrapper = await shallow(<App/>)
    expect(wrapper)
  })
})
