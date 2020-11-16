import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import IconButtonStyled, { DrawerChildren } from './styledComponents'

const SideDrawer: React.FC = ({ children }) => {
    const Drawer = createDrawerNavigator()

    // const openDrawer = ({ navigation }) => {
    //     navigation.openDrawer()
    // }

    // const closeDrawer = ({ navigation }) => {
    //     navigation.closeDrawer()
    // }

    return (
        <>
            {/* tst */}
            <NavigationContainer>
                <IconButtonStyled
                    icon="menu"
                    data-testid="IconButtonStyled"
                    color="inherit"
                    aria-label="open drawer"
                    // onPress={() => openDrawer}
                    // edge="start"
                />

                <Drawer.Navigator
                // data-testid="StyledDrawer"
                // anchor="left"
                // open={openDrawer}
                // onClose={() => setOpenDrawer(false)}
                >
                    <DrawerChildren>{children}</DrawerChildren>
                </Drawer.Navigator>
            </NavigationContainer>
        </>
    )
}

export default SideDrawer
