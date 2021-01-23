import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { render } from '@testing-library/react-native'

import DrawerNavigation from '../../../Organisms/DrawerNavigation'

describe('<Home />', () => {
    it('Should render like snapshot', () => {
        const component = render(
            <NavigationContainer>
                <DrawerNavigation />
            </NavigationContainer>
        )

        expect(component).toMatchSnapshot()
    })

    it('HamburgerIcon is rendered', () => {
        const { getByTestId } = render(
            <NavigationContainer>
                <DrawerNavigation />
            </NavigationContainer>
        )

        expect(getByTestId('HamburgerIcon')).toBeTruthy()
    })
})
