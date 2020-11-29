import React from 'react'

import { IconButtonStyled } from './styledComponents'

import 'jest-styled-components'
import { render } from '../../../utils/test-utils'

describe('<IconButtonStyled />', () => {
    it('should render and match the snapshot', () => {
        const { toJSON } = render(<IconButtonStyled icon="menu" />)

        expect(toJSON).toMatchSnapshot()
    })

    // it('should render a <SVG> tag', () => {
    //     const { toJSON } = render(<IconButtonStyled icon="menu" />)

    //     //  expect(toJSON.firstElementChild?.tagName).toEqual('BUTTON')
    // })
})
