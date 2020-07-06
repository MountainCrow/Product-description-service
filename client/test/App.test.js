import React from 'react'
import App from '../src/components/App.jsx'
import { shallow, mount, render } from 'enzyme'
import puppeteer from 'puppeteer'

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('http://localhost:3001', { waitUntil: 'networkidle2' })

  // const dimensions = await page.evaluate(() => {
  //   return {
  //     width: document.documentElement.clientWidth,
  //     height: document.documentElement.clientHeight,
  //     deviceScaleFactor: window.devicePixelRatio
  //   }
  // })

  // console.log("Dimensions: ", dimensions)
  await browser.close()
})()

describe('Component testing for <App />', () => {

  test("<App/> should render", async () => {
    const wrapper = shallow(<App/>)
    await expect(wrapper)
  })
})
