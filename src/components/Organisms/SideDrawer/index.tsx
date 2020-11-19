import React from 'react'

import {
    createDrawerNavigator,
    DrawerContentComponentProps,
    DrawerContentOptions,
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer'
import { DrawerActions, useNavigation } from '@react-navigation/native'

import { Text, View } from 'react-native'
import MapView from 'react-native-maps'
import IconButtonStyled from './styledComponents'

// TODO: move to seperate component and add
const CustomDrawerContent = (
    props: DrawerContentComponentProps<DrawerContentOptions>
) => {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <Text>test</Text>
        </DrawerContentScrollView>
    )
}

// TODO: move te screens folder
const AboutScreen = () => {
    return (
        <View>
            <Text>about</Text>
        </View>
    )
}

// TODO: move te screens folder
const HomeScreen = () => {
    const { dispatch } = useNavigation()

    const openDrawer = () => {
        console.log('click')
        dispatch(DrawerActions.openDrawer())
    }

    // const closeDrawer = () => {
    //     dispatch(DrawerActions.openDrawer())
    // }

    return (
        <View>
            <IconButtonStyled
                icon="menu"
                data-testid="IconButtonStyled"
                aria-label="open drawer"
                onPress={() => openDrawer()}
            />

            {/* // TODO: add styling to map style={{ width: '100%', height: '100%' }}  */}
            <MapView />
            {/* <DrawerChildren>{children}</DrawerChildren> */}
        </View>
    )
}

// TODO: rename to drawer
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
