import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import Navbar from '../src/components/Navbar'

describe('Testing Navbar Component', ()=>{
  it('should opening github page', async() => {
    const { getByTestId } = render(<Navbar />);
    const repoButton = await waitForElement(()=>
      getByTestId('repository-link')
    )
    fireEvent.click(repoButton)
    expect(repoButton.href).toBe('https://github.com/vilmacio22/react-mktable')
  });
})
 