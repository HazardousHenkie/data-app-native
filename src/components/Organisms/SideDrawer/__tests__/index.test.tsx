import React from 'react'

import { render } from '../../../../utils/test-utils'

import SideDrawer from '../index'

//TODO: Fix tests callstack.github.io/react-native-testing-library/docs/api-queries
describe('<SideDrawer />', () => {
    it('should render CustomDrawerContent', async () => {
        const { getByTestId } = render(<SideDrawer />)

        const CustomDrawerContent = await getByTestId('CustomDrawerContent')
        expect(CustomDrawerContent).toBeTruthy()
    })

    it('should render HomeScreen', async () => {
        const { getByTestId } = render(<SideDrawer />)
        const HomeScreen = await getByTestId('HomeScreen')

        expect(HomeScreen).toBeTruthy()
    })
    // it('should render AboutScreen', () => {
    //     const { getByTestId } = render(
    //         <NavigationContainer>
    //             <SideDrawer />
    //         </NavigationContainer>
    //     )
    //     const AboutScreen = getByTestId('AboutScreen')
    //     expect(AboutScreen).toBeInTheDocument()
    // })
})
