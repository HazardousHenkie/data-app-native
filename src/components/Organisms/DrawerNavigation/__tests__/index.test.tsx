import React from 'react'

import { render, fireEvent, act } from '@testing-library/react-native'

import { NavigationContainer } from '@react-navigation/native'
import SideDrawer from '../index'

describe('<SideDrawer />', () => {
    it('should render CustomDrawerContent', async () => {
        const { getByTestId } = render(
            <NavigationContainer>
                <SideDrawer />
            </NavigationContainer>
        )

        const CustomDrawerContent = await getByTestId('CustomDrawerContent')
        expect(CustomDrawerContent).toBeTruthy()
    })

    it('should render HomeScreen', async () => {
        const { getByTestId } = render(
            <NavigationContainer>
                <SideDrawer />
            </NavigationContainer>
        )
        const HomeScreen = await getByTestId('HomeScreen')

        expect(HomeScreen).toBeTruthy()
    })

    it('should render AboutScreen', async () => {
        const { getByTestId, getByText } = render(
            <NavigationContainer>
                <SideDrawer />
            </NavigationContainer>
        )

        act(() => {
            fireEvent.press(getByText('About'))
        })

        const AboutScreen = await getByTestId('AboutScreen')

        expect(AboutScreen).toBeTruthy()
    })
})
