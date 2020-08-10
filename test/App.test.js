import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import App from '../src/App.js';

describe('Testing App Component', ()=>{
  it('renders learn react link', async() => {
    const { getByTestId } = render(<App />);
    const linkElement = await waitForElement(()=>
      getByTestId('title')
    )
    linkElement.textContent = 'newText'
    expect(linkElement.textContent).toBe('newText')

  });
})
 