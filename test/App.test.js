import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import Main from '../src/containers/Main'

describe('Testing Main Component', ()=>{
  it('should add a row', async() => {
    const { getByTestId } = render(<Main />);
    const addButton = await waitForElement(()=>
      getByTestId('add-row')
    )
    fireEvent.click(addButton)
    expect(addButton.textContent).toBe('newText')

  });
})
 