import React from 'react'

import { render } from '../../../../utils/test-utils'

import LanguageSwitcher from '../index'

describe('<LanguageSwitcher />', () => {
    it('Should render like snapshot', () => {
        const component = render(<LanguageSwitcher />)
        expect(component).toMatchSnapshot()
    })

    // it("gets initial language and it's being passed", () => {
    //     const { getByText } = render(<LanguageSwitcher />)
    //     const selectInput = getByText('en')
    //     console.log(selectInput)
    //     expect(selectInput).toHaveProperty('value', 'en')
    // })

    // it('Check if language changes after select', () => {
    //     const { getByRole, container } = render(<LanguageSwitcher />)
    //     fireEvent.mouseDown(getByRole('button'))
    //     const listbox = within(getByRole('listbox'))
    //     fireEvent.click(listbox.getByText('ja'))
    //     expect(container.querySelector('input')).toHaveProperty('value', 'ja')
    //     expect(getByRole('button')).toHaveTextContent('ja')
    // })
    // it('Check listitems', () => {
    //     const { getByRole, getAllByRole } = render(<LanguageSwitcher />)
    //     fireEvent.mouseDown(getByRole('button'))
    //     const listItems = getAllByRole('option')
    //     expect(listItems).toHaveLength(3)
    // })
})
