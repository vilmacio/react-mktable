import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, waitForElement, fireEvent } from '@testing-library/react'
import Main from '../src/containers/Main'

describe('Testing Main Component', ()=>{
  it('should add a row', async() => {
    const { getByTestId } = render(<Main />);
    // Click button
    const addRowButton = await waitForElement(()=>
      getByTestId('add-row')
    )
    fireEvent.click(addRowButton)

    // Table Verify
    const table = await waitForElement(()=>
      getByTestId('table')
    )
    const tableRows = table.getElementsByClassName('table-row')
    expect(tableRows.length).toBe(2)
  });

  it('should add a col', async()=>{
    const { getByTestId } = render(<Main />);
    // Click button
    const addColButton = await waitForElement(()=>
      getByTestId('add-col')
    )
    fireEvent.click(addColButton)

    //Table Verify
    const table = await waitForElement(()=>{
      getByTestId('table')
    })

    const inputs = table.getElementsByTagName('input')
    expect(inputs.length).toBe(2)
  })
})