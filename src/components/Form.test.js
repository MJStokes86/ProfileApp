import React from 'react'
import Form from './Form'
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


describe("Input fields", () => {
    it("should display the first name correctly onChange", function() {
        const component = shallow(<Form />)
        const input = component.find('input').at(0);
        input.value = "";
        expect(component.state().firstName).toEqual("");
        
    })

    it("should display the last name correctly onChange", function() {
        const component = shallow(<Form />)
        const input = component.find('input').at(1);
        input.value = "";
        expect(component.state().lastName).toEqual("");
        
    })

    it("should display the age correctly onChange", function() {
        const component = shallow(<Form />)
        const input = component.find('input').at(2);
        input.value = "";
        expect(component.state().age).toEqual("");
        
    })

    it("should display the location correctly onChange", function() {
        const component = shallow(<Form />)
        const input = component.find('input').at(3);
        input.value = "";
        expect(component.state().location).toEqual("");
        
    })

    it("should capture the gender correctly onChange", function() {
        const component = shallow(<Form />)
        const input = component.find('input').at(0);
        input.value = ""
        expect(component.state().gender).toEqual("");
        
    })
})