import renderer, { create } from 'react-test-renderer'
import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'

import App from '../pages/index.js'
import Employee from '../components/employee'
import ButtonMore from '../components/button'
import EmployeeDetails from '../components/employee-detail'
import { isObject } from 'util';


configure({ adapter: new Adapter() })

const noErrorsAllowed = () => {
  beforeEach(() => {
    sinon.stub(console, 'error')
  })

  afterEach(() => {
    sinon.assert.notCalled(console.error)
    console.error.restore()
  })
}



describe('[<App />]', () => {

  it('[<App />] shows Employee portal', () => {
    const component = renderer.create(<App />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('[<App />] should have heading 1', () => {
    const wrap = mount(<App />)
    expect(wrap.find('h1')).toHaveLength(1)
  })

  it('[<App />] should render correct text in heading', () => {
    const wrap = shallow(<App />)
    expect(wrap.find('h1').text()).toEqual('Employee portal')
  })
})

describe('[<Employee />]', () => {
  const mockData = {
    index: 0,
    name:'Wright Beach',
    email:'wrightbeach@orbaxter.com',
    company: 'BAXTER'
  }
  const wrap = mount(<Employee index={mockData.index} data={mockData} />)

  it('[<Employee />] index prop should be defined', () => {
    expect(wrap.props().index).toBeDefined()
  })

  it('[<Employee />] title heading 5 should render mockData.name', () => {
    expect(wrap.find('h5').text()).toContain(mockData.name)
  })

  it('[<Employee />] to have button', () => {
    expect(wrap.find('button').first()).toBeDefined()
  })
})


describe('[<EmployeeDetails />]', () => {
  const mockData = {
    _id: 0,
    name:'Wright Beach',
    email:'wrightbeach@orbaxter.com',
    company: 'BAXTER'
  }
  const wrap = mount(<EmployeeDetails show={false} form={false} showForm={() => false} hideForm={() => true} hideModal={() => true} data={mockData} />)

  it('[<EmployeeDetails />] props should be defined', () => {
    expect(wrap.props().show).toBeDefined()
    expect(wrap.props().form).toBeDefined()
  })

  it('[<EmployeeDetails />] should have table with employee data', () => {
    expect(wrap.find('table')).toHaveLength(1)
  })

  it('[<EmployeeDetails />] props should be defined', () => {
    const wrap = mount(<EmployeeDetails show={true} form={true} showForm={() => true} hideForm={() => false} hideModal={() => true} data={mockData} />)
    expect(wrap.find('form')).toBeTruthy()
  })
})

describe('[<ButtonMore />]', () => {

  let showModal

  beforeEach(() => {
    showModal = jest.fn()
  })

  const wrap = shallow(<ButtonMore  showModal={() => showModal()}/>)

  it('[<ButtonMore /> ] renders correct text', () => {
    expect(wrap.text()).toEqual('More ')
  })

  it('[<ButtonMore /> ] has correct class name', () => {
    expect(wrap.hasClass('btn')).toBe(true)
  })

  it('[<Button />] call showModal on click', () => {
    const btn = wrap.find('button').first().simulate('click')
    expect(showModal).toBeCalled()
  })

})
