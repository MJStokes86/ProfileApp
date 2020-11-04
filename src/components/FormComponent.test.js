import React from 'react'
import FormComponent from './FormComponent'
import Enzyme,{
configure,
shallow,
mount,
render } from 'enzyme'
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({adapter: new Adapter() });

global.React = React;
global.Enzyme = Enzyme;
global.shallow = shallow;
global.render = render;
global.mount = mount;

describe("Form Input Data", () => {
    it("should render the first name", () => {
        const component = shallow(<FormComponent 
          data = {{firstName: ''}}  />)
        const input = component.find('input').first();
        expect(input).toHaveLength(1)
        expect(input.prop('type')).toEqual('text')
        expect(input.prop('name')).toEqual('firstName')
    })

    it("should render the last name", () => {
        const component = shallow(<FormComponent 
          data = {{lastName: ''}}  />)
        const input = component.find('input').at(1);
        expect(input).toHaveLength(1)
        expect(input.prop('type')).toEqual('text')
        expect(input.prop('name')).toEqual('lastName')
    })

    it("should render the age", () => {
        const component = shallow(<FormComponent 
          data = {{age: ''}} />)
        const input = component.find('input').at(2);
        expect(input).toHaveLength(1)
        expect(input.prop('type')).toEqual('text')
        expect(input.prop('name')).toEqual('age')
    })

    it("should render the location", () => {
        const component = shallow(<FormComponent 
          data = {{location: ''}}  />)
        const input = component.find('input').at(3);
        expect(input).toHaveLength(1)
        expect(input.prop('type')).toEqual('text')
        expect(input.prop('name')).toEqual('location')
    })

    it("should render Male", () => {
        const component = shallow(<FormComponent 
          data = {{gender: ''}}  />)
        const label = component.find('label').at(0)
        expect(label).toHaveLength(1);
        expect(label.text()).toEqual('Male');
    
        const input = component.find('input').at(4);
        expect(input).toHaveLength(1)
        expect(input.prop('type')).toEqual('radio')
        expect(input.prop('checked')).toEqual(false)
    })

    it("should render Female", () => {
        const component = shallow(<FormComponent 
          data = {{gender: ''}}  />)
        const label = component.find('label').at(1)
        expect(label).toHaveLength(1);
        expect(label.text()).toEqual('Female');
    
        const input = component.find('input').at(5);
        expect(input).toHaveLength(1)
        expect(input.prop('type')).toEqual('radio')
        expect(input.prop('checked')).toEqual(false)
    })
})