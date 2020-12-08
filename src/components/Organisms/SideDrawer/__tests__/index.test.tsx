import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { render } from '../../../../utils/test-utils'

import SideDrawer from '../index'

describe('<SideDrawer />', () => {
    it('should render like snapshot', () => {
        const component = render(
            <NavigationContainer>
                <SideDrawer />
            </NavigationContainer>
        )
        expect(component).toMatchSnapshot()
    })

    it('should render CustomDrawerContent', () => {
        const { getByTestId } = render(
            <NavigationContainer>
                <SideDrawer />
            </NavigationContainer>
        )

        const CustomDrawerContent = getByTestId('CustomDrawerContent')

        expect(CustomDrawerContent).toBeInTheDocument()
    })

    it('should render HomeScreen', () => {
        const { getByTestId } = render(
            <NavigationContainer>
                <SideDrawer />
            </NavigationContainer>
        )

        const HomeScreen = getByTestId('HomeScreen')

        expect(HomeScreen).toBeInTheDocument()
    })

    it('should render AboutScreen', () => {
        const { getByTestId } = render(
            <NavigationContainer>
                <SideDrawer />
            </NavigationContainer>
        )

        const AboutScreen = getByTestId('AboutScreen')

        expect(AboutScreen).toBeInTheDocument()
    })
})
