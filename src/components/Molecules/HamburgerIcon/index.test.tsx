import React from 'react'

import { render } from '../../../utils/test-utils'

import HamburgerIcon from '.'

describe('<HamburgerIcon />', () => {
    it('HamburgerIcon is rendered', () => {
        const { getByTestId } = render(<HamburgerIcon />, {}, true)

        expect(getByTestId('HamburgerIcon')).toBeTruthy()
    })
})
