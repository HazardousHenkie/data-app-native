import React from 'react'

import LanguageSwitcherWrapper from '../styledComponents'

import 'jest-styled-components'
import { render } from '../../../../utils/test-utils'

describe('<LanguageSwitcherWrapper />', () => {
    it('should render and match the snapshot', () => {
        const { toJSON } = render(<LanguageSwitcherWrapper />)

        expect(toJSON).toMatchSnapshot()
    })
})
