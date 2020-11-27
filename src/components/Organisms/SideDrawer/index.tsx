import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawerContent from './customDrawerContent'
import HomeScreen from '../../Screens/Home'
import AboutScreen from '../../Screens/About'

const SideDrawer: React.FC = () => {
    const Drawer = createDrawerNavigator()

    return (
        <>
            <Drawer.Navigator
                drawerContent={(props) => <CustomDrawerContent {...props} />}
            >
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="About" component={AboutScreen} />
            </Drawer.Navigator>
        </>
    )
}

export default SideDrawer
