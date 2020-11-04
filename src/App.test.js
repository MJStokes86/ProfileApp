import { render, screen } from '@testing-library/react';
import App from './App';
import Form from './components/Form'

it("renders the form", () => {
  shallow(<Form />)
})

it("renders everything without crashing", () => {
  shallow(<App />)
})